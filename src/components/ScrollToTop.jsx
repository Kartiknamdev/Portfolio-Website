import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const { accentObj } = useTheme();

    // Show button when page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            const whyMeSection = document.getElementById('whyme');
            if (whyMeSection) {
                const rect = whyMeSection.getBoundingClientRect();
                // Show button when the top of the 'Why Me' section enters the viewport
                if (rect.top <= window.innerHeight) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            } else {
                // Fallback to absolute scroll position if section not found
                if (window.scrollY > 500) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 50, scale: 0.5, x: "-50%" }}
                    animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                    exit={{ opacity: 0, y: 50, scale: 0.5, x: "-50%" }}
                    transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-1/2 md:bottom-10 z-[100] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full shadow-2xl backdrop-blur-xl border border-white/20 group hover:border-white/50 transition-all duration-300"
                    style={{ background: 'rgba(20, 20, 20, 0.6)' }}
                    aria-label="Scroll to top"
                >
                    {/* Subtle inside glow matching accent color */}
                    <div
                        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{ background: accentObj.gradient || accentObj.from || '#8b5cf6' }}
                    />

                    <ArrowUp className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
