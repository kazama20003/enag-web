"use client";

import { ReactNode, useEffect } from "react";

import Lenis from "lenis";

export function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.08,
      duration: 1.1,
      wheelMultiplier: 0.95,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
