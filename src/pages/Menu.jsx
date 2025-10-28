import { useState, useEffect } from "react";
import { X, Globe, ChevronDown, ChevronUp } from "lucide-react";
import { foodMenu, useMenuData } from "../menu/foodMenu";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState("de"); // 'de' for German, 'en' for English
  const [openSubCategories, setOpenSubCategories] = useState({}); // Track which subcategories are open
  const menuData = useMenuData([]);
  
  const parsedOptions = (item) => {
    try {
      if (!item || !item.options) return [];
  
      if (typeof item.options === "string") {
        // Clean and normalize JSON-like strings
        const cleaned = item.options
          .trim()
          .replace(/,\s*\]/, "]") // remove trailing comma before ]
          .replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":') // quote unquoted keys
          .replace(/'/g, '"'); // ensure proper quotes
  
        return JSON.parse(cleaned);
      }
  
      return Array.isArray(item.options) ? item.options : [];
    } catch (e) {
      console.error("Invalid options JSON:", item.options, e);
      return [];
    }
  };
  

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Get unique categories from the food menu (top level only)
  const categories = [
    { id: "all", name: "All" },
    ...Array.from(
      new Set(
        menuData.map((item) =>
          language === "de" ? item.category : item.categoryEn || item.category
        )
      )
    ).map((category) => ({
      id: category,
      name: category,
    })),
  ];

  // Add IDs and images to menu items for display
  const menuItems = menuData.map((item, index) => ({
    id: index + 1,
    name: language === "de" ? item.name : item.nameEn || item.name,
    description:
      language === "de"
        ? item.description
        : item.descriptionEn || item.description,
    price: item.price || "",
    category:
      language === "de" ? item.category : item.categoryEn || item.category,
    originalCategory: item.category,
    subCategory: language === "de" ? item.subCategory : item.subCategoryEn || item.subCategory,
    subSubCategory: language === "de" ? item.subSubCategory : item.subSubCategoryEn || item.subSubCategory,
    options: item.options
      ? parsedOptions(item).map((option) => ({
          name: language === "de" ? option.name : option.nameEn || option.name,
          price: option.price,
        }))
      : [],
    popular: false, // You can set specific items as popular if needed
  }));

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) =>
          [item.category, item.categoryEn].includes(activeCategory)
        );

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const toggleLanguage = () => {
    setLanguage(language === "de" ? "en" : "de");
    setActiveCategory("all");
  };

  const toggleSubCategory = (subCategory) => {
    setOpenSubCategories(prev => ({
      ...prev,
      [subCategory]: !prev[subCategory]
    }));
  };

  return (
    <div className="bg-[var(--warm-beige)]">
      {/* Top Image Section */}
      <section className="relative py-20 bg-gray-900">
        <div className="absolute inset-0 bg-black/70"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=600&fit=crop)",
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl pt-10 font-bold mb-4 drop-shadow-lg"
          >
            {language === "de" ? "Our Menu" : "Our Menu"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl max-w-2xl mx-auto bg-black/50 px-4 py-2 rounded-md"
          >
            {language === "de"
              ? "Discover our carefully crafted dishes featuring the finest ingredients and traditional recipes with a modern twist"
              : "Discover our carefully crafted dishes featuring the finest ingredients and traditional recipes with a modern twist"}
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
                {language === "de" ? "English" : "Deutsch"}
              </span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-12 bg-[var(--warm-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                  activeCategory === category.id
                    ? "bg-[var(--pastel-blue)] text-white"
                    : "bg-white text-gray-700 hover:bg-blue-50"
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
        <div className="max-w-[1600px] mx-auto px-8">
          {Object.entries(
            filteredItems.reduce((acc, item) => {
              // Group by subCategory first
              const subCat = item.subCategory || "Miscellaneous";
              if (!acc[subCat]) acc[subCat] = {};
              
              // Then group by subSubCategory within each subCategory
              const subSubCat = item.subSubCategory || "General";
              if (!acc[subCat][subSubCat]) acc[subCat][subSubCat] = [];
              acc[subCat][subSubCat].push(item);
              return acc;
            }, {})
          ).map(([subCategory, subSubCategories]) => (
            <div key={subCategory} className="mb-12">
              {/* Subcategory title with accordion functionality */}
              <button
                onClick={() => toggleSubCategory(subCategory)}
                className="w-full flex items-center justify-between text-left mb-6 border-b-2 border-[var(--pastel-blue)] pb-3 text-gray-800 tracking-wide hover:bg-gray-50 rounded-lg p-2 transition-colors duration-200"
              >
                <h2 className="text-3xl font-semibold">
                  {subCategory}
                </h2>
                <div className="ml-4">
                  {openSubCategories[subCategory] ? (
                    <ChevronUp size={24} className="text-[var(--pastel-blue)]" />
                  ) : (
                    <ChevronDown size={24} className="text-[var(--pastel-blue)]" />
                  )}
                </div>
              </button>

              {/* SubSubCategory groups - only show if accordion is open */}
              {openSubCategories[subCategory] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  {Object.entries(subSubCategories).map(([subSubCategory, items]) => (
                <div key={subSubCategory} className="mb-8">
                  {/* SubSubCategory title (only show if it's not "General") */}
                  {subSubCategory !== "General" && (
                    <h3 className="text-xl font-semibold mb-4 text-gray-700 border-l-4 border-[var(--pastel-blue)] pl-3">
                      {subSubCategory}
                    </h3>
                  )}

                  {/* Item grid — now in 2 responsive columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {items.map((item) => (
                     <div
                     key={item.name}
                     className="p-4 mb-4 bg-[#f8f5ef] rounded-xl shadow-sm border border-[#eae3d9] hover:shadow-md hover:scale-[1.01] transition-all duration-300"
                   >
                     <div>
                       <h4 className="text-lg font-semibold text-gray-900">
                         {item.name}
                       </h4>
                       {item.description && (
                         <p className="text-sm text-gray-700 mt-1 leading-snug">
                           {item.description}
                         </p>
                       )}
                     </div>
                   
                     {(item.price || item.prepTime) && (
                       <div className="text-sm text-[var(--pastel-blue)] font-semibold mt-3">
                         {item.price ? <span>{item.price}</span> : <span>{item.prepTime}</span>}
                       </div>
                     )}
                   </div>
                   
                    ))}
                  </div>
                </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
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
                <h3 className="text-xl font-semibold text-gray-900">
                  {selectedItem.name}
                </h3>
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

              {selectedItem.options && selectedItem.options.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    {language === "de"
                      ? "Available Options:"
                      : "Available Options:"}
                  </h4>
                  <div className="space-y-3">
                    {selectedItem.options.map((option, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                      >
                        <span className="font-medium text-gray-900">
                          {option.name}
                        </span>
                        <span className="text-[var(--pastel-blue)] font-semibold">
                          {option.price}
                        </span>
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Footer isOverlay={false} />
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
  );
};

export default Menu;
