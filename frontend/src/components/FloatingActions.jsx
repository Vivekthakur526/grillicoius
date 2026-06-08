import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const phoneNum = "07314956499";
  const whatsappMsg = "Hello Grillicious By Zoella, I would like to know more about your restaurant.";
  const whatsappUrl = `https://wa.me/9107314956499?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <>
      {/* Desktop Floating Actions (Hidden on Mobile) */}
      <div className="fixed bottom-8 right-6 z-40 hidden md:flex flex-col gap-4">
        
        {/* Call Floater */}
        <motion.a
          href={`tel:${phoneNum}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-luxury-gray border border-gold hover:border-gold-light text-gold hover:text-white rounded-full flex items-center justify-center shadow-2xl transition-colors relative group"
          title="Call Restaurant"
        >
          <Phone size={22} className="animate-pulse" />
          <span className="absolute right-16 bg-luxury-black text-gold border border-gold/20 text-xs px-3 py-1.5 rounded uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Call: 0731 495 6499
          </span>
        </motion.a>

        {/* WhatsApp Floater */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-colors relative group"
          title="WhatsApp Us"
        >
          <MessageSquare size={22} />
          <span className="absolute right-16 bg-luxury-black text-green-400 border border-green-500/20 text-xs px-3 py-1.5 rounded uppercase tracking-wider font-semibold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </motion.a>
      </div>

      {/* Back To Top Button (Floating on bottom left) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 left-6 z-40 w-11 h-11 bg-gold hover:bg-gold-dark text-luxury-black rounded-full flex items-center justify-center shadow-2xl cursor-pointer transition-colors"
            title="Back to Top"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Sticky Bottom Bar (Visible on Mobile Only, z-index 40) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-luxury-black/90 backdrop-blur-md border-t border-gold/15 flex">
        {/* Mobile Call Button */}
        <a
          href={`tel:${phoneNum}`}
          className="flex-1 py-4 text-center text-gold font-bold uppercase tracking-wider text-xs border-r border-gold/15 flex items-center justify-center gap-2 active:bg-white/5"
        >
          <Phone size={14} className="animate-pulse" />
          Call Now
        </a>

        {/* Mobile WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-4 text-center text-green-400 font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 active:bg-green-500/10"
        >
          <MessageSquare size={14} />
          WhatsApp Chat
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
