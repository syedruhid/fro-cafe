import React, { useEffect } from "react";
import { gsap } from "gsap";

const HeroGlassTitle = () => {
  useEffect(() => {
    gsap.to("#glass-turbulence", {
      attr: { baseFrequency: 0.025 },
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <>
      {/* SVG Filter for distortion */}
      <svg style={{ display: "none" }}>
        <filter id="glass-distort" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            id="glass-turbulence"
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves="3"
            result="turb"
          />
          <feDisplacementMap in2="turb" in="SourceGraphic" scale="8" />
        </filter>
      </svg>

      <div className="glassTitle">
        <h1>FRØ</h1>
      </div>

      <style>{`
        .glassTitle {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 4rem;
          border-radius: 25px;
          isolation: isolate; /* ensures backdrop effects apply correctly */
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          background: rgba(255,255,255,0.08);
          box-shadow: inset 2px 2px 0px -2px rgba(255, 255, 255, 0.6),
                      inset 0 0 3px 1px rgba(255, 255, 255, 0.6);
          filter: url(#glass-distort);
        }
        .glassTitle h1 {
          position: relative;
          z-index: 1;
          font-size: 6rem;
          font-family: var(--font-heading);
          font-weight: 700;
          color: white;
          letter-spacing: 0.12em;
          text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
        }
      `}</style>
    </>
  );
};

export default HeroGlassTitle;
