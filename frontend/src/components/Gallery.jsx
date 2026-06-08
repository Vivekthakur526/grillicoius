import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const galleryItems = [
    {
      id: 1,
      src: "/images/restaurant_ambience.png",
      category: "ambience",
      title: "Luxury Dining Room",
      desc: "Warm gold tones, plush velvet seating, and crystal reflections."
    },
    {
      id: 2,
      src: "/images/paneer_tikka.png",
      category: "food",
      title: "Gourmet Paneer Tikka",
      desc: "Delicate cottage cheese grilled on direct fire."
    },
    {
      id: 3,
      src: "/images/chicken_tikka.png",
      category: "food",
      title: "Traditional Chicken Tikka",
      desc: "Smoky boneless charcoal-roasted classic."
    },
    {
      id: 4,
      src: "/images/butter_chicken.png",
      category: "food",
      title: "Award-Winning Butter Chicken",
      desc: "Indore's favorite rich and buttery gravy."
    },
    {
      id: 5,
      src: "/images/dal_makhani.png",
      category: "food",
      title: "Slow-Cooked Dal Makhani",
      desc: "Stirred continuously on charcoal for 12 hours."
    },
    {
      id: 6,
      src: "/images/schezwan_noodles.png",
      category: "food",
      title: "Wok Schezwan Noodles",
      desc: "Perfect fiery Indo-Chinese stir-fry."
    },
    {
      id: 7,
      src: "/images/restaurant_ambience.png", // We can reuse ambience for indoor/outdoor
      category: "seating",
      title: "Elegant Indoor Lounge",
      desc: "Perfect private corners for couples and families."
    },
    {
      id: 8,
      src: "/images/chicken_tikka.png",
      category: "events",
      title: "Celebration Platters",
      desc: "Premium catering setups for customized family events."
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const openLightbox = (id) => {
    // Find index of item in the current filtered list to allow proper slider control
    const index = filteredItems.findIndex(item => item.id === id);
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const tabs = [
    { value: 'all', label: 'All Gallery' },
    { value: 'food', label: 'Gourmet Food' },
    { value: 'ambience', label: 'Ambience' },
    { value: 'seating', label: 'Seating Areas' },
    { value: 'events', label: 'Events' }
  ];

  return (
    <section id="gallery" className="py-24 bg-luxury-charcoal relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-gold font-medium tracking-widest text-xs uppercase flex justify-center items-center gap-2 mb-3">
            <Camera size={14} /> Visual Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white">
            Capturing Our <span className="gold-gradient-text">Ambience</span>
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-6 relative">
            <div className="absolute w-2 h-2 bg-gold rotate-45 left-1/2 -translate-x-1/2 -top-[3px]" />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 max-w-2xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2.5 rounded text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                activeTab === tab.value
                  ? 'bg-gold text-luxury-black font-bold'
                  : 'bg-luxury-black/60 text-gray-400 hover:text-white border border-white/5 hover:border-gold/30'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="group relative overflow-hidden rounded-lg aspect-square bg-luxury-black border border-gold/10 cursor-pointer shadow-lg"
              >
                {/* Image */}
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-luxury-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-4 transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <Eye className="text-gold" size={20} />
                  </div>
                  <h4 className="font-playfair text-white text-lg font-bold mb-1">{item.title}</h4>
                  <p className="text-gold text-[10px] uppercase tracking-wider mb-2 font-medium">{item.category}</p>
                  <p className="text-gray-400 text-xs font-light line-clamp-2 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-luxury-black/95 backdrop-blur-md flex items-center justify-center p-4"
            >
              <button 
                onClick={closeLightbox}
                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
              >
                <X size={24} />
              </button>

              {/* Navigation Left */}
              <button 
                onClick={handlePrev}
                className="absolute left-4 sm:left-8 text-gray-400 hover:text-gold transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Active Image Box */}
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl max-h-[80vh] w-full flex flex-col items-center relative"
              >
                <img 
                  src={filteredItems[selectedImageIndex].src} 
                  alt={filteredItems[selectedImageIndex].title} 
                  className="max-h-[70vh] object-contain rounded-lg border border-gold/20 shadow-2xl"
                />
                <div className="text-center mt-6">
                  <h3 className="font-playfair text-xl font-bold text-white">
                    {filteredItems[selectedImageIndex].title}
                  </h3>
                  <p className="text-gold text-xs uppercase tracking-widest mt-1">
                    {filteredItems[selectedImageIndex].category}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm font-light mt-2 max-w-md mx-auto">
                    {filteredItems[selectedImageIndex].desc}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Right */}
              <button 
                onClick={handleNext}
                className="absolute right-4 sm:right-8 text-gray-400 hover:text-gold transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full"
              >
                <ChevronRight size={28} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
