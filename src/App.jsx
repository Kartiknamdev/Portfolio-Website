import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggleMenu from './components/ThemeToggleMenu';
import { useTheme } from './context/ThemeContext';
import './App.css';

function App() {
  const { accentObj } = useTheme();
  return (
    <div className="overflow-hidden max-w-[100vw]">
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Animated fog/mist effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 animate-fog opacity-[0.15]">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5" />
          </div>
          <div className="absolute inset-0 animate-fog opacity-[0.15]" style={{ animationDelay: '-5s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent dark:via-white/5" />
          </div>
          <div className="absolute inset-0 animate-mist">
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent dark:via-white/[0.02]" />
          </div>
        </div>

        {/* Full-width gradient overlay */}
        <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none" />
        
        {/* Extended background gradient for bottom */}
        <div className="fixed bottom-0 inset-x-0 h-[70vh] bg-gradient-to-t from-gray-900 via-gray-900/90 to-transparent pointer-events-none" />

        {/* Glassmorphism side panels - desktop only */}
        <div className="hidden md:block fixed top-0 left-0 h-full w-20 z-10 pointer-events-none">
          <div style={{
            height: '100%',
            width: '100%',
            background: 'linear-gradient(120deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 100%)',
            borderRight: '1.5px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            opacity: 0.85,
          }} />
        </div>
        <div className="hidden md:block fixed top-0 right-0 h-full w-20 z-10 pointer-events-none">
          <div style={{
            height: '100%',
            width: '100%',
            background: 'linear-gradient(300deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.10) 100%)',
            borderLeft: '1.5px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            opacity: 0.85,
          }} />
        </div>

        <div className="relative z-10">
          <Navbar />
          <main className="px-4 md:px-8 mx-auto w-[95%] md:w-[90%] max-w-7xl">
            <Hero />
            <div className="space-y-16 md:space-y-24">
              <About />
              <Projects />
              <Resume />
              <Skills />
              <Contact />
            </div>
          </main>
          <Footer />
          <ThemeToggleMenu />
        </div>

        {/* Global background circles */}
        <div className="fixed -top-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-200 via-green-200 to-transparent rounded-full opacity-30 blur-3xl pointer-events-none z-0" />
        <div className="fixed bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-purple-200 via-blue-100 to-transparent rounded-full opacity-20 blur-3xl pointer-events-none z-0" />
        <div className="fixed top-1/2 left-1/2 w-64 h-64 bg-green-200 rounded-full opacity-10 blur-3xl pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}

export default App;
