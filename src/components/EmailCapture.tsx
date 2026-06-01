"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus("success");
        setMessage("You're in. Talk soon.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  return (
    <section className="border-t border-border py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-xl">
          <h2 className="text-section font-bold text-fg mb-3">
            Not ready for a call yet?
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            Get weekly insights on growth, conversion and paid media — no fluff.
          </p>

          {status === "success" ? (
            <p className="text-cta font-medium">{message}</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="you@company.com"
                className="flex-1 px-4 py-3 rounded-sm border border-border bg-bg text-fg placeholder:text-muted-2 focus:outline-none focus:ring-2 focus:ring-cta focus:border-transparent text-sm transition"
                disabled={status === "loading"}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-cta hover:bg-cta-hover text-white font-semibold rounded-sm text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg disabled:opacity-60 cursor-pointer"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-sm text-red-500">{message}</p>
          )}

          <p className="mt-4 text-xs text-muted-2">No spam. Unsubscribe any time.</p>
        </div>
      </div>
    </section>
  );
}
