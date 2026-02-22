import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { UserCircle, Terminal, Camera, Palette, X } from 'lucide-react';

export default function Hero() {
  const { accentObj } = useTheme();
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const floatingAnimation = {
    y: ['-10%', '10%'],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  };

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsAboutOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isAboutOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isAboutOpen]);

  return (
    <>
      <section className="min-h-[90vh] md:min-h-screen flex items-center justify-center relative overflow-hidden py-8 md:py-0">
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
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-purple-400/20 via-blue-300/20 to-transparent rounded-full blur-3xl pointer-events-none"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />

        {/* Tech stack floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 hidden lg:block"
          animate={floatingAnimation}
        >
          <div className="p-4 bg-white/10 backdrop-blur-xl rounded-xl shadow-xl border border-white/20">
            <div className="text-3xl">🎯</div>
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 right-10 hidden lg:block"
          animate={floatingAnimation}
          transition={{ delay: 0.5 }}
        >
          <div className="p-4 bg-white/10 backdrop-blur-xl rounded-xl shadow-xl border border-white/20">
            <div className="text-3xl">💻</div>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 text-center md:text-left p-6 md:p-12 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/20 mb-6"
          >
            <p className="text-sm font-semibold tracking-wider text-green-300 uppercase">Nice to meet you</p>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-md"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span className="inline-block relative">
              <span className="relative z-10 text-white">Kartik Namdev</span>
              <motion.span
                className="absolute bottom-1 left-0 w-full h-3 bg-gradient-to-r from-blue-500/50 to-purple-500/50 -z-10 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 1 }}
              />
            </span>
          </motion.h1>

          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6 text-white/90 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Final Year CSE Cyber Student
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl mx-auto md:mx-0 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Hey, I'm always eager to learn new technologies and bring ideas to life. Let's shake hands with me.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              onClick={() => setIsAboutOpen(true)}
              className="group px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 font-bold rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-300 ease-in-out text-base relative overflow-hidden"
            >
              <span className="relative z-10">More About Me</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </button>
            <a
              href="/Kartik namdev Resume Feb.pdf"
              download
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold rounded-xl shadow-lg transition-all duration-300 ease-in-out text-base relative overflow-hidden text-center"
            >
              <span className="relative z-10">Download My Resume</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </a>
            <a
              href="#projects"
              className="group px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold rounded-xl shadow-lg transition-all duration-300 ease-in-out text-base relative overflow-hidden text-center"
            >
              <span className="relative z-10">Explore my projects</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Simplified Slide-in About Modal for Performance */}
      <AnimatePresence>
        {isAboutOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md will-change-opacity"
            onClick={() => setIsAboutOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300, mass: 0.8 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] bg-gray-900 shadow-2xl border border-white/10 text-left flex flex-col md:flex-row group"
              style={{
                willChange: "transform, opacity",
                transform: "translateZ(0)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Gradient Blob */}
              <div className="absolute -top-32 -left-32 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={() => setIsAboutOpen(false)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/5 hover:bg-white/20 text-white/70 hover:text-white transition-all backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image & Core Bio */}
              <div
                className="flex-1 p-8 sm:p-10 relative z-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10"
                style={{ transform: "translateZ(40px)" }} // 3D pop effect
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="p-1 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 shadow-xl">
                    <img src="/profilepic.jpg" alt="Kartik" className="w-20 h-20 rounded-full object-cover border-2 border-transparent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Kartik Namdev</h3>
                    <p className="text-sm font-medium text-purple-300">A Guy who loves to Code & Art</p>
                  </div>
                </div>

                <p className="text-white/80 leading-relaxed font-light text-[15px] mb-6">
                  I love building beautiful, functional web apps and solving real-world problems with code. My background spans <span className="text-white font-medium">Python, Java, MERN stack, and C/C++</span>. I thrive on learning, collaborating, and turning ideas into reality.
                </p>

                <div className="flex gap-2 flex-wrap">
                  {['Web Dev', 'UI/UX', 'Problem Solver', 'Team Player'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/90 text-xs font-medium uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Mini Interests */}
              <div
                className="flex-1 p-8 sm:p-10 relative z-10 bg-black/20 flex flex-col justify-center gap-6"
                style={{ transform: "translateZ(20px)" }}
              >
                <h4 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em] mb-2">Beyond Coding</h4>

                <div className="flex items-start gap-4 group/item cursor-default">
                  <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 group-hover/item:scale-110 group-hover/item:bg-pink-500/20 transition-all border border-pink-500/20">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Nature Photography</h5>
                    <p className="text-white/50 text-sm font-light">Capturing the beauty of the world fuels my creativity.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item cursor-default">
                  <div className="p-3 rounded-xl bg-green-500/10 text-green-400 group-hover/item:scale-110 group-hover/item:bg-green-500/20 transition-all border border-green-500/20">
                    <Palette className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Canvas Painting</h5>
                    <p className="text-white/50 text-sm font-light">Exploring colors to relax and express myself artistically.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group/item cursor-default">
                  <div className="p-3 rounded-xl bg-yellow-500/10 text-yellow-400 group-hover/item:scale-110 group-hover/item:bg-yellow-500/20 transition-all border border-yellow-500/20">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium mb-1">Tech Innovation</h5>
                    <p className="text-white/50 text-sm font-light">Always eager to learn, adapt, and contribute to new ideas.</p>
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
// Add to your global CSS (index.css or App.css):
// .glass-card { transition: background 0.5s, box-shadow 0.5s; }
