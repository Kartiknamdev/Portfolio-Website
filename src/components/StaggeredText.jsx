import { motion } from 'framer-motion';

export default function StaggeredText({ text, className }) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.04, delayChildren: 0.1 },
        },
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: "100%", // Slide up from fully below the line
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            className={className}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {words.map((word, index) => (
                <span
                    key={index}
                    className="inline-block overflow-hidden relative align-bottom pb-1"
                    style={{ marginRight: "0.25em" }}
                >
                    <motion.span
                        className="inline-block origin-bottom"
                        variants={child}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </motion.div>
    );
}
