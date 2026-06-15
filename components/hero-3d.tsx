"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const HeroSceneCanvas = dynamic(
  () => import("@/components/hero-scene-canvas").then((module) => module.HeroSceneCanvas),
  {
    ssr: false,
    loading: () => <HeroSceneFallback />,
  },
);

export function Hero3D() {
  const [useFallback, setUseFallback] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isCompactViewport = window.innerWidth < 640;
    const connection = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };

    setUseFallback(
      Boolean(prefersReducedMotion || isCompactViewport || connection.connection?.saveData),
    );
  }, []);

  return (
    <div className="hero-3d-shell" aria-hidden="true">
      {!useFallback ? (
        <div className="hero-static-core">
          <span />
          <i />
          <b />
        </div>
      ) : null}
      {useFallback ? <HeroSceneFallback /> : <HeroSceneCanvas />}
      <div className="hero-scene-label hero-scene-label-top">
        <span>Product systems</span>
        <span className="status-dot" />
      </div>
      <div className="hero-scene-label hero-scene-label-bottom">
        <span>Mobile</span>
        <span>Web</span>
        <span>Realtime</span>
      </div>
    </div>
  );
}

function HeroSceneFallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div className="hero-3d-fallback-orbit">
        <span />
        <i />
      </div>
    </div>
  );
}
