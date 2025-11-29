import React, { useState, useRef, useEffect } from "react";

const DasNashwerkGalleryMobile = () => {
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
    {
      imageUrl:
        "https://images.unsplash.com/photo-1476887334197-56adbf254e1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFzdHJ5fGVufDB8fDB8fHww",
      alt: "Fresh pastries display",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1677661617405-daae43ed05bf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGFzdHJ5fGVufDB8fDB8fHww",
      alt: "Croissant",
    },
    {
      imageUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1170&q=80",
      alt: "Cafe exterior view",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const newIndex = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      (ref as HTMLElement).addEventListener('scroll', handleScroll);
      return () => {
        (ref as HTMLElement).removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
   <div className="w-full h-screen bg-white overflow-hidden">
  <div
    ref={scrollRef}
    className="flex overflow-x-scroll snap-x snap-mandatory w-full h-screen"
  >
    {galleryImages.map((image, index) => (
      <div
        key={index}
        className="flex-none w-full h-screen relative snap-center"
      >
        <img
          src={image.imageUrl}
          alt={image.alt}
          className="w-full h-full object-cover pointer-events-none"
        />

        <p className="absolute bottom-12 left-3 text-white text-lg drop-shadow-lg">
          {image.alt}
        </p>
      </div>
    ))}
  </div>

  {/* Pagination dots are now absolutely positioned on top of images */}
  <div className="absolute bottom-6 w-full flex justify-center space-x-2 z-10">
    {galleryImages.map((_, index) => (
      <div
        key={index}
        className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-white w-6" : "bg-gray-500 w-2"}`}
      />
    ))}
  </div>
</div>

  );
};

export default DasNashwerkGalleryMobile;
