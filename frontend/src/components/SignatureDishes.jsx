import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, MessageSquare } from 'lucide-react';

const SignatureDishes = () => {
  const rawDishes = [
    {
      id: 1,
      name: "Paneer Tikka",
      category: "Veg Tandoori",
      desc: "Cottage cheese cubes marinated in spiced yogurt and traditional herbs, char-grilled to smoky perfection with onions and bell peppers in our clay oven.",
      price: "₹260",
      image: "images/paneer_tikka.png",
      tag: "Best Seller"
    },
    {
      id: 2,
      name: "Kaju Curry",
      category: "North Indian",
      desc: "Rich and roasted cashew nuts simmered in a luscious, creamy onion-tomato gravy with traditional Indian spices.",
      price: "₹280",
      image: "images/kaju_curry.png",
      tag: "Chef's Special"
    },
    {
      id: 3,
      name: "Dal Makhani",
      category: "North Indian",
      desc: "Slow-cooked black lentils simmered overnight on low charcoal heat, infused with house spices, rich butter, and fresh cream.",
      price: "₹220",
      image: "images/dal_makhani.png",
      tag: "Legacy Recipe"
    },
    {
      id: 4,
      name: "Lachha Paratha",
      category: "Indian Breads",
      desc: "Multi-layered, crispy and flaky whole wheat flatbread baked in tandoor and brushed with premium melted butter.",
      price: "₹60",
      image: "images/lachha_paratha.png",
      tag: "Must Try"
    },
    {
      id: 5,
      name: "Manchow Soup",
      category: "Chinese Specialities",
      desc: "A comforting Indo-Chinese soup loaded with finely chopped vegetables, ginger, garlic, and soy sauce, topped with crispy fried noodles.",
      price: "₹130",
      image: "images/manchow_soup.png",
      tag: "Hot & Spicy"
    },
    {
      id: 6,
      name: "Punjabi Salad",
      category: "Salads & Sides",
      desc: "Crisp sliced cucumbers, juicy tomatoes, carrots, and onions tossed with tangy lemon juice, fresh green chilies, and chaat masala.",
      price: "₹90",
      image: "images/punjabi_salad.png",
      tag: "Fresh & Healthy"
    }
  ];

  const dishes = rawDishes.map(d => ({
    ...d,
    image: `${import.meta.env.BASE_URL}${d.image}`
  }));

  const handleOrderWhatsApp = (dishName) => {
    const message = `Hello Dutt Gurukripa Restaurant, I would like to order the signature dish: ${dishName}. Please let me know the availability!`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/919926788888?text=${encoded}`, '_blank');
  };

  return (
    <section id="menu" className="py-24 bg-luxury-black relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest text-xs uppercase flex justify-center items-center gap-2 mb-3">
            <Star size={12} fill="#D4AF37" className="animate-pulse" /> Signature Curations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-white">
            Our Culinary <span className="gold-gradient-text">Masterpieces</span>
          </h2>
          <div className="w-24 h-0.5 bg-gold mx-auto mt-6 relative">
            <div className="absolute w-2 h-2 bg-gold rotate-45 left-1/2 -translate-x-1/2 -top-[3px]" />
          </div>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-luxury-gray/40 border border-gold/15 rounded-lg overflow-hidden flex flex-col justify-between gold-glow-hover h-full"
            >
              {/* Image Header with Hover Scale */}
              <div className="relative overflow-hidden aspect-[4/3] w-full">
                <img 
                  src={dish.image} 
                  alt={dish.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-transparent to-transparent opacity-60 pointer-events-none" />
                
                {/* Custom Tags */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 bg-luxury-black/80 backdrop-blur-sm border border-gold/30 text-gold text-[10px] uppercase font-semibold tracking-wider rounded-full">
                    {dish.category}
                  </span>
                </div>
                {dish.tag && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gold text-luxury-black text-[10px] uppercase font-bold tracking-wider rounded">
                      {dish.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Dish Metadata */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-baseline mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-gold transition-colors duration-300 font-playfair">
                      {dish.name}
                    </h3>
                    <span className="text-gold font-playfair font-bold text-lg">{dish.price}</span>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed mb-6 line-clamp-3">
                    {dish.desc}
                  </p>
                </div>

                {/* Card Action */}
                <button
                  onClick={() => handleOrderWhatsApp(dish.name)}
                  className="w-full py-3 bg-transparent group-hover:bg-gold text-gold group-hover:text-luxury-black border border-gold/40 group-hover:border-gold font-medium uppercase tracking-wider text-xs rounded transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={14} />
                  Order on WhatsApp
                </button>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureDishes;
