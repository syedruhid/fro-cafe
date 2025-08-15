// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger, ScrollSmoother } from "gsap/all";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// const SmoothStackedPanels: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const sectionsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const smoother = ScrollSmoother.create({
//       wrapper: "#smooth-wrapper",
//       content: "#smooth-content",
//       smooth: 1.2,
//       effects: true,
//     });

//     const totalSections = sectionsRef.current.length;
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=200%", // (totalSections - 1) × 100% = 2 × 100% = 200%
//         scrub: true,
//         pin: true,
//       },
//     });

//     sectionsRef.current.forEach((section, index) => {
//       if (index === 0) return; // skip first section
//       tl.fromTo(
//         section,
//         { yPercent: 100 },
//         { yPercent: 0, duration: 1 / (totalSections - 1), ease: "none" },
//         index - 1 // place each animation segment at its exact position
//       );
//     });

//     return () => {
//       smoother.kill();
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   const addToRefs = (el: HTMLDivElement) => {
//     if (el && !sectionsRef.current.includes(el)) {
//       sectionsRef.current.push(el);
//     }
//   };

//   return (
//     <div id="smooth-wrapper" className="h-full">
//       <div id="smooth-content">
//         <div ref={containerRef} className="relative h-screen overflow-hidden">
//           <section
//             ref={addToRefs}
//             className="absolute inset-0 flex items-center justify-center bg-red-500 text-white text-6xl font-bold"
//           >
//             Section 1
//           </section>
//           <section
//             ref={addToRefs}
//             className="absolute inset-0 flex items-center justify-center bg-green-500 text-white text-6xl font-bold"
//           >
//             Section 2
//           </section>
//           <section
//             ref={addToRefs}
//             className="absolute inset-0 flex items-center justify-center bg-blue-500 text-white text-6xl font-bold"
//           >
//             Section 3
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmoothStackedPanels;

