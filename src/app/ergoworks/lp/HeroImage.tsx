"use client";

import { useEffect, useState } from "react";
import styles from "./lp.module.css";

export default function HeroImage() {
  const [mounted, setMounted] = useState(false);
  const [imageAvailable, setImageAvailable] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={styles.heroMedia} aria-hidden="true">
      {/* TODO: Marcus's header image */}
      {mounted && imageAvailable ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={styles.heroImage}
          src="/logos/ergoworks/hero.jpg"
          width="800"
          height="600"
          alt=""
          onError={() => setImageAvailable(false)}
        />
      ) : null}
    </div>
  );
}
