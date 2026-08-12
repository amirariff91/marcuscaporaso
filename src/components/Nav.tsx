"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { DIAGNOSTIC_URL, NAV_LINKS } from "@/lib/site";

/**
 * `baseHref` absolutises the GrowthOS links for pages served on a client
 * subdomain, where a root-relative "/#how-it-works" would land on that client's
 * own root instead of the homepage. Empty (the apex default) keeps them relative.
 */
export default function Nav({ baseHref = "" }: { baseHref?: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href={baseHref || "/"}
          className="group flex items-center gap-2 text-fg"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          <span
            className="inline-block h-2.5 w-2.5 rounded-full bg-cta transition-transform duration-300 group-hover:scale-125"
            aria-hidden
          />
          <span className="text-base font-bold tracking-tight">GrowthOS</span>
        </a>

        <div className="flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`${baseHref}${link.href}`}
              className="hidden md:inline-block text-sm text-muted-2 hover:text-fg transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href={DIAGNOSTIC_URL}
            className="group inline-flex items-center gap-1.5 text-sm font-semibold bg-cta hover:bg-cta-hover text-white px-4 py-2.5 rounded-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg"
          >
            Run the Diagnostic
            <ArrowRight
              size={15}
              strokeWidth={2.5}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
