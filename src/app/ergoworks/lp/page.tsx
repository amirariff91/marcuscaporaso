import type { Metadata } from "next";
import LandingPage from "./LandingPage";
import styles from "./lp.module.css";
import { SPLIT_DEMO_COPY, type BrandVariant, type HeroMode } from "./copy";

export const metadata: Metadata = {
  title: "Workplace ergonomics landing-page split demo",
  description: "A fork-first two-skin prototype for workplace ergonomics enquiries.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://ergoworks.marcuscaporaso.com/ergoworks/lp",
  },
  openGraph: {
    type: "website",
    url: "https://ergoworks.marcuscaporaso.com/ergoworks/lp",
    title: "Workplace ergonomics landing-page split demo",
    description: "A fork-first two-skin prototype for workplace ergonomics enquiries.",
    siteName: "Workplace ergonomics prototype",
  },
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function firstParam(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

function fnv1a(value: string) {
  let hash = 0x811c9dc5;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

function variantFromSeed(seed: string): { variant: BrandVariant; bitSet: boolean } {
  const hash = fnv1a(seed);
  const foldedHash = (hash ^ (hash >>> 16) ^ ((hash << 16) >>> 0)) >>> 0;
  const mixedHash = Math.imul(foldedHash ^ (foldedHash >>> 13), 0x5bd1e995) >>> 0;
  const bitSet = ((mixedHash ^ (mixedHash >>> 15)) & (1 << 16)) !== 0;
  return {
    variant: bitSet ? "ergoworks_led" : "biosymm_led",
    bitSet,
  };
}

export default async function SplitLandingPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const seed = firstParam(sp.id);
  const hasSeed = seed !== undefined;
  const heroMode: HeroMode = firstParam(sp.hero) === "trigger" ? "trigger" : "promise";
  const paidPath = sp.gclid !== undefined || sp.utm_source !== undefined;
  const selected = hasSeed ? variantFromSeed(seed) : { variant: "biosymm_led" as const, bitSet: false };
  const side =
    selected.variant === "biosymm_led"
      ? SPLIT_DEMO_COPY.biosymmSide
      : SPLIT_DEMO_COPY.ergoworksSide;
  const demoState = hasSeed
    ? SPLIT_DEMO_COPY.seededReason(seed, side, selected.variant, selected.bitSet)
    : SPLIT_DEMO_COPY.noSeed;

  return (
    <>
      <div className={styles.demoBar}>
        <div className={styles.demoInner}>
          <span className={styles.demoState}>{demoState}</span>
          <nav className={styles.demoLinks} aria-label="Landing page skins">
            <a className={styles.demoLink} href="/ergoworks/lp/biosymm">
              {SPLIT_DEMO_COPY.biosymmLink}
            </a>
            <a className={styles.demoLink} href="/ergoworks/lp/ergoworks">
              {SPLIT_DEMO_COPY.ergoworksLink}
            </a>
          </nav>
        </div>
      </div>
      <LandingPage
        variant={selected.variant}
        paidPath={paidPath}
        heroMode={heroMode}
        descriptorMode={firstParam(sp.descriptor) === "powered" ? "powered" : "by"}
      />
    </>
  );
}
