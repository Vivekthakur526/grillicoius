import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Phone, Menu, X, Star, UtensilsCrossed, ShieldAlert } from 'lucide-react';

// Component Imports
import Hero from './components/Hero';
import About from './components/About';
import SignatureDishes from './components/SignatureDishes';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import BookingForm from './components/BookingForm';
import InquiryForm from './components/InquiryForm';
import ContactSection from './components/ContactSection';
import FloatingActions from './components/FloatingActions';

function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Preloader timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Handle header background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Signature Menu', id: 'menu' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Reviews', id: 'reviews' },
    { label: 'Reservations', id: 'reservations' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <div className="bg-luxury-black text-gray-200 min-h-screen relative flex flex-col justify-between">
      {/* 1. Page Loader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-50 bg-luxury-black flex flex-col items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              {/* Spinner */}
              <div className="loader-spinner mb-8" />
              
              {/* Luxury gold logo text */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center"
              >
                <h2 className="text-xl sm:text-2xl font-bold font-playfair tracking-widest text-gold uppercase">
                  Grillicious
                </h2>
                <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase tracking-[0.4em] mt-1.5 font-light">
                  By Zoella • Indore
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Premium Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-30 transition-all duration-500 py-4 ${
          scrolled 
            ? 'bg-luxury-black/90 backdrop-blur-md border-b border-gold/15 py-3 shadow-lg' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleScrollToSection('home'); }}
            className="flex flex-col items-start select-none"
          >
            <span className="font-playfair text-xl sm:text-2xl font-bold tracking-widest text-white hover:text-gold transition-colors duration-300">
              GRILLICIOUS
            </span>
            <span className="text-[8px] tracking-[0.35em] text-gold uppercase font-light -mt-0.5">
              By Zoella
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleScrollToSection(link.id); }}
                className="text-xs uppercase tracking-widest text-gray-300 hover:text-gold transition-colors duration-300 font-semibold gold-border-draw py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setShowBookingModal(true)}
              className="px-5 py-2.5 bg-gold hover:bg-gold-dark text-luxury-black font-bold uppercase tracking-wider text-[10px] rounded transition-all duration-300 flex items-center gap-1.5 shadow-lg shadow-gold/10 hover:scale-105 active:scale-95 border border-gold"
            >
              <Calendar size={12} />
              Book Table
            </button>
          </div>

          {/* Mobile Hamburguer Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-gold transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Slide-Down Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-luxury-black border-b border-gold/15 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 flex flex-col gap-5">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); handleScrollToSection(link.id); }}
                    className="text-xs uppercase tracking-widest text-gray-300 hover:text-gold transition-colors py-2 font-semibold border-b border-white/5"
                  >
                    {link.label}
                  </a>
                ))}
                
                <button
                  onClick={() => { setMobileMenuOpen(false); setShowBookingModal(true); }}
                  className="w-full py-3 bg-gold hover:bg-gold-dark text-luxury-black font-semibold uppercase tracking-wider text-[10px] rounded transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Calendar size={14} />
                  Book Table
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 3. Main Sections Layout */}
      <main className="flex-grow">
        
        {/* Hero Section */}
        <Hero 
          onBookClick={() => setShowBookingModal(true)} 
          onMenuClick={() => handleScrollToSection('menu')}
        />

        {/* About Section */}
        <About />

        {/* Signature Dishes Section */}
        <SignatureDishes />

        {/* Gallery Section */}
        <Gallery />

        {/* Reviews Section */}
        <Reviews />

        {/* Dedicated Booking and Inquiry Section */}
        <section id="reservations" className="py-24 bg-luxury-charcoal border-t border-b border-gold/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.05),transparent_60%)] pointer-events-none" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Header info */}
            <div className="text-center mb-16">
              <span className="text-gold font-medium tracking-widest text-xs uppercase flex justify-center items-center gap-2 mb-3">
                <UtensilsCrossed size={14} /> Dine With Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white">
                Reservations & <span className="gold-gradient-text">Inquiries</span>
              </h2>
              <div className="w-24 h-0.5 bg-gold mx-auto mt-6 relative">
                <div className="absolute w-2 h-2 bg-gold rotate-45 left-1/2 -translate-x-1/2 -top-[3px]" />
              </div>
            </div>

            {/* Split grid for Direct Reservation vs Custom Inquiry */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
              {/* Direct Booking Panel */}
              <div className="glass-premium p-6 sm:p-10 rounded-lg border border-gold/15 flex flex-col justify-between">
                <BookingForm />
              </div>

              {/* General Inquiry Panel */}
              <div className="flex flex-col">
                <InquiryForm />
              </div>
            </div>
          </div>
        </section>

        {/* Contact and Instagram Section */}
        <ContactSection />

      </main>

      {/* 4. Luxury Footer */}
      <footer className="bg-luxury-black border-t border-gold/15 py-12 pb-24 md:pb-12 text-center text-gray-500 text-xs">
        <div className="container mx-auto px-4 space-y-6">
          <div className="flex justify-center items-center gap-2">
            <span className="w-8 h-px bg-gold/30" />
            <h3 className="font-playfair text-lg text-white font-bold tracking-widest">
              GRILLICIOUS BY ZOELLA
            </h3>
            <span className="w-8 h-px bg-gold/30" />
          </div>
          
          <p className="text-gray-400 max-w-md mx-auto font-light leading-relaxed">
            Indore's Premier Tandoori & Fine Dining Lounge. Indulge in authentic local flavors and grilled items served with uncompromising luxury.
          </p>

          <p className="text-gray-600 text-[10px] tracking-wider uppercase font-light">
            © {new Date().getFullYear()} Grillicious By Zoella, Indore. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* 5. Floating / Sticky Call & WhatsApp triggers */}
      <FloatingActions />

      {/* 6. Luxury Pop-up Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-luxury-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-premium p-6 sm:p-10 rounded-lg border border-gold/25 max-w-xl w-full relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowBookingModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gold transition-colors p-2 bg-white/5 rounded-full"
              >
                <X size={18} />
              </button>

              {/* Main reservation form */}
              <BookingForm onClose={() => setShowBookingModal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
