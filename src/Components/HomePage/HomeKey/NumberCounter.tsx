"use client";

import React, { useEffect, useRef } from "react";

export default function NumberCounter({ number }: { number: string }) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const load = async () => {
      const NumberFlip = (await import("number-flip")).default;
      if (elRef.current) {
        const flip = new NumberFlip(elRef.current, {
          from: "0000",
          to: number,
          duration: 1000,
          play: true,
        });
      }
    };
    load();
  }, [number]);

  return <div ref={elRef} />;
}
