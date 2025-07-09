import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function Hero() {
  const { accentObj } = useTheme();
  
  const floatingAnimation = {
    y: ['-10%', '10%'],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'easeInOut'
    }
  };

  return (
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
          className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-green-400/10 to-blue-400/10 backdrop-blur-xl border border-white/20 mb-6"
        >
          <p className="text-sm font-semibold text-green-400">Nice to meet you</p>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-[var(--heading)]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm{" "}
          <span className="inline-block relative">
            <span className="relative z-10">Kartik Namdev</span>
            <motion.span
              className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-green-400/30 to-blue-400/30 -z-10"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </span>
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          4th Year CSE Cyber Student
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-[var(--text-main)] mb-8 max-w-2xl mx-auto md:mx-0"
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
          <a
            href="/Kartik_Namdev_CV.pdf"
            download
            className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white font-bold rounded-xl shadow-lg transition-all duration-300 ease-in-out text-base relative overflow-hidden"
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
            className="group px-8 py-4 bg-transparent border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold rounded-xl shadow-lg transition-all duration-300 ease-in-out text-base relative overflow-hidden"
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
  );
}
// Add to your global CSS (index.css or App.css):
// .glass-card { transition: background 0.5s, box-shadow 0.5s; }
