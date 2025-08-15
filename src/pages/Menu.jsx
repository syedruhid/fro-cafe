import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, X, ChevronDown, Globe } from 'lucide-react'
import { foodMenu } from '../menu/foodMenu'

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedItem, setSelectedItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [language, setLanguage] = useState('de') // 'de' for German, 'en' for English

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isModalOpen])

  // Get unique categories from the food menu
  const categories = [
    { id: 'all', name: language === 'de' ? 'All' : 'All' },
    ...Array.from(new Set(foodMenu.map(item => language === 'de' ? item.category : (item.categoryEn || item.category))))
      .map(category => ({ 
        id: category, 
        name: category,
        originalId: foodMenu.find(item => (language === 'de' ? item.category : (item.categoryEn || item.category)) === category)?.category || category
      }))
  ]

  // Add IDs and images to menu items for display
  const menuItems = foodMenu.map((item, index) => ({
    id: index + 1,
    name: language === 'de' ? item.name : (item.nameEn || item.name),
    description: language === 'de' ? item.description : (item.descriptionEn || item.description),
    price: item.price || '',
    category: language === 'de' ? item.category : (item.categoryEn || item.category),
    originalCategory: item.category,
    options: item.options ? item.options.map(option => ({
      name: language === 'de' ? option.name : (option.nameEn || option.name),
      price: option.price
    })) : [],
    // Placeholder images - you can replace these with actual food images
    image: `https://images.unsplash.com/photo-${1500000000000 + index}?w=400&h=300&fit=crop`,
    popular: false // You can set specific items as popular if needed
  }))

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  const openModal = (item) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedItem(null)
  }

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de')
    setActiveCategory('all') // Reset to all when switching languages
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-black/70"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop)'
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4 drop-shadow-lg"
          >
            {language === 'de' ? 'Our Menu' : 'Our Menu'}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto bg-black/50 px-4 py-2 rounded-md"
          >
            {language === 'de' 
              ? 'Discover our carefully crafted dishes featuring the finest ingredients and traditional recipes with a modern twist'
              : 'Discover our carefully crafted dishes featuring the finest ingredients and traditional recipes with a modern twist'
            }
          </motion.p>
          
          {/* Language Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6"
          >
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-4 py-2 rounded-full transition-all duration-200 border border-white/30"
            >
              <Globe size={16} />
              <span className="font-medium">
                {language === 'de' ? 'EN' : 'DE'}
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-orange-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  {item.popular && (
                    <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star size={12} />
                      <span>{language === 'de' ? 'Popular' : 'Popular'}</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                    {/* {item.price && (
                      <span className="text-orange-600 font-bold text-lg">{item.price}</span>
                    )} */}
                  </div>
                  {item.description && (
                    <p className="text-gray-600 mb-4">{item.description}</p>
                  )}
                  {item.options && item.options.length > 0 && (
                    <button
                      onClick={() => openModal(item)}
                      className="w-full mb-4 flex items-center justify-between p-3 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200"
                    >
                      <span className="text-sm font-medium text-orange-700">
                        {language === 'de' ? 'View Options' : 'View Options'}
                      </span>
                      <ChevronDown size={16} className="text-orange-600" />
                    </button>
                  )}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock size={14} />
                      <span>15-25 min</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <Star size={14} className="text-yellow-400 fill-current" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Options Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{selectedItem.name}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              {selectedItem.description && (
                <p className="text-gray-600 mb-4">{selectedItem.description}</p>
              )}
              
              {/* {selectedItem.price && (
                <div className="mb-4">
                  <span className="text-orange-600 font-bold text-lg">
                    {language === 'de' ? 'Base Price: ' : 'Base Price: '}{selectedItem.price}
                  </span>
                </div>
              )} */}
              
              {selectedItem.options && selectedItem.options.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {language === 'de' ? 'Available Options:' : 'Available Options:'}
                  </h4>
                  <div className="space-y-3">
                    {selectedItem.options.map((option, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">{option.name}</span>
                        <span className="text-orange-600 font-semibold">{option.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}

      {/* Special Offers */}
      <section className="py-16 bg-[var(--matcha-green)]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          {/* <motion.h
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-white mb-6"
          >
            {language === 'de' ? 'Special Offers' : 'Special Offers'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-orange-100 mb-8"
          >
            {language === 'de' 
              ? 'Join us for happy hour every day from 4-6 PM and enjoy 50% off on selected appetizers'
              : 'Join us for happy hour every day from 4-6 PM and enjoy 50% off on selected appetizers'
            }
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {language === 'de' ? 'Lunch Special' : 'Lunch Special'}
              </h3>
              <p className="text-orange-100">
                {language === 'de' 
                  ? '20% off all main courses, Mon-Fri 11AM-2PM'
                  : '20% off all main courses, Mon-Fri 11AM-2PM'
                }
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {language === 'de' ? 'Wine Wednesday' : 'Wine Wednesday'}
              </h3>
              <p className="text-orange-100">
                {language === 'de' 
                  ? 'Half-price bottles of wine every Wednesday'
                  : 'Half-price bottles of wine every Wednesday'
                }
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {language === 'de' ? 'Weekend Brunch' : 'Weekend Brunch'}
              </h3>
              <p className="text-orange-100">
                {language === 'de' 
                  ? 'Special brunch menu available Sat-Sun 10AM-2PM'
                  : 'Special brunch menu available Sat-Sun 10AM-2PM'
                }
              </p>
            </div>
          </motion.div> */}
        </div>
      </section>
    </div>
  )
}

export default Menu 