import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Calendar, BookOpen, MessageSquare, ArrowDown } from 'lucide-react';
import gsap from 'gsap';

const Hero = ({ onBookClick, onMenuClick }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // GSAP parallax effect on scroll
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPos = window.scrollY;
      gsap.to(heroRef.current, {
        backgroundPositionY: `${scrollPos * 0.4}px`,
        duration: 0.1,
        overwrite: 'auto'
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "linear-gradient(rgba(10, 10, 10, 0.65), rgba(10, 10, 10, 0.95)), url('images/restaurant_ambience.png')",
        backgroundAttachment: 'fixed'
      }}
      id="home"
    >
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-luxury-black opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 text-center z-10 select-none">
        {/* Animated Gold Crest */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-6 inline-flex justify-center items-center"
        >
          <div className="w-16 h-16 border-2 border-gold rounded-full flex items-center justify-center p-2 relative before:content-[''] before:absolute before:inset-1 before:border before:border-dashed before:border-gold/40 before:rounded-full">
            <span className="text-gold font-playfair text-2xl font-bold tracking-widest">G</span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-gold font-medium tracking-[0.25em] text-xs sm:text-sm uppercase mb-4"
        >
          Grillicious By Zoella
        </motion.p>

        {/* Title */}
        <motion.h1
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="text-4xl sm:text-6xl md:text-7xl font-bold font-playfair text-white mb-6 leading-tight max-w-4xl mx-auto"
        >
          Experience The <span className="gold-gradient-text">Finest Flavors</span> In Indore
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="text-gray-300 max-w-xl mx-auto text-sm sm:text-base md:text-lg mb-12 font-light tracking-wide leading-relaxed"
        >
          Authentic North Indian, Chinese & Grilled Delights crafted with precision and served in a breathtaking luxury atmosphere.
        </motion.p>

        {/* Actions */}
        <motion.div
          ref={buttonRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
        >
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto px-8 py-4 bg-gold hover:bg-gold-dark text-luxury-black font-semibold uppercase tracking-wider text-xs rounded transition-all duration-300 flex items-center justify-center gap-2 border border-gold hover:border-gold-dark hover:scale-105 active:scale-95 shadow-lg shadow-gold/10"
          >
            <Calendar size={15} />
            Book Table
          </button>
          
          <button
            onClick={onMenuClick}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-white/5 text-gold hover:text-white border border-gold/40 hover:border-white font-semibold uppercase tracking-wider text-xs rounded transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <BookOpen size={15} />
            View Menu
          </button>
          
          <a
            href="https://wa.me/9107314956499?text=Hello%20Grillicious%20By%20Zoella%2C%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-green-500/10 text-green-400 hover:text-green-300 border border-green-500/40 hover:border-green-400 font-semibold uppercase tracking-wider text-xs rounded transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
          >
            <MessageSquare size={15} />
            WhatsApp Now
          </a>
        </motion.div>
      </div>

      {/* Down Arrow / Mouse Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-medium">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-gold"
        >
          <ArrowDown size={18} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
