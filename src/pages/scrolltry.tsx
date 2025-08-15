import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

import HeroSection from "../components/HeroSection";
import GallerySection from "../components/GallerySection";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import heroVideo from '../assets/coffee-1.mp4';
import coffeeVideo from '../assets/coffee-2.mp4';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const SmoothStackedPanels: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  // Internal scroll fraction for each section (if needed for animations)
  const sectionConfigs = [
    { internalScroll: 0.0 }, // HeroSection
    { internalScroll: 0.0},  // AboutSection
    { internalScroll: 0.0 }, // GallerySection
    { internalScroll: 0.0 },  // ContactSection
  ];

  const isMobile = window.innerWidth < 768;
  const smoother = !isMobile
    ? ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1, // lower smooth for desktop if needed
      effects: true,
    })
    : null;

  useEffect(() => {
    const totalSections = sectionsRef.current.length;
    console.log(totalSections, ';total');
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${totalSections * 100}%`,
        scrub: true,
        pin: true,
      },
    });

    // Set initial z-index values (first section on top)
    sectionsRef.current.forEach((section, index) => {
      gsap.set(section, { zIndex: totalSections - index });
    });

    // Animate slide up for sections (except first)
    sectionsRef.current.forEach((section, index) => {
      if (index === 0) return;

      const prevDelay = sectionConfigs[index - 1]?.internalScroll ?? 0;
      const position = ((index - 1) + prevDelay) / (totalSections - 1);

      tl.fromTo(
        section,
        { yPercent: 100 },
        { yPercent: 0, duration: 1 / (totalSections - 1), ease: "none" },
        position
      );

      tl.to(
        section,
        { zIndex: totalSections + 1, duration: 0, ease: "none" },
        position
      );
    });

    // Optional internal animations for each section's content
    sectionsRef.current.forEach((section, index) => {
      const config = sectionConfigs[index];
      if (!config) return;

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${config.internalScroll * window.innerHeight}`,
        scrub: true,
        onUpdate: (self) => {
          const opacity = gsap.utils.mapRange(0, 1, 0, 1, self.progress);
          const internalContent = section.querySelector(".internal-content");
          if (internalContent) {
            gsap.to(internalContent, { opacity, duration: 0.1, overwrite: "auto" });
          }
        },
      });
    });

    return () => {
      smoother?.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div id="smooth-wrapper" className="h-full relative">
      {/* Fixed background video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 will-change-transform"
        src="/src/assets/coffee-1.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Scrollable content */}
      <div id="smooth-content" style={{ position: "relative", zIndex: 10 }}>
        <div ref={containerRef} className="relative h-screen overflow-hidden">
          <section
            ref={addToRefs}
            className="absolute inset-0 h-screen"
            style={{ zIndex: 5 }}
          >
            <HeroSection seaVideo={heroVideo} />
          </section>
          <section
            ref={addToRefs}
            className="absolute inset-0 h-screen"
            style={{ zIndex: 4 }}
          >
            <GallerySection />
          </section>
          <section
            ref={addToRefs}
            className="absolute inset-0 h-screen"
            style={{ zIndex: 3 }}
          >
            <div style={{
              height: '100vh',
              width: '100%',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Video Background */}
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: -1
                }}
              >
                <source src={coffeeVideo} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(92, 64, 51, 0.2)',
                zIndex: -1
              }}>
              </div>

              {/* Hero content */}
              <div style={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                color: 'white',
                position: 'relative',
                zIndex: 1
              }}>

              </div>
            </div>
          </section>

          <section
            ref={addToRefs}
            className="absolute inset-0 h-screen"
            style={{ zIndex: 2 }}
          >
            <AboutSection />
          </section>



          <section
            ref={addToRefs}
            className="absolute inset-0 h-screen"
            style={{ zIndex: 1 }}
          >
            <ContactSection />
          </section>
        </div>
      </div>
    </div>
  );
};

export default SmoothStackedPanels;