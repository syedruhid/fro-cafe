import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothStackedPanels: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // ---- Smooth scrolling (requires GSAP Club plugin) ----
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,       // tweak to taste
      effects: true,
    });

    const sections = sectionsRef.current;
    if (sections.length !== 3) return; // this demo expects exactly 3 panels

    // Initial stacking state
    gsap.set(sections, { willChange: "transform" });
    gsap.set(sections[0], { yPercent: 0,   zIndex: 2 });  // visible
    gsap.set(sections[1], { yPercent: 100, zIndex: 1 });  // below
    gsap.set(sections[2], { yPercent: 100, zIndex: 1 });  // below

    // Build a single-cycle timeline: (1) S2 covers S1, (2) S3 covers S2, (3) S1 covers S3
    // Each step is exactly 1/3 of the timeline (duration 1 per step; total 3).
    const tl = gsap.timeline({ paused: true, repeat: -1 });

    const cover = (fromIdx: number, toIdx: number) => {
      const from = sections[fromIdx];
      const to = sections[toIdx];

      // Prepare 'to' panel below and above z-wise
      tl.add(() => {
        gsap.set(to, { yPercent: 100, zIndex: 3 });
        gsap.set(from, { zIndex: 2 });
      });
      // Slide 'to' up to fully cover 'from'
      tl.to(to, { yPercent: 0, ease: "none", duration: 1 }, ">"); // 1/3 of cycle
      // After the cover, push the covered one under the stack
      tl.add(() => {
        gsap.set(from, { zIndex: 1 });
      });
    };

    cover(0, 1); // S2 covers S1
    cover(1, 2); // S3 covers S2
    cover(2, 0); // S1 covers S3

    // Scroll → timeline mapping
    // We'll give the pinned section many "virtual screens" to scroll through.
    const LOOPS = 30; // how many cycles you want in one long scroll span
    let loopLengthPx = 0;

    const st = ScrollTrigger.create({
      trigger: containerRef.current!,
      start: "top top",
      end: `+=${LOOPS * 100}%`,  // long scroll span
      scrub: true,
      pin: true,
      anticipatePin: 1,
      onRefresh: (self) => {
        // Total scrollable length of this pinned area (in px)
        loopLengthPx = self.end - self.start;
      },
      onUpdate: (self) => {
        // Map scroll progress (0..1 across the whole span) into a wrapped cycle (0..1 per loop)
        const wrap01 = gsap.utils.wrap(0, 1);
        const cycleProgress = wrap01(self.progress * LOOPS);
        tl.progress(cycleProgress);

        // Seamless "teleport" to avoid hitting the hard end/start while keeping motion continuous
        if (loopLengthPx > 0) {
          if (self.progress > 0.999 && self.direction > 0) {
            // at the end going forward → jump back by one loop
            smoother.scrollTop(smoother.scrollTop() - loopLengthPx / LOOPS + 2);
          } else if (self.progress < 0.001 && self.direction < 0) {
            // at the start going backward → jump forward by one loop
            smoother.scrollTop(smoother.scrollTop() + loopLengthPx / LOOPS - 2);
          }
        }
      },
    });

    return () => {
      st.kill();
      tl.kill();
      smoother.kill();
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div id="smooth-wrapper" className="h-full">
      <div id="smooth-content">
        {/* Pinned container (one viewport high) */}
        <div ref={containerRef} className="relative h-screen overflow-hidden">
          {/* 3 stacked panels, all full-viewport */}
          <section
            ref={addToRefs}
            className="absolute inset-0 flex items-center justify-center bg-red-500 text-white text-6xl font-bold"
          >
            Section 1
          </section>
          <section
            ref={addToRefs}
            className="absolute inset-0 flex items-center justify-center bg-green-500 text-white text-6xl font-bold"
          >
            Section 2
          </section>
          <section
            ref={addToRefs}
            className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-6xl font-bold"
          >
            Section 3
          </section>
        </div>
      </div>
    </div>
  );
};

export default SmoothStackedPanels;

