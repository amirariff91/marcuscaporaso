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
          ? "bg-bg/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="text-sm font-medium text-muted hover:text-fg transition-colors duration-200 tracking-wide" style={{ fontFamily: "var(--font-barlow)" }}>
          MC
        </a>
        <div className="flex items-center gap-8">
          <a href="#services" className="hidden sm:block text-sm text-muted-2 hover:text-muted transition-colors duration-200">
            Services
          </a>
          <a href="#methodology" className="hidden sm:block text-sm text-muted-2 hover:text-muted transition-colors duration-200">
            Process
          </a>
          <a
            href="#booking"
            className="text-sm font-semibold bg-cta hover:bg-cta-hover text-white px-5 py-2.5 rounded-sm transition-colors duration-200"
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
