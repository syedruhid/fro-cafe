import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const StackedScroll: React.FC = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Create the smoother
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      effects: true,
    });

    // Create the stacking effect
    sectionsRef.current.forEach((section, index) => {
      if (index === 0) return; // skip first section for fromTo animation

      gsap.fromTo(
        section,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        }
      );

      // Pin the previous section until the current one is fully over it
      ScrollTrigger.create({
        trigger: sectionsRef.current[index - 1],
        start: "top top",
        endTrigger: section,
        end: "top top",
        pin: true,
        pinSpacing: false,
      });
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div id="smooth-wrapper" className="h-full">
      <div id="smooth-content">
        <section
          ref={addToRefs}
          className="h-screen flex items-center justify-center bg-red-500 text-white text-6xl font-bold"
        >
          Section 1
        </section>
        <section
          ref={addToRefs}
          className="h-screen flex items-center justify-center bg-green-500 text-white text-6xl font-bold"
        >
          Section 2
        </section>
        <section
          ref={addToRefs}
          className="h-screen flex items-center justify-center bg-blue-500 text-white text-6xl font-bold"
        >
          Section 3
        </section>
      </div>
    </div>
  );
};

export default StackedScroll;
