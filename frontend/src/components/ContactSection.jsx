import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Globe, MessageCircle } from 'lucide-react';

// Custom inline SVG icons to prevent lucide-react export mismatches
const InstagramIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ size = 18, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const ContactSection = () => {
  const socialIcons = [
    { icon: <FacebookIcon size={18} />, url: "#", name: "Facebook" },
    { icon: <InstagramIcon size={18} />, url: "https://instagram.com/grilliciousbyzoella", name: "Instagram" },
    { icon: <Globe size={18} />, url: "#", name: "Website" }
  ];

  const instagramFeeds = [
    { id: 1, img: "images/butter_chicken.png", likes: "1.2k", comments: "48" },
    { id: 2, img: "images/chicken_tikka.png", likes: "984", comments: "32" },
    { id: 3, img: "images/paneer_tikka.png", likes: "1.5k", comments: "64" },
    { id: 4, img: "images/restaurant_ambience.png", likes: "2.1k", comments: "96" }
  ];

  return (
    <section id="contact" className="py-24 bg-luxury-charcoal relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Block: Restaurant Info & Map */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-gold font-medium tracking-widest text-xs uppercase flex items-center gap-2 mb-3">
                <MapPin size={14} /> Find Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white">
                Visit <span className="gold-gradient-text">Grillicious</span> By Zoella
              </h2>
              <div className="w-16 h-0.5 bg-gold mt-4" />
            </div>

            {/* Address cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass p-5 rounded-lg border border-gold/10 flex gap-4">
                <div className="text-gold flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-playfair text-white font-semibold mb-2 text-sm uppercase tracking-wider">Address</h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                    Behind Hotel President Park,<br />
                    Bypass Road, Near Sampat Hills Road,<br />
                    Bicholi Mardana, Indore,<br />
                    Madhya Pradesh 452016
                  </p>
                </div>
              </div>

              <div className="glass p-5 rounded-lg border border-gold/10 flex gap-4 flex-col justify-between">
                <div className="flex gap-4">
                  <div className="text-gold flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-playfair text-white font-semibold mb-2 text-sm uppercase tracking-wider">Contact & Inquiries</h4>
                    <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
                      Ph: <a href="tel:07314956499" className="hover:text-gold transition-colors font-medium">0731 495 6499</a>
                    </p>
                    <p className="text-gray-400 text-xs font-light mt-1">
                      Email: info@grilliciousbyzoella.in
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-gold/5">
                  <a
                    href="tel:07314956499"
                    className="flex-1 py-2 bg-gold hover:bg-gold-dark text-luxury-black text-center rounded text-[10px] uppercase font-bold tracking-wider transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://wa.me/9107314956499?text=Hello%20Grillicious%20By%20Zoella%2C%20I%20would%20like%20to%20know%20more%20about%20your%20restaurant."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 bg-transparent hover:bg-green-500/10 text-green-400 border border-green-500/30 hover:border-green-400 text-center rounded text-[10px] uppercase font-bold tracking-wider transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageSquare size={10} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-lg overflow-hidden border border-gold/15 shadow-2xl h-[280px]">
              <iframe
                title="Grillicious By Zoella Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.5901308365287!2d75.9213898758804!3d22.706297327891244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e245a4b13a77%3A0xe108e4ee0e4620f3!2sHotel%20President%20Park!5e0!3m2!1sen!2sin!4v1717800000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Block: Instagram Integration */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
            <div>
              <span className="text-gold font-medium tracking-widest text-xs uppercase flex items-center gap-2 mb-3">
                <InstagramIcon size={14} /> Social Connection
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-white">
                Follow <span className="gold-gradient-text">@grilliciousbyzoella</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mt-4" />
            </div>

            <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
              Step inside our luxury kitchen through social media. Get daily updates on culinary secrets, chef specials, dining reservations, and live events.
            </p>

            {/* Instagram Mock Feed */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {instagramFeeds.map((feed) => (
                <div key={feed.id} className="relative group rounded-lg overflow-hidden aspect-square border border-gold/10 shadow-lg">
                  <img 
                    src={feed.img} 
                    alt={`Instagram Feed ${feed.id}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-luxury-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-1 text-white text-xs">
                    <InstagramIcon size={16} className="text-gold mb-1" />
                    <span className="font-semibold">{feed.likes} likes</span>
                    <span className="text-gray-400 text-[10px]">{feed.comments} comments</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links and Follow Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-gold/10">
              <a
                href="https://instagram.com/grilliciousbyzoella"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-gold hover:bg-gold-dark text-luxury-black font-semibold uppercase tracking-wider text-xs rounded transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-lg shadow-gold/10"
              >
                <InstagramIcon size={15} />
                Follow Us On Instagram
              </a>

              <div className="flex gap-4">
                {socialIcons.map((soc, i) => (
                  <a
                    key={i}
                    href={soc.url}
                    className="w-10 h-10 rounded-full bg-luxury-gray hover:bg-gold text-gray-400 hover:text-luxury-black border border-gold/10 hover:border-gold transition-all duration-300 flex items-center justify-center hover:scale-110"
                    title={soc.name}
                  >
                    {soc.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
          
        </div>
        
      </div>
    </section>
  );
};

export default ContactSection;
