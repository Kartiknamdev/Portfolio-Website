import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import emailjs from 'emailjs-com';

export default function Contact() {
  const { accentObj } = useTheme();
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        'service_flxkev8', // Replace with your EmailJS service ID
        'template_d1rr7de', // Replace with your EmailJS template ID
        {
          email: formData.email,
          message: formData.message,
        },
        'JvSNswa-UBMnb5hkU' // Replace with your EmailJS user ID
      );
      console.log("Form data submitted:", formData);
      setSubmitStatus('success');
      setFormData({ email: '', message: '' });
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 text-[var(--text-main)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className={`text-4xl md:text-5xl font-bold text-center mb-12 text-[var(--heading)] heading-shadow`}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>

        {/* Glassmorphic Contact Card */}
        <motion.div
          className="relative flex flex-col items-center justify-center glass-card rounded-3xl p-10 border border-white/20 shadow-2xl backdrop-blur-3xl bg-black/50 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
          style={{ boxShadow: `0 12px 48px 0 ${accentObj.from}, 0 0 30px 0 ${accentObj.to}` }}
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Accent Glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full opacity-30 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-20 blur-2xl pointer-events-none" style={{ background: accentObj.gradient || accentObj.color }} />
          <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-6 z-10">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--heading)] mb-1">Your Email</label>
              <div className="relative">
                <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-white/10 border border-white/10 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] sm:text-base transition-colors duration-300 text-[var(--text-main)] backdrop-blur-md"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--heading)] mb-1">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows="4" 
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full px-3 py-3 bg-white/10 border border-white/10 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-[var(--accent)] sm:text-base transition-colors duration-300 text-[var(--text-main)] backdrop-blur-md"
                placeholder="Your message..."
              />
            </div>

            <div className="text-center">
              <motion.button 
                type="submit" 
                disabled={isSubmitting}
                className={`inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-xl text-white bg-gradient-to-r ${accentObj.from} ${accentObj.to} shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--accent)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out transform hover:scale-105`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" /> Send Message
                  </>
                )}
              </motion.button>
            </div>
            {submitStatus === 'success' && (
              <p className="text-center text-green-400 mt-4">Message sent successfully! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-red-400 mt-4">Something went wrong. Please try again later.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
