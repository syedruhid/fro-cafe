import React, { useEffect, useState } from "react";
import DasNashwerkGalleryMobile from "./GallerySectionMobile";

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};

const DasNashwerkGallery = () => {
const isMobile = useIsMobile();

  const galleryImages = [
    {
      imageUrl:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=687&q=80",
      alt: "Coffee brewing process",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1170&q=80",
      alt: "Fresh breakfast spread",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=687&q=80",
      alt: "Homemade ice cream",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1170&q=80",
      alt: "Cozy cafe interior",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=687&q=80",
      alt: "Coffee beans and equipment",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1170&q=80",
      alt: "Barista crafting coffee",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const total = galleryImages.length;

  const radius = 950; // radius of the circular carousel
  const cardWidth = 320;
  const cardHeight = 380;


  const handleClick = (index) => {
    if (index === currentIndex) return; // do nothing if center clicked
    // Calculate shortest direction to rotate carousel
    const diff = index - currentIndex;
    if (diff > 0 && diff <= total / 2) {
      setCurrentIndex(index);
    } else if (diff < 0 && -diff < total / 2) {
      setCurrentIndex(index);
    } else {
      // Wrap around cases
      if (index > currentIndex) {
        setCurrentIndex(index);
      } else {
        setCurrentIndex(index);
      }
    }
  };

  // For smooth animation, calculate transform for each card based on position relative to currentIndex
  // We'll map cards around circle with angles spaced evenly
  if(isMobile){
    return <DasNashwerkGalleryMobile/>
  }

  return (
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        padding: "4rem 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          padding: "0 2rem",
          textAlign: "left",
          position: "relative",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
     
        {/* Carousel container */}
        <div
          style={{
            position: "relative",
            width: "00px",
            height: "350px",
            margin: "0 auto",
            perspective: "1500px",
          }}
        >
          {galleryImages.map((image, i) => {
            // Position card based on index relative to currentIndex
            let offset = i - currentIndex;
            // handle circular wrap
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            // Angle spacing (in radians)
            // We want cards to fan horizontally left to right around center card
            // Max visible cards left and right: 3 or 2
            // We'll clamp visibility to cards within offset -3 to +3, others hidden

            if (offset < -3 || offset > 3) {
              // Hide cards outside range for clarity
              return null;
            }

            // Map offset to X and Z on circle
            // More negative offset: left side, positive offset: right side
            const angle = (offset / 7) * Math.PI; // spread cards across ~180deg semi-circle

            // Calculate transform values
            // x = radius * sin(angle), z = radius * cos(angle)
            const x = radius * Math.sin(angle);
            const z = radius * Math.cos(angle);

            // scale bigger for center card
            const scale = offset === 0 ? 1.2 : 0.8;

            // Elevation and shadow for center card
            const boxShadow =
              offset === 0
                ? "0 15px 30px rgba(0,0,0,0.3)"
                : "0 4px 12px rgba(0,0,0,0.1)";

            // zIndex so center is always on top
            const zIndex = offset === 0 ? 10 : 5 - Math.abs(offset);

            // Rotation for subtle 3D effect (rotateY slightly towards center)
            const rotateY = offset * 15;

            return (
              <div
                key={i}
                onClick={() => handleClick(i)}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  marginTop: `-${cardHeight / 2}px`,
                  marginLeft: `-${cardWidth / 2}px`,
                  borderRadius: "16px",
                  boxShadow,
                  cursor: offset === 0 ? "default" : "pointer",
                  backgroundColor: "#faf9f5",
                  transform: `translateX(${x}px) translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  transition:
                    "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.6s ease",
                  overflow: "hidden",
                  zIndex,
                  userSelect: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={image.imageUrl}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "75%",
                    objectFit: "cover",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                    pointerEvents: "none",
                  }}
                  draggable={false}
                />
                <div
                  style={{
                    padding: "0.8rem 1rem",
                    flexGrow: 1,
                    color: "var(--walnut-brown)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: "600",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    userSelect: "none",
                  }}
                >
                  {image.alt}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DasNashwerkGallery;
