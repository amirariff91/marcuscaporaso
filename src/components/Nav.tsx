"use client";

import { useState, useEffect } from "react";

export default function Nav() {
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
          ? "bg-[oklch(8%_0.004_160)]/90 backdrop-blur-md border-b border-[oklch(18%_0.006_160)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="text-sm font-medium text-[oklch(60%_0.008_160)] hover:text-[oklch(80%_0.006_160)] transition-colors duration-200 tracking-wide" style={{ fontFamily: "var(--font-barlow)" }}>
          MC
        </a>
        <div className="flex items-center gap-8">
          <a href="#services" className="hidden sm:block text-sm text-[oklch(45%_0.006_160)] hover:text-[oklch(70%_0.006_160)] transition-colors duration-200">
            Services
          </a>
          <a href="#methodology" className="hidden sm:block text-sm text-[oklch(45%_0.006_160)] hover:text-[oklch(70%_0.006_160)] transition-colors duration-200">
            Process
          </a>
          <a
            href="#booking"
            className="text-sm font-semibold bg-[oklch(67%_0.18_162)] hover:bg-[oklch(58%_0.18_162)] text-white px-5 py-2.5 rounded-sm transition-colors duration-200"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
