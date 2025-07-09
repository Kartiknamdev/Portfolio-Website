import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Globe, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { accentObj } = useTheme();

  const socialLinks = [
    { icon: Github, href: "https://github.com/Kartiknamdev", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/kartikknamdev", label: "LinkedIn" },
    { icon: X, href: "https://x.com/KartikN69809009", label: "X (Twitter)" },
    { icon: Mail, href: "mailto:kartikk12na@gmail.com", label: "Email" },
  ];

  return (
    <motion.footer 
      className="relative overflow-hidden pt-16" /* Added pt-16 to create space for the gradient divider */
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Gradient divider at top of footer */}
      <div className="absolute top-0 left-0 w-full h-[2px]">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-1000 via-gray-950/100 to-gray-950/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 via-green-300/10 to-purple-500/10" />
      
      {/* Frosted glass backdrop overlay */}
      <div className="absolute inset-0 backdrop-blur-[80px] opacity-30" />
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 via-green-300/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-transparent rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo/Brand Section */}
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-[0_2px_3px_rgba(255,255,255,0.1)]">Kartik Namdev</h3>
            <p className="text-white/70">UI Designer & Developer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 bg-white/10 backdrop-blur-lg rounded-full transition-all duration-300 hover:shadow-[0_8px_32px_-8px_rgba(255,255,255,0.4),0_0_6px_rgba(255,255,255,0.2)] border border-white/20 overflow-hidden"
                whileHover={{ 
                  y: -3, 
                  scale: 1.05,
                  boxShadow: `0 0 20px ${accentObj.shadowColor}`,
                  borderColor: `${accentObj.borderColor}40` 
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon 
                  className="w-5 h-5 text-white group-hover:text-white transition-colors relative z-10" 
                  style={{
                    filter: 'drop-shadow(0 1px 3px rgba(255, 255, 255, 0.4))'
                  }}
                />
                <span className="sr-only">{social.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100"
                  initial={false}
                  animate={{ x: ['0%', '200%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <p className="text-white/80 font-light">&copy; {currentYear} All rights reserved.</p>
            {/* <a 
              href="#"
              className="inline-block mt-2 text-sm text-white/60 hover:text-white hover:underline transition-colors"
            >
              <Globe className="inline-block w-4 h-4 mr-1" />
              kartiknamdev.dev
            </a> */}
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div 
          className="mt-8 pt-8 border-t border-white/10"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative backdrop-blur-sm bg-white/5 px-6 py-4 rounded-lg overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
              initial={false}
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <p className="text-center text-sm text-white/70 relative z-10">
              Made with <span className="text-pink-400">❤️</span> using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
