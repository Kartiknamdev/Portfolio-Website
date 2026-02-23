import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const { accentObj } = useTheme();

    useEffect(() => {
        // Hide default cursor on body
        document.body.style.cursor = 'none';

        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            // Check if hovering over clickable elements or specific classes
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer') ||
                target.closest('.group') // Often used for our interactive cards
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.body.style.cursor = 'auto'; // Reset on unmount
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            width: 16,
            height: 16,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            mixBlendMode: "difference"
        },
        hover: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            width: 48,
            height: 48,
            backgroundColor: accentObj.bg || "rgba(255, 255, 255, 0.1)",
            border: `2px solid ${accentObj.text ? accentObj.text.replace('text-', '') : 'white'}`, // Extract color from tailwind class roughly or fallback
            mixBlendMode: "normal"
        }
    };

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
            />
            {/* Tiny inner dot that stays sharp */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[10000] hidden md:block mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 0 : 1
                }}
                transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            />
        </>
    );
}
