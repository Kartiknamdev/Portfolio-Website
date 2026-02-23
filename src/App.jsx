import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import WhyMe from './components/WhyMe';
import ThemeToggleMenu from './components/ThemeToggleMenu';
import FloatingSocialBar from './components/FloatingSocialBar';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import HexagonBackground from './components/HexagonBackground';
import { useTheme } from './context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const { theme, accentObj } = useTheme();

  return (
    <div className="overflow-x-hidden w-full relative">
      <CustomCursor />
      {/* Main Dynamic Background */}
      <motion.div
        className="relative min-h-screen w-full overflow-hidden"
        initial={{ background: theme.bgGradient || theme.player }}
        animate={{ background: theme.bgGradient || theme.player }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <HexagonBackground />
        {/* Animated fog/mist effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 animate-fog opacity-[0.25]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5" />
          </div>
          <div className="absolute inset-0 animate-fog opacity-[0.2]" style={{ animationDelay: '-5s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5" />
          </div>
          <div className="absolute inset-0 animate-mist">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent dark:via-white/[0.02]" />
          </div>
        </div>

        {/* Full-width gradient overlay for depth */}
        <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/60 pointer-events-none" />

        {/* Extended background gradient for bottom */}
        <motion.div
          className="fixed bottom-0 inset-x-0 h-[80vh] bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none"
          animate={{ opacity: 0.9 }}
        />

        {/* Glassmorphism side panels - desktop only */}
        <div className="hidden md:block fixed top-0 left-0 h-full w-20 z-10 pointer-events-none">
          <div style={{
            height: '100%',
            width: '100%',
            background: 'linear-gradient(120deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)',
            borderRight: '1px solid rgba(255,255,255,0.08)',
          }} />
        </div>
        <div className="hidden md:block fixed top-0 right-0 h-full w-20 z-10 pointer-events-none">
          <div style={{
            height: '100%',
            width: '100%',
            background: 'linear-gradient(300deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 100%)',
            borderLeft: '1px solid rgba(255,255,255,0.08)',
          }} />
        </div>

        <div className="relative z-10">
          <Navbar />
          <Hero />
          {/* Negative margin pulls the main content up, overlapping the Hero container's scroll track. 
              This eliminates dead scroll space so the snap works perfectly 1-viewport high. */}
          <main className="px-4 md:px-8 mx-auto w-[95%] md:w-[90%] max-w-7xl -mt-[50vh] md:-mt-[100vh] relative z-20">
            <div className="space-y-16 md:space-y-24">
              <Projects />
              <Resume />
              <Skills />
              <WhyMe />
            </div>
          </main>
          <ThemeToggleMenu />
          <FloatingSocialBar />
          <ScrollToTop />
        </div>

        {/* Dynamic Global Background Orbs - Lightweight */}
        <motion.div
          className="fixed -top-20 -left-20 w-96 h-96 rounded-full blur-[80px] pointer-events-none z-0 opacity-40"
          animate={{ backgroundColor: theme.player }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] pointer-events-none z-0 opacity-30"
          animate={{ backgroundColor: theme.accent }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed top-1/2 left-1/2 w-80 h-80 rounded-full blur-[100px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2 opacity-20"
          animate={{ backgroundColor: theme.bg }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>
    </div>
  );
}

export default App;
