import React, { useState, useRef, useEffect } from "react";

const DasNashwerkGalleryMobile = () => {
  const galleryImages = [
    {
      imageUrl: '/images/fro1.jpeg',
      // alt: 'Image 1 Description'
    },
    {
      imageUrl: '/images/fro34.jpeg',
      // alt: 'Image 2 Description'
    },
    {
      imageUrl: '/images/fro23.jpeg',
      // alt: 'Image 3 Description'
    },
    {
      imageUrl: '/images/fro41.jpeg',
      // alt: 'Image 4 Description'
    },
    {
      imageUrl: '/images/fro35.jpeg',
      // alt: 'Image 5 Description'
    },
    {
      imageUrl: '/images/fro16.jpeg',
      // alt: 'Image 6 Description'
    },
    {
      imageUrl: '/images/fro27.jpeg',
      // alt: 'Image 7 Description'
    },
    {
      imageUrl: '/images/fro8.jpeg',
      // alt: 'Image 8 Description'
    }
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
          // alt={image.alt}
          className="w-full h-full object-cover pointer-events-none"
        />

        <p className="absolute bottom-12 left-3 text-white text-lg drop-shadow-lg">
          {/* {image.alt} */}
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
