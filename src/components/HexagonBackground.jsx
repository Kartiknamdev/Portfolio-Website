import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function HexagonBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { accentObj } = useTheme();

    // Tie the background position to the user's scroll for a sweet Parallax effect
    const { scrollY } = useScroll();
    const bgPositionY = useTransform(scrollY, [0, 5000], [0, -500]);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    // Standard perfectly tiling Hexagon pattern SVG
    const hexPattern = `data:image/svg+xml,%3Csvg width='28' height='49' viewBox='0 0 28 49' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ffffff' fill-opacity='0.4' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

            {/* Default faint baseline grid */}
            <motion.div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `url("${hexPattern}")`,
                    backgroundSize: '4px',
                    backgroundPosition: 'center',
                    backgroundPositionY: bgPositionY
                }}
            />

            {/* Reactive cursor spotlight grid */}
            <motion.div
                className="absolute inset-0 opacity-80 mix-blend-overlay transition-opacity duration-300"
                style={{
                    backgroundImage: `url("${hexPattern}")`,
                    backgroundSize: '4px',
                    backgroundPosition: 'center',
                    backgroundPositionY: bgPositionY,
                    maskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
                    WebkitMaskImage: `radial-gradient(350px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
                }}
            />

            {/* Tinted color glow exactly on the mouse cursor */}
            <motion.div
                className="absolute w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px] opacity-[0.15] pointer-events-none"
                style={{
                    left: mousePosition.x,
                    top: mousePosition.y,
                    background: accentObj.color || accentObj.from || accentObj.to || '#ec4899',
                }}
                transition={{ type: 'tween', ease: 'linear', duration: 0 }}
            />
        </div>
    );
}
