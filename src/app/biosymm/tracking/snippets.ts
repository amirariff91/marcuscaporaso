export const CONSENT_MODE_JS = `/*
 * Biosymm — Consent Mode v2 default + late-consent callback queue (health-data safe)
 * For: Joel. Load this in <head> BEFORE the GTM container snippet, on every page.
 *
 * Everything defaults to DENIED so no ad/analytics tag fires until the visitor gives
 * express consent. Australia isn't EU, but this gate is required by the Privacy Act / APPs
 * for health data — it is the mechanism that keeps the booking flow compliant.
 *
 * Wire your consent banner's "Accept" button to call biosymmGrantConsent(), and its
 * "Reject"/"Withdraw" control to biosymmRevokeConsent() (otherwise a user who accepts then
 * later withdraws still has a persisted grant and tags re-fire on the next page load).
 * The banner notice MUST name Google as an overseas recipient and state the consequences
 * of overseas disclosure (see IMPLEMENTATION.md §5) — a generic cookie banner is not
 * enough for health data.
 *
 * IMPORTANT — how late consent works (don't rely on GTM to replay blocked tags):
 * GTM does NOT queue or replay tags that were blocked only by consent. A tag fires (or
 * doesn't) at the moment its trigger fires, based on consent state AT THAT MOMENT. So a
 * visitor who lands on /booking-confirmed and accepts consent AFTER the booking_completed
 * push would lose the conversion if the push already ran under denied consent.
 *
 * The fix is application-side: code that wants to fire an ad/analytics signal wraps itself
 * in window.biosymmWhenConsented(cb) — cb runs immediately if consent is already granted,
 * otherwise it is queued and drained once when biosymmGrantConsent() is called. See
 * snippets/booking-confirmed.html for the usage.
 */
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Default: deny everything until consent (applies before GTM/gtag loads).
// No url_passthrough: it would persist gclid into the URL/bar — a leak vector through
// Nookal's redirect and third-party referrers, and it requires Advanced Consent Mode.
// Keep the Basic posture (no ad/analytics transmission before consent).
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 500
});

// --- Late-consent callback queue ---------------------------------------------------
// biosymmWhenConsented(cb): run cb now if consent is already granted, else queue it.
// biosymmGrantConsent(): grants consent, persists it, and drains the queue ONCE.
window._biosymmConsented = false;
window._biosymmConsentQueue = [];
window.biosymmWhenConsented = function (cb) {
  if (window._biosymmConsented) { cb(); } else { window._biosymmConsentQueue.push(cb); }
};

// Call this from the consent banner's Accept action.
function biosymmGrantConsent() {
  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    // ad_personalization stays granted on accept per client decision. NOTE — TWO separate
    // sign-off gates must clear this before go-live (logged decision, IMPLEMENTATION.md §5):
    //   (1) Privacy Act / APP 8 + the June 2026 OAIC determinations (Medmate / Monash IVF)
    //       implicate retargeting/matching on health audiences.
    //   (2) Google's OWN ads policy: "no remarketing/retargeting for health services" is an
    //       account-suspension risk, and Customer Match / your-data segments are not supported
    //       for sensitive/health categories — independent of the Privacy Act.
    // If EITHER gate fails, change this to 'denied' before go-live. Do not change it silently.
    ad_personalization: 'granted',
    analytics_storage: 'granted'
  });
  window._biosymmConsented = true;
  // Kept for any external listener/trigger that keys off it. Do NOT rely on this to
  // re-fire consent-blocked GTM tags — GTM does not replay them (use biosymmWhenConsented).
  dataLayer.push({ event: 'consent_granted' });
  try { localStorage.setItem('biosymm_consent', 'granted'); } catch (e) {}
  // Drain queued callbacks exactly once.
  var q = window._biosymmConsentQueue.splice(0);
  for (var i = 0; i < q.length; i++) { try { q[i](); } catch (e) {} }
}

// Call this from the consent banner's Reject / Withdraw action. Clears the persisted grant so a
// later page load does NOT auto-re-grant, and pushes consent back to denied so already-loaded
// tags see the state change. Required for health-data consent: withdrawal must be honoured,
// not just the initial grant. (Note: this does not recall/retract data already sent to Google
// while consent was granted — that is a separate, legally-reviewed retention/deletion question.)
function biosymmRevokeConsent() {
  gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied'
  });
  window._biosymmConsented = false;
  try { localStorage.removeItem('biosymm_consent'); } catch (e) {}
}

// Re-apply a prior grant on subsequent page loads (drains nothing — queue is empty this early).
try {
  if (localStorage.getItem('biosymm_consent') === 'granted') biosymmGrantConsent();
} catch (e) {}
`;

