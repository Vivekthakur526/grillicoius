import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Phone, User, MessageSquare, Check, X, Loader2 } from 'lucide-react';

const BookingForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bookingDate: '',
    guests: '2',
    note: ''
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear errors when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else {
      const cleanPhone = formData.phone.replace(/[\s\-\+\(\)]/g, '');
      if (cleanPhone.length < 8 || !/^\d+$/.test(cleanPhone)) {
        newErrors.phone = 'Enter a valid phone number (at least 8 digits).';
      }
    }

    if (!formData.bookingDate) newErrors.bookingDate = 'Date and time is required.';
    
    const guestNum = parseInt(formData.guests);
    if (!formData.guests || isNaN(guestNum) || guestNum <= 0) {
      newErrors.guests = 'Number of guests must be at least 1.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;

    setLoading(true);
    
    const formatBookingDate = (dateStr) => {
      if (!dateStr) return '';
      try {
        const dateObj = new Date(dateStr);
        return dateObj.toLocaleString('en-IN', {
          dateStyle: 'medium',
          timeStyle: 'short'
        });
      } catch (err) {
        return dateStr;
      }
    };

    const ownerNumber = '919691766123';
    const formattedDate = formatBookingDate(formData.bookingDate);
    
    const text = `🔥 *NEW TABLE RESERVATION* 🔥\n` +
                 `---------------------------\n` +
                 `👤 *Name:* ${formData.name}\n` +
                 `📞 *Phone:* ${formData.phone}\n` +
                 `📅 *Date & Time:* ${formattedDate}\n` +
                 `👥 *Guests:* ${formData.guests}\n` +
                 `✍️ *Special Note:* ${formData.note || 'None'}\n` +
                 `---------------------------\n` +
                 `_Submitted via Grillicious By Zoella Website_`;
                 
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodedText}`;

    // Simulate brief loading effect for a premium feel
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSuccess(true);
      setLoading(false);
      setFormData({
        name: '',
        phone: '',
        bookingDate: '',
        guests: '2',
        note: ''
      });
    }, 800);
  };

  return (
    <div className="relative">
      <AnimatePresence>
        {!success ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-center font-playfair text-white mb-6">
              Reserve A <span className="gold-gradient-text">Table</span>
            </h3>

            {serverError && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded text-center">
                {serverError}
              </div>
            )}

            {/* Name field */}
            <div className="relative">
              <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Your Name</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                  <User size={16} />
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Vivek Thakur"
                  className="w-full bg-luxury-black border border-gold/15 focus:border-gold rounded py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm"
                />
              </div>
              {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
            </div>

            {/* Phone field */}
            <div className="relative">
              <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Phone Number</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                  <Phone size={16} />
                </span>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 9876543210"
                  className="w-full bg-luxury-black border border-gold/15 focus:border-gold rounded py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm"
                />
              </div>
              {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Date & Time */}
              <div className="relative">
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Date & Time</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                    <Calendar size={16} />
                  </span>
                  <input
                    type="datetime-local"
                    name="bookingDate"
                    value={formData.bookingDate}
                    onChange={handleChange}
                    className="w-full bg-luxury-black border border-gold/15 focus:border-gold rounded py-3 pl-10 pr-4 text-white focus:outline-none transition-colors text-sm"
                  />
                </div>
                {errors.bookingDate && <p className="text-red-400 text-[10px] mt-1">{errors.bookingDate}</p>}
              </div>

              {/* Number of Guests */}
              <div className="relative">
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Number of Guests</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                    <Users size={16} />
                  </span>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-luxury-black border border-gold/15 focus:border-gold rounded py-3 pl-10 pr-4 text-white focus:outline-none transition-colors text-sm appearance-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n} className="bg-luxury-gray">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                    <option value="11" className="bg-luxury-gray">10+ Guests</option>
                  </select>
                </div>
                {errors.guests && <p className="text-red-400 text-[10px] mt-1">{errors.guests}</p>}
              </div>
            </div>

            {/* Special Note */}
            <div className="relative">
              <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Special Note (Optional)</label>
              <div className="relative">
                <span className="absolute top-3 left-3 text-gray-500 pointer-events-none">
                  <MessageSquare size={16} />
                </span>
                <textarea
                  name="note"
                  value={formData.note}
                  onChange={handleChange}
                  rows="3"
                  placeholder="e.g. Vegetarian preference, anniversary setup, quiet corner request..."
                  className="w-full bg-luxury-black border border-gold/15 focus:border-gold rounded py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm resize-none"
                />
              </div>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gold hover:bg-gold-dark text-luxury-black font-semibold uppercase tracking-widest text-xs rounded transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Securing Table...
                </>
              ) : (
                'Request Booking'
              )}
            </button>
          </form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-8 text-center"
          >
            <div className="w-16 h-16 bg-gold/10 border border-gold rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="text-gold" size={32} />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold font-playfair text-white mb-3">
              Booking Sent via WhatsApp!
            </h3>
            
            <p className="text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-6 max-w-sm mx-auto">
              Thank you! Your booking details have been formatted and forwarded to us on WhatsApp. We will confirm your table shortly.
            </p>

            <div className="bg-luxury-black/60 p-4 border border-gold/10 rounded-lg max-w-xs mx-auto mb-8 text-left text-xs space-y-2 text-gray-400">
              <p><strong className="text-gold font-normal">Restaurant:</strong> Grillicious By Zoella</p>
              <p><strong className="text-gold font-normal">Contact No:</strong> 0731 495 6499</p>
              <p><strong className="text-gold font-normal">Location:</strong> Bicholi Mardana, Indore</p>
            </div>

            <button
              onClick={() => {
                setSuccess(false);
                if (onClose) onClose();
              }}
              className="px-8 py-3 bg-transparent hover:bg-gold text-gold hover:text-luxury-black border border-gold font-semibold uppercase tracking-wider text-xs rounded transition-all duration-300"
            >
              Close Window
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingForm;
