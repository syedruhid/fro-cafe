import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Modal } from "@mui/material";

gsap.registerPlugin(ScrollTrigger);

const values = ["Friendliness", "Reliability", "Respect", "Community", "Adventure"];

export default function AboutSection() {
  const textRef = useRef(null);
  const carouselRef = useRef(null);

  // Fade-in animation for text
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  const valuesData = [
    {
      title: "Friendliness",
      description:"A smile opens doors and hearts. We treat everyone with respect and warmth, whether guest or colleague. Friendliness is the first step toward true trust.",
            imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCHZiwOm-C03ds5VAxy6NbntKrSNSWsf9W4wTFjY-Lt9hoVglXEHogCvUG85qZ3dCfXITxMFxsctNefuubSLkMrAklFHy8Bk9sHWdkHRx1xQGFDTJ6ACXtIMfawxU8rTSyhjBaYuKJr1w3oqxFDkfSvBtYXH8Tu3JNLKgNPyROaL4fNJdTkjCqYiTHNPFXMXTe59XQ7tN8dvlYop8xONGk_YgVboUNvfYs2Klce8Dpbrc1O0Yc-gIxxNlyS_wQf9z5KWnaVcqJER8Sp",
    },
    {
      title: "Reliability",
      description:
        "You can rely on us—that's not an empty promise, but a lived reality. We stick together, we meet deadlines, we keep our word. Because trust grows when you can rely on one another.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDEENBMh1hYUEew2fHLpQKgRc5VeWHiQ-QfHisdVHEkxIG3AqdSN6Vv7pjGyZw-3bE_mtwxElLYaN8K9hlXnhsR6QemUbameqyz6Gh3AR4SxA9lAkwaKCGktWrOWBA8iD2H82L7uzRm6cjmcNrE4Etjx0X6cI4WwGdGmeANhapiopmNgl8VieMj4GYRuDjyyd3ZiCZaFdnSOSep_bRxMO0l4QgArlp36srCUkFVlcCoRh2HW7lUOHoVfMwHmHbVaDLzaGs_PEYDN4h4",
    },
    {
      title: "Community, only as strong as its weakest link",
      description:
        "We're like a crew on a sailboat. We can't control the weather, or external circumstances. But together we can set the sails correctly and harness the power of the wind to our advantage. Everyone is needed, everyone counts. Together we can overcome every challenge.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHUWo_QsHhyGi3t-GVG5ihRfQTq005Ce5DLsW_SidJyUWkqFCs6lDwyUqaHKgfXxVZkTbdxt7RizSiYXyvflpbjB9GYn35rR6jnsHQrrIB6Yz0kylOuHPMwsw4M0jeRsw4oCG0NB1S-ewnWtZ8zxQotyNw1Daq5_2aBTfC0PL9rQf3Dtz2Gv3bHvdkaqHSfjvtCbrZUsYPa_up_OHdXL8w-veswU_unIIZh-N_xzOBzDHERziUgtj6WuoxRjvploeyUzQjUyVpYgLt",
    },
    {
      title: "Respect",
      description:
        "Everyone is valued for who they are. We view diverse opinions and backgrounds as a strength. Only those who show respect create an atmosphere in which creativity and community can flourish.",
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBBNclWDXIgQ6EZzEx0Ix8lh0cxrlSkb2flHL925IQ7YIw_Xqfi7T7yR8IuwIr95liXWvvVfdrkfD7ry--EN5VbsusIQ0d6ui4ENdZf1ITUMeI_4WhTMC-u2Z4GrHzYuFXj_Vdmb0n715Aao55_XVcYa0zL8wBqDTZZ7pM9LLW9EZovZcsgeoKyA-1x3993QHZTGGnluLqSjkhm9qG6jN50d-5ZUlL3N1wcAXtiL-jo8UhsNweg9NkXu5bDpK6a-pomXjmv5IH6wDhq",
    },
  ];

  const EcoHome = () => {
  
    return (
      <>
        <div
           className="flex min-h-screen flex-row items-center justify-center bg-[var(--warm-beige)] bg-opacity-60"
          style={{ fontFamily: 'Inter, "Noto Sans", sans-serif', 
            backgroundColor: 'rgba(245, 233, 211, 0.6)',
            backdropFilter: 'blur(12px)',
           }}
        >
          <div className="max-w-[1200px] w-full text-center mb-12 ">
            <h1 className="text-[#141712] text-5xl font-bold mb-6">About us –<span className="bg-[var(--walnut-brown)] text-white px-2 py-1 rounded">FRØ Café</span>
            </h1>
            <div className="text-[var(--walnut-brown)] text-2xl max-w-4xl mx-auto leading-relaxed">
  <p className="leading-[1.7] mb-4">I'm Hayrettin Kaya, a proud father of two wonderful children and husband to a wonderful wife. Born and raised in Weidenau, in the heart of the Siegerland region, this region is much more than just a place for me—it's home, inspiration, and commitment all at once.</p>
  
  <p className="leading-[1.7] mb-4">The landscape, the people, and the spirit of Siegen not only shape my life, but also the heart of our café. Because one thing is certain: a Siegen resident who places their trust in us will remain loyal, just as we promise our guests.</p>
  
  <p className="leading-[1.7] mb-4">FRØ, the Danish word for "seed," represents a new beginning and the growth of something valuable. With our café, we are planting this seed in Siegen. We are creating a place where people meet, community thrives, and stories emerge, just as nature grows its forests: powerful, persistent, and deeply rooted.</p>
  
  <p className="leading-[1.7] mb-4">Our concept is clear and honest: We stand for down-to-earth, handmade quality that you can taste. We not only offer a broad, varied breakfast menu that makes the most important meal of the day a delight, but also homemade ice cream, prepared with the finest ingredients and lots of love.</p>
  
  <p className="leading-[1.7] mb-4">Like a seed that grows into a plant, our coffee begins with the world's finest green coffee beans, and we roast it ourselves to guarantee our guests the perfect taste.</p>
  
  <p className="leading-[1.7] mb-4">We love nature, we love people, and we love good food and drinks created with respect for the region and its producers. That's why we work closely with regional partners from Siegerland and North Rhine-Westphalia, who supply us with the freshest and best products.</p>
  
  <p>Our motto is: One Table. Many Stories.</p>
  
  <p>We are excited to see what stories will emerge at our tables: stories of encounters, friendship, and enjoyment.</p>
  
  <p>FRØ is more than just a café, it is a home for those seeking authenticity and community.</p>
</div>

            {/* <p className="text-[var(--walnut-brown)] text-2xl max-w-4xl mx-auto leading-relaxed whitespace-pre-line">
              {"I'm Hayrettin Kaya, a proud father of two wonderful children and husband to a wonderful wife. Born and raised in Weidenau, in the heart of the Siegerland region, this region is much more than just a place for me—it's home, inspiration, and commitment all at once.\nThe landscape, the people, and the spirit of Siegen not only shape my life, but also the heart of our café. Because one thing is certain: a Siegen resident who places their trust in us will remain loyal, just as we promise our guests.\nFRØ, the Danish word for \"seed,\" represents a new beginning and the growth of something valuable. With our café, we are planting this seed in Siegen. We are creating a place where people meet, community thrives, and stories emerge, just as nature grows its forests: powerful, persistent, and deeply rooted.\nOur concept is clear and honest: We stand for down-to-earth, handmade quality that you can taste. We not only offer a broad, varied breakfast menu that makes the most important meal of the day a delight, but also homemade ice cream, prepared with the finest ingredients and lots of love.\nLike a seed that grows into a plant, our coffee begins with the world's finest green coffee beans, and we roast it ourselves to guarantee our guests the perfect taste.\nWe love nature, we love people, and we love good food and drinks created with respect for the region and its producers. That's why we work closely with regional partners from Siegerland and North Rhine-Westphalia, who supply us with the freshest and best products.\nOur motto is: One Table. Many Stories.\n\nWe are excited to see what stories will emerge at our tables: stories of encounters, friendship, and enjoyment.\nFRØ is more than just a café, it is a home for those seeking authenticity and community."}
            </p> */}
          </div>
  
          <div className="grid grid-cols-2 gap-12 max-w-[1200px] w-full px-4">
            {valuesData.map(({ title, description, imageUrl }) => (
              <ValueBox
                key={title}
                title={title}
                description={description}
                imageUrl={imageUrl}
              />
            ))}
          </div>
        </div>

      </>
    );
  }
  
  function ValueBox({ title, description, imageUrl }) {
    return (
      <div
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ")}
        className="cursor-pointer flex flex-col rounded-xl border border-[#dae0d7] bg-[#fafbf9] p-10 shadow-md transform transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105 outline-none"
      >
        <div
          className="w-full aspect-square rounded-lg bg-center bg-cover mb-6"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
        <h3 className="text-[#141712] text-3xl font-bold mb-4">{title}</h3>
        <p className="text-[#6e8165] text-lg leading-relaxed truncate">{description}</p>
      </div>
    );
  }
  

  return (
<EcoHome/>
  )
}