export const BOOKING_CONFIRMED_HTML = `<!--
  Biosymm — /booking-confirmed page snippet  (Phase 1: own-domain redirect)
  For: Joel. Drop this into the biosymm.com.au/booking-confirmed page.

  Page prerequisites (ordering matters — both load BEFORE the GTM container in <head>):
    1. snippets/consent-mode.js  — Consent Mode v2 defaults + biosymmWhenConsented() queue
    2. the EARLY HEAD block below — captures/validates/strips ?ref= before any tag reads the URL

  What it does:
    - captures the opaque booking reference Nookal appended (?ref=...), validates it, and
      STRIPS it from the URL before GA4/GTM auto-collect page_location (so the ref can never
      leak via page_location, referrers, or CLIENT-SIDE logs even if Nookal ever mis-populates it).
      NOTE: this strip is browser-side only — the original HTTP request to /booking-confirmed?ref=
      is recorded by the web server / CDN / access logs BEFORE JS runs. Stopping that needs a
      server-side control (disable query-string logging for this route, or redact it), see
      IMPLEMENTATION.md §1. The strip here is defence-in-depth for the browser, not the server.
    - pushes ONE booking_completed event to the dataLayer, gated behind consent.
    - GTM (see IMPLEMENTATION.md §2) turns that into the GA4 key event + Google Ads conversion.

  Why no-ref => no fire: the old version minted a fresh UUID when ?ref= was missing, which
  fired a phantom conversion on every bookmark/bot/QA visit AND double-counted reloads
  (the guard never matched). A genuine opaque ref is the dedupe key and a hard go-live
  requirement (IMPLEMENTATION.md §1, §3); no valid ref means no booking_completed. If Nookal
  genuinely cannot append a ref at launch, use the first-party nonce fallback at the bottom
  — do NOT re-enable the generated-id path.
-->


<!-- ============================================================
     (A) EARLY HEAD BLOCK — capture, validate, strip. Runs BEFORE GTM/GA.
     Place as high in <head> as possible, after consent-mode.js.
     ============================================================ -->
<script>
  (function () {
    var params = new URLSearchParams(window.location.search);
    var raw = params.get('ref') || '';
    // Strict opaque-token allowlist: A-Z a-z 0-9 _ - , 8-64 chars. Defence-in-depth: this
    // enforces FORMAT, not unpredictability — an 8+ digit bare Appointment ID would still
    // pass. The human go-live gate (README.md) confirming the ref is genuinely opaque, not
    // an Appointment/Client ID, stays mandatory. This regex + strip is not a substitute.
    var OPAQUE = /^[A-Za-z0-9_-]{8,64}$/;
    window.__biosymmRef = OPAQUE.test(raw) ? raw : '';   // reject anything that isn't a clean token
    // Strip the query string so GA4 page_location / referrers / CLIENT-side logs never carry
    // the ref. This is browser-side only — the server/CDN access log already recorded the
    // full ?ref= URL when the request landed, before this JS ran. Stopping that needs a
    // server-side control (IMPLEMENTATION.md §1), not this strip.
    if (window.location.search) {
      try { history.replaceState(null, '', window.location.pathname); } catch (e) {}
    }
  })();
</script>


<!-- ============================================================
     (B) BOOKING COMPLETED PUSH — consent-gated, no-ref => no fire,
          dedupe marker set immediately before the actual push.
     ============================================================ -->
<script>
  (function () {
    var ref = window.__biosymmRef || '';
    if (!ref) return;                                   // no opaque ref => no fire (kills phantoms + reload-dup)

    // Gate behind consent. cb runs now if already granted, else queues and fires once on
    // biosymmGrantConsent(). See consent-mode.js — GTM does NOT replay consent-blocked tags.
    window.biosymmWhenConsented(function () {
      // Dedupe across tabs + reloads: localStorage (not sessionStorage, which is per-tab).
      // Keyed on the ref so a genuine second booking (different ref) still counts.
      var seenKey = 'bc_seen_' + ref;
      try { if (localStorage.getItem(seenKey)) return; } catch (e) { /* private mode: proceed, Google Ads still dedupes on transaction_id */ }
      try { localStorage.setItem(seenKey, '1'); } catch (e) {}   // marker immediately BEFORE the push

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'booking_completed',
        booking_stream: 'clinic',
        booking_ref: ref          // -> Google Ads transaction_id (dedupe); opaque, no patient data
        // No value/currency in Phase 1: bid on conversion count / tCPA. Real booking value
        // arrives in Phase 3 (attended-appointment import via Nookal API/webhook).
      });
    });
  })();
</script>


<!-- ============================================================
     (C) FALLBACK — first-party nonce, ONLY if Nookal cannot append a ref.
     Do NOT use alongside (A)/(B); pick one path at go-live. If Nookal support
     (IMPLEMENTATION.md §3) confirms no ref is possible, swap the param name
     below to whatever the Book-now click stores, and enable this instead.

     WEAKER SIGNAL — read this before enabling: a Nookal-appended ref is proof of a
     COMPLETED booking; this nonce is minted at the Book-now CLICK and only proves the
     click happened. So it is inherently more phantom-prone — a visitor who clicks Book
     now, abandons, and later lands on /booking-confirmed (manually / QA / bot) would
     fire a phantom conversion if the nonce still lived in localStorage. Two controls
     mitigate that: (1) a 30-min TTL below — an abandoned-click nonce expires before it
     can be spent later; (2) noindex /booking-confirmed (IMPLEMENTATION.md §1) so it
     isn't crawled/indexed and hit by bots. Push Nookal to append a ref first (§3); only
     use this path if they genuinely cannot.
     ============================================================ -->
<!--
<script>
  // Book-now click (on biosymm.com.au, NOT on /booking-confirmed) would run:
  //   try {
  //     localStorage.setItem('biosymm_nonce', (crypto.randomUUID && crypto.randomUUID()) || ('n_' + Date.now()));
  //     localStorage.setItem('biosymm_nonce_ts', String(Date.now()));
  //   } catch(e){}
  // Then this page reads both back: the nonce as the ref, the timestamp to enforce TTL.
  (function () {
    var ref = '';
    var ts = 0;
    try { ref = localStorage.getItem('biosymm_nonce') || ''; ts = parseInt(localStorage.getItem('biosymm_nonce_ts') || '0', 10); } catch (e) {}
    var OPAQUE = /^[A-Za-z0-9_-]{8,64}$/;
    if (!OPAQUE.test(ref)) return;
    // TTL: the nonce proves a click, not a booking — cap its life so an abandoned click
    // can't fire a phantom on a later visit. 30 min covers a normal booking flow.
    var NONCE_TTL_MS = 30 * 60 * 1000;
    if (!ts || (Date.now() - ts) > NONCE_TTL_MS) {
      try { localStorage.removeItem('biosymm_nonce'); localStorage.removeItem('biosymm_nonce_ts'); } catch (e) {}
      return;                                              // expired => no fire (treat as no ref)
    }
    window.biosymmWhenConsented(function () {
      var seenKey = 'bc_seen_' + ref;
      try { if (localStorage.getItem(seenKey)) return; } catch (e) {}
      try { localStorage.setItem(seenKey, '1'); } catch (e) {}
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'booking_completed', booking_stream: 'clinic', booking_ref: ref });
      try { localStorage.removeItem('biosymm_nonce'); localStorage.removeItem('biosymm_nonce_ts'); } catch (e) {}   // one-shot
    });
  })();
</script>
-->


<!--
  Corporate / occupational-health enquiry form (usually a DIFFERENT page from /booking-confirmed):
  do NOT improvise the push here — use the consent-wrapped, field-minimised snippet in
  IMPLEMENTATION.md §2 (it gates behind biosymmWhenConsented, fires only on successful submit,
  and lists allowed/forbidden params). Keep the two streams separate (IMPLEMENTATION.md §4).
-->`;
