import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, Plus, Check, Loader2, User, Quote } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Reviews = () => {
  const [reviews] = useState([
    {
      _id: '1',
      customerName: 'Aarav Mehta',
      rating: 5,
      review: 'Absolutely spectacular! The Kaju Curry and Dal Makhani are by far the best in Indore. The ambience is incredibly warm and the hospitality is top-notch.'
    },
    {
      _id: '2',
      customerName: 'Neha Sharma',
      rating: 5,
      review: 'Dutt Gurukripa Restaurant is our go-to family dinner spot. The Paneer Tikka is cooked to perfection with an authentic smokiness. High-quality pure veg dining at its best.'
    },
    {
      _id: '3',
      customerName: 'Vikram Rathore',
      rating: 4,
      review: 'Highly recommend the Schezwan Noodles and Manchow Soup. Authentic flavors and amazing presentation. Will definitely visit again for family functions.'
    },
    {
      _id: '4',
      customerName: 'Ananya Sen',
      rating: 5,
      review: 'Every dish was a work of art, especially the Tandoori starters. A truly wonderful pure veg dining experience in Indore!'
    }
  ]);
  const [loadingReviews] = useState(false);

  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        size={14} 
        fill={i < count ? "#D4AF37" : "none"} 
        className={i < count ? "text-gold" : "text-gray-600"} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background blur ornaments */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest text-xs uppercase flex justify-center items-center gap-2 mb-3">
            <MessageSquare size={14} /> Guest Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white">
            What Our <span className="gold-gradient-text">Guests Say</span>
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-6 relative">
            <div className="absolute w-2 h-2 bg-gold rotate-45 left-1/2 -translate-x-1/2 -top-[3px]" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {loadingReviews ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="animate-spin text-gold" size={36} />
            </div>
          ) : reviews.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              navigation={true}
              className="py-12 px-6 sm:px-12"
            >
              {reviews.map((rev) => (
                <SwiperSlide key={rev._id}>
                  <div className="glass-premium p-8 sm:p-12 rounded-lg border border-gold/10 text-center relative select-none">
                    {/* Quote Icon */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold">
                      <Quote size={20} fill="#D4AF37" />
                    </div>

                    <div className="flex justify-center gap-1.5 mb-6 mt-2">
                      {renderStars(rev.rating)}
                    </div>
                    
                    <p className="text-gray-300 font-light italic text-sm sm:text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
                      "{rev.review}"
                    </p>

                    <div>
                      <h4 className="font-playfair text-white font-bold tracking-wide text-base sm:text-lg">
                        {rev.customerName}
                      </h4>
                      <p className="text-gold text-[10px] uppercase tracking-widest mt-1">Verified Diner</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-gray-500 font-light py-10">No reviews yet. Be the first to share your experience!</p>
          )}
        </div>

        {/* Direct Google Review Redirection Button */}
        <div className="text-center">
          <a
            href="https://www.google.com/search?q=Dutt+Gurukripa+Restaurant+Indore+review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 bg-transparent hover:bg-gold text-gold hover:text-luxury-black border border-gold font-semibold uppercase tracking-wider text-xs rounded transition-all duration-300 shadow-lg shadow-gold/5 hover:scale-[1.03] active:scale-95 mx-auto"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.363-2.853-6.363-6.363s2.853-6.363 6.363-6.363c1.61 0 3.085.6 4.227 1.583l3.078-3.078C18.847 2.062 15.753 1 12.24 1 6.033 1 1 6.033 1 12.24s5.033 11.24 11.24 11.24c6.48 0 11.24-4.56 11.24-11.24 0-.765-.082-1.503-.225-2.215H12.24z"/>
            </svg>
            Review Us On Google
          </a>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
