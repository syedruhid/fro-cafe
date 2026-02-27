import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { imagePaths } from '../utils/imagePath'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const [galleryImages, setGalleryImages] = useState([])

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'German Cuisine' },
    { id: 'ambiance', name: 'Restaurant' },
    { id: 'team', name: 'Our Team' },
    { id: 'events', name: 'Events' }
  ]

  // Raw image list (48 items)
  const galleryImagesData = imagePaths.map((image, index) => {
    const id = index + 1;
    return {
      id,
      src: image.path,
      alt: image.alt,
      category: 'local',
      // title: `Image ${id} Description`
    };
  });

  // Determine image orientation
  const determineOrientation = (img) => {
    const image = new Image();
    image.src = img.src;
    return new Promise(resolve => {
      image.onload = () => {
        resolve(image.width > image.height ? 'landscape' : 'portrait');
      };
    });
  };

  // Load images with orientation
  useEffect(() => {
    Promise.all(
      galleryImagesData.map(async (img) => {
        const orientation = await determineOrientation(img);
        return { ...img, orientation };
      })
    ).then(setGalleryImages);
  }, []);

  // Correct filtering logic (use galleryImages, NOT raw data)
  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === activeCategory);

  const handleImageClick = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const nextImage = () => {
    const index = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (index + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const index = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = index === 0 ? filteredImages.length - 1 : index - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="bg-[var(--warm-beige)]">

      {/* HERO SECTION */}
      <section className="relative py-20 bg-[var(--warm-beige)]">
        <div className="relative z-10 text-center text-white pt-32 pb-2 px-6">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Gallery
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="w-20 h-[2px] bg-white/50 mx-auto mb-6 rounded-full"
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-black"
          >
            Explore our authentic German cuisine, beautiful restaurant ambiance, 
            and the passionate team behind every dish.
          </motion.p>

        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4">

          {/* CATEGORY FILTER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-0"
          >
            {/* Remove or comment out the category switching buttons */}
            {/*
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition ${
                    activeCategory === category.id
                      ? 'bg-[var(--pastel-blue)] text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
            */}
          </motion.div>

          {/* FINAL FIXED GALLERY GRID */}
          <motion.div
            layout
            className={`grid gap-3 
              ${isMobile ? "grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}
            `}
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}

                // MOBILE LOGIC:
                // Portrait → 50% width
                // Landscape → full width (two columns)
                className={
                  isMobile
                    ? image.orientation === "portrait"
                      ? "col-span-1 cursor-pointer"
                      : "col-span-2 cursor-pointer"
                    : "cursor-pointer"
                }

                onClick={() => handleImageClick(image)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300"
              >
                <X size={32} />
              </button>

              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full max-h-[80vh] object-contain rounded-lg"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">
                    {selectedImage.title}
                  </h3>
                </div>
              </div>

              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  >
                    <ChevronLeft size={32} />
                  </button>

                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
                  >
                    <ChevronRight size={32} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
