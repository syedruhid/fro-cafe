import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'German Cuisine' },
    { id: 'ambiance', name: 'Restaurant' },
    { id: 'team', name: 'Our Team' },
    { id: 'events', name: 'Events' }
  ]

  const galleryImages = [
    // German Food Images
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&h=400&fit=crop',
      alt: 'Sauerbraten',
      category: 'food',
      title: 'Sauerbraten - Traditional German Pot Roast'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      alt: 'Wiener Schnitzel',
      category: 'food',
      title: 'Wiener Schnitzel with Potato Salad'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=600&h=400&fit=crop',
      alt: 'Bratwurst',
      category: 'food',
      title: 'Bratwurst with Sauerkraut'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
      alt: 'Königsberger Klopse',
      category: 'food',
      title: 'Königsberger Klopse'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop',
      alt: 'Black Forest Cake',
      category: 'food',
      title: 'Schwarzwälder Kirschtorte'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=400&fit=crop',
      alt: 'Apple Strudel',
      category: 'food',
      title: 'Apfelstrudel with Vanilla Sauce'
    },

    // Restaurant Ambiance Images
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      alt: 'Restaurant Interior',
      category: 'ambiance',
      title: 'Main Dining Room - Fro'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
      alt: 'Restaurant Exterior',
      category: 'ambiance',
      title: 'Fro Exterior'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
      alt: 'Bar Area',
      category: 'ambiance',
      title: 'German Beer Bar & Lounge'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      alt: 'Private Dining',
      category: 'ambiance',
      title: 'Private Dining Room'
    },

    // Team Images
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop',
      alt: 'Chef in Kitchen',
      category: 'team',
      title: 'Chef Maria Rodriguez - Head Chef'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
      alt: 'Sous Chef',
      category: 'team',
      title: 'Chef James Wilson - Sous Chef'
    },
    {
      id: 13,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
      alt: 'Pastry Chef',
      category: 'team',
      title: 'Sarah Chen - Pastry Chef'
    },

    // Events Images
    {
      id: 14,
      src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop',
      alt: 'Private Event',
      category: 'events',
      title: 'Private Dining Events'
    },
    {
      id: 15,
      src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
      alt: 'Wine Tasting',
      category: 'events',
      title: 'German Wine Tasting Evenings'
    },
    {
      id: 16,
      src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop',
      alt: 'Cooking Class',
      category: 'events',
      title: 'German Cooking Classes'
    }
  ]

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory)

  const handleImageClick = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
    <div className="bg-[var(--warm-beige)]">
      {/* Top Section */}
      <section className="relative py-20 bg-[var(--warm-beige)]" style={{ }}>
        <div className="absolute inset-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            // backgroundImage: 'url(https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&h=600&fit=crop)'
          }}
        ></div>
        <div className="relative z-10 text-center text-white pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Fro Gallery
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto  bg-black/50"
          >
            Explore our authentic German cuisine, beautiful restaurant ambiance, 
            and the passionate team behind every dish
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-[var(--pastel-blue)] text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                        <p className="text-sm opacity-90">Click to view</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
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
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <h3 className="text-white text-xl font-semibold mb-2">{selectedImage.title}</h3>
                </div>
              </div>

              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                  >
                    <ChevronLeft size={32} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
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