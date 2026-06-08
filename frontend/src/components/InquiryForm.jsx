import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, MessageSquare, Loader2, Check } from 'lucide-react';

const InquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
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
    // Clear validation error on change
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

    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setServerError('');
    if (!validate()) return;

    setLoading(true);
    
    const ownerNumber = '919691766123';
    const text = `✉️ *NEW GENERAL/EVENT INQUIRY* ✉️\n` +
                 `---------------------------\n` +
                 `👤 *Name:* ${formData.name}\n` +
                 `📞 *Phone:* ${formData.phone}\n` +
                 `💬 *Message:* ${formData.message}\n` +
                 `---------------------------\n` +
                 `_Submitted via Grillicious By Zoella Website_`;
                 
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${ownerNumber}&text=${encodedText}`;

    // Simulate premium loading before opening WhatsApp
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSuccess(true);
      setLoading(false);
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
      // Reset success state after 6 seconds to let them submit again if needed
      setTimeout(() => setSuccess(false), 6000);
    }, 800);
  };

  return (
    <div className="glass-premium p-8 rounded-lg border border-gold/15 relative overflow-hidden h-full">
      {/* Background abstract element */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <AnimatePresence mode="wait">
        {!success ? (
          <motion.div
            key="inquiry-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold font-playfair text-white mb-2">
              Send An <span className="gold-gradient-text">Inquiry</span>
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light mb-8">
              Planning a party, hosting an event, or have a special query? Write to us and our manager will contact you.
            </p>

            {serverError && (
              <div className="p-3 mb-6 bg-red-500/10 border border-red-500/30 text-red-400 text-xs rounded text-center">
                {serverError}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Your Name</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                    <User size={15} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full bg-luxury-black border border-gold/15 focus:border-gold rounded py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm"
                  />
                </div>
                {errors.name && <p className="text-red-400 text-[10px] mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Phone Number</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                    <Phone size={15} />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full bg-luxury-black border border-gold/15 focus:border-gold rounded py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-[10px] mt-1">{errors.phone}</p>}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 text-xs uppercase tracking-wider mb-2 font-medium">Message</label>
                <div className="relative">
                  <span className="absolute top-3 left-3 text-gray-500 pointer-events-none">
                    <MessageSquare size={15} />
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe your event or query details..."
                    className="w-full bg-luxury-black border border-gold/15 focus:border-gold rounded py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>
                {errors.message && <p className="text-red-400 text-[10px] mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gold hover:bg-gold-dark text-luxury-black font-semibold uppercase tracking-wider text-xs rounded transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit Inquiry'
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="inquiry-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center text-center py-12 h-full"
          >
            <div className="w-14 h-14 bg-gold/10 border border-gold rounded-full flex items-center justify-center mb-6">
              <Check className="text-gold" size={24} />
            </div>
            
            <h3 className="text-xl font-bold font-playfair text-white mb-2">
              Inquiry Sent via WhatsApp!
            </h3>
            
            <p className="text-gray-300 font-light text-xs sm:text-sm leading-relaxed max-w-xs mb-6">
              Your inquiry details have been structured and forwarded to us on WhatsApp. We will connect with you shortly.
            </p>

            <button
              onClick={() => setSuccess(false)}
              className="text-gold hover:text-white text-xs uppercase tracking-widest font-semibold underline decoration-gold/40 hover:decoration-white transition-colors"
            >
              Submit Another Message
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InquiryForm;
