import React, { useState } from "react";

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

  // Function to determine bubble size based on position
  const getBubbleSize = (index) => {
    if (index === activeIndex) return "w-36 h-36"; // active bubble
    if (index === activeIndex - 1 || index === activeIndex + 1) return "w-20 h-20"; // neighbors slightly smaller
    return "w-24 h-24"; // default size
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 bg-white">
      <h2 className="text-2xl font-bold text-[var(--walnut-brown)] mb-6 text-center">
        Das Nashwerk Gallery
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {galleryImages.map((image, i) => {
          const sizeClass = getBubbleSize(i);
          return (
            <div
              key={i}
              className={`relative rounded-full overflow-hidden cursor-pointer transition-all duration-500 ease-in-out z-10 ${sizeClass}`}
              onClick={() => setActiveIndex(activeIndex === i ? 0 : i)}
            >
              <img
                src={image.imageUrl}
                alt={image.alt}
                className="w-full h-full object-cover rounded-full"
                draggable={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DasNashwerkGalleryMobile;
