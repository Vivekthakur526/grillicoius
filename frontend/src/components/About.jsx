import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Flame, Soup, Music, Sparkles } from 'lucide-react';
import gsap from 'gsap';

// Counter Helper Component
const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      const duration = 2; // seconds
      const totalMiliseconds = duration * 1000;
      const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
      
      const timer = setInterval(() => {
        start += Math.ceil(end / 100);
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <span ref={ref} className="font-playfair text-3xl sm:text-4xl font-bold text-gold">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const containerRef = useRef(null);

  const features = [
    {
      icon: <Users className="text-gold" size={24} />,
      title: "Family Dining",
      desc: "Spacious, warm, and inviting seating designed specifically for memorable family gatherings."
    },
    {
      icon: <Flame className="text-gold" size={24} />,
      title: "Grilled Specialities",
      desc: "Perfected coal-grilled delicacies, skewered live and served piping hot with premium dips."
    },
    {
      icon: <Soup className="text-gold" size={24} />,
      title: "North Indian & Chinese",
      desc: "A rich culinary bridge between creamy authentic curries and flavorful, fiery wok creations."
    },
    {
      icon: <Music className="text-gold" size={24} />,
      title: "Events & Parties",
      desc: "Perfect venue spaces and customized luxury catering packages for birthdays, anniversaries, and reunions."
    }
  ];

  return (
    <section id="about" className="py-24 bg-luxury-charcoal relative overflow-hidden" ref={containerRef}>
      {/* Background Ornaments */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Images Grid */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative grid grid-cols-12 gap-4">
              {/* Gold frame wrapper */}
              <div className="absolute -inset-4 border border-gold/20 rounded-lg pointer-events-none transform -rotate-1 hidden sm:block" />
              
              {/* Primary Image */}
              <div className="col-span-8 rounded-lg overflow-hidden shadow-2xl border border-gold/10 group">
                <img 
                  src="images/restaurant_ambience.png" 
                  alt="Restaurant Ambience" 
                  className="w-full h-[320px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Secondary Overlapping Image */}
              <div className="col-span-4 rounded-lg overflow-hidden shadow-2xl border border-gold/10 self-end transform translate-y-8 -translate-x-4 group hidden sm:block">
                <img 
                  src="images/paneer_tikka.png" 
                  alt="Food Detail" 
                  className="w-full h-[200px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Counters Row */}
            <div className="grid grid-cols-3 gap-4 mt-16 pt-8 border-t border-gold/10 text-center">
              <div>
                <div className="flex justify-center items-center">
                  <Counter value="12" suffix="+" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-wider font-light">Years of Mastery</p>
              </div>
              <div>
                <div className="flex justify-center items-center">
                  <Counter value="50" suffix="+" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-wider font-light">Signature Dishes</p>
              </div>
              <div>
                <div className="flex justify-center items-center">
                  <Counter value="100" suffix="%" />
                </div>
                <p className="text-gray-400 text-xs sm:text-sm mt-1 uppercase tracking-wider font-light">Happy Diners</p>
              </div>
            </div>
          </div>

          {/* Right Side: Copy & Description */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="max-w-xl">
              <span className="text-gold font-medium tracking-widest text-xs uppercase flex items-center gap-2 mb-3">
                <Sparkles size={14} /> Our Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white mb-6 leading-tight">
                Crafting Culinary Masterpieces <span className="gold-gradient-text">Since 2014</span>
              </h2>
              <p className="text-gray-300 font-light leading-relaxed mb-8 text-sm sm:text-base">
                Welcome to <strong className="text-gold font-medium">Grillicious By Zoella</strong>, Indore's premier address for true luxury fine dining. We blend age-old traditions of charcoal grilling with contemporary North Indian spices and clean, authentic Chinese wok techniques to deliver a feast for your senses. 
              </p>

              {/* Highlight Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-lg bg-luxury-black/40 border border-white/5 hover:border-gold/20 transition-all duration-300 hover:translate-y-[-2px]"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center border border-gold/20">
                      {feat.icon}
                    </div>
                    <div>
                      <h4 className="font-playfair text-white font-semibold text-base mb-1">{feat.title}</h4>
                      <p className="text-gray-400 text-xs font-light leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
