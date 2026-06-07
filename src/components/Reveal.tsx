"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** ms delay before this element animates in — use for stagger */
  delay?: number;
  /** render as a different element (default div) */
  as?: ElementType;
  className?: string;
  /** start revealing this many px before the element enters the viewport */
  rootMargin?: string;
};

/**
 * Scroll-reveal wrapper. Flips data-reveal hidden→shown via IntersectionObserver,
 * then unobserves (reveals once). Styling lives in globals.css ([data-reveal]).
 * Degrades to fully-visible under prefers-reduced-motion (handled in CSS).
 */
export default function Reveal({
  children,
  delay = 0,
  as,
  className = "",
  rootMargin = "0px 0px -10% 0px",
}: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [rootMargin, shown]);

  return (
    <Tag
      ref={ref}
      data-reveal={shown ? "shown" : "hidden"}
      style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
      className={className}
    >
      {children}
    </Tag>
  );
}
