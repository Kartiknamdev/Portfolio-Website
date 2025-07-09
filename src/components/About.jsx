import { motion, AnimatePresence } from 'framer-motion';
import { UserCircle, Palette, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const GalleryModal = ({ isOpen, onClose, title, type }) => {
  if (!isOpen) return null;

  const photographyImages = [
    "20230201_174502.jpg",
    "20230222_184211.jpg",
    "20240122_181119.jpg",
    "20240908_182601.jpg",
    "20241228_165809.jpg",
    "20250109_165058.jpg",
    "20250626_125233.jpg",
    "IMG_20200129_063006.jpg",
    "Picsart_24-01-25_20-32-03-538.jpg",
    "PXL_20210916_183701748.NIGHT.jpg",
    "PXL_20220509_190612122.NIGHT.jpg",
    "PXL_20220509_191235768.NIGHT.jpg",
    "PXL_20220513_185151469.NIGHT.jpg",
    "PXL_20220526_184442987.NIGHT.jpg",
    "PXL_20220526_184510765.NIGHT.jpg",
    "PXL_20220526_184911819.NIGHT.jpg",
    "PXL_20220526_184921821.NIGHT.jpg",
    "PXL_20220526_185241572.NIGHT.jpg",
    "Snapchat-1260504287.jpg",
    "VideoCapture_20231122-172852 (2).jpg",
    "VideoCapture_20231207-095443.jpg"
  ];

  const paintingImages = [
    
    "Snapchat-1015517973.jpg",
    "Snapchat-1636245969.jpg",
    "Snapchat-222812791.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const images = type === "photography" ? photographyImages : paintingImages;
      return (prevIndex + 1) % images.length;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const images = type === "photography" ? photographyImages : paintingImages;
      return (prevIndex - 1 + images.length) % images.length;
    });
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const images = type === "photography" ? photographyImages : paintingImages;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-4xl p-3 sm:p-6 rounded-2xl bg-gray-900/90 backdrop-blur-xl border border-white/10 shadow-2xl mx-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

        <div className="relative flex items-center justify-center">
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-4 p-2 sm:p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
          </button>

          <motion.img
            key={currentIndex}
            src={`/Photos/${type}/${images[currentIndex]}`}
            alt={images[currentIndex]}
            className="rounded-lg shadow-lg max-h-[70vh]"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-4 p-2 sm:p-3 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
          >
            <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
          </button>
        </div>

        <p className="text-center text-white/70 mt-4">
          {currentIndex + 1} / {images.length}
        </p>

        <div className="mt-6 w-full overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex gap-2 min-w-max px-2">
            {images.map((image, index) => (
              <img
                key={image}
                src={`/Photos/${type}/${image}`}
                alt={image}
                className={`w-16 h-16 rounded-lg cursor-pointer border-2 flex-shrink-0 ${
                  index === currentIndex ? "border-white" : "border-transparent"
                } hover:scale-105 transition-transform duration-300`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const preloadImages = (images) => {
  images.forEach((image) => {
    const img = new Image();
    img.src = `/Photos/photography/${image}`;
  });
};

export default function About() {
  const { accentObj } = useTheme();
  const [modalContent, setModalContent] = useState({ isOpen: false, type: null, title: '' });

  const openModal = (type, title) => {
    if (type === 'photography') {
      preloadImages([
        "20230201_174502.jpg",
        "20230222_184211.jpg",
        "20240122_181119.jpg",
        "20240908_182601.jpg",
        "20241228_165809.jpg",
        "20250109_165058.jpg",
        "20250626_125233.jpg",
        "IMG_20200129_063006.jpg",
        "Picsart_24-01-25_20-32-03-538.jpg",
        "PXL_20210916_183701748.NIGHT.jpg",
        "PXL_20220509_190612122.NIGHT.jpg",
        "PXL_20220509_191235768.NIGHT.jpg",
        "PXL_20220513_185151469.NIGHT.jpg",
        "PXL_20220526_184442987.NIGHT.jpg",
        "PXL_20220526_184510765.NIGHT.jpg",
        "PXL_20220526_184911819.NIGHT.jpg",
        "PXL_20220526_184921821.NIGHT.jpg",
        "PXL_20220526_185241572.NIGHT.jpg",
        "Snapchat-1260504287.jpg",
        "VideoCapture_20231122-172852 (2).jpg",
        "VideoCapture_20231207-095443.jpg"
      ]);
    }
    setModalContent({ isOpen: true, type, title });
  };

  const closeModal = () => {
    setModalContent({ isOpen: false, type: null, title: '' });
  };

  return (
    <section id="about" className="py-24 relative">
      <AnimatePresence>
        <GalleryModal
          isOpen={modalContent.isOpen}
          onClose={closeModal}
          title={modalContent.title}
          type={modalContent.type}
        />
      </AnimatePresence>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Left: Glass Card Bio */}
        <motion.div
          className="glass-card flex-1 p-8 md:p-12 rounded-3xl shadow-2xl relative z-10"
          style={{
            background: `linear-gradient(120deg, rgba(255,255,255,0.38) 0%, rgba(255,255,255,0.22) 100%)`,
            boxShadow: '0 8px 32px 0 rgba(31,38,135,0.18)',
            border: '1.5px solid rgba(255,255,255,0.18)',
            backdropFilter: 'blur(18px) saturate(160%)',
            WebkitBackdropFilter: 'blur(18px) saturate(160%)',
            borderRadius: '2rem',
            opacity: 0.96,
            zIndex: 10,
          }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="flex flex-col items-center mb-6">
            <UserCircle className={`h-16 w-16 ${accentObj.text} mb-2`} />
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--heading)] heading-shadow mb-2">Hi, I'm Kartik Namdev</h2>
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-white/20 text-[var(--heading)] mb-4" style={{backdropFilter:'blur(8px)'}}>Full Stack Developer & Creator</span>
          </div>
          <p className="text-lg text-[var(--text-main)] leading-relaxed mb-4 text-center">
            I love building beautiful, functional web apps and solving real-world problems with code. My background spans Python, Java, MERN stack, and C/C++. I thrive on learning, collaborating, and turning ideas into reality.
          </p>
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-500 font-medium text-xs">Web Dev</span>
            <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-500 font-medium text-xs">UI/UX</span>
            <span className="px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-500 font-medium text-xs">Problem Solver</span>
            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-500 font-medium text-xs">Team Player</span>
          </div>
        </motion.div>
        {/* Right: Hobbies/Highlights */}
        <motion.div
          className="flex-1 flex flex-col gap-6"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          {/* Nature Photography */}
          <motion.div
            className="glass-card flex items-center gap-5 p-6 rounded-2xl shadow-lg transition-all cursor-pointer hover:scale-[1.03] group"
            style={{backdropFilter:'blur(12px)', background:'linear-gradient(120deg, rgba(236,72,153,0.18) 0%, rgba(255,255,255,0.12) 100%)', border:'1.2px solid rgba(236,72,153,0.18)'}}
            onClick={() => openModal('photography', 'Nature Photography')}
            whileHover={{ boxShadow: '0 8px 32px -8px rgba(236,72,153,0.3)' }}
          >
            <div className="bg-pink-100/60 rounded-full p-3 mr-2 group-hover:shadow-pink-200 transition-shadow">
              <Camera className="h-9 w-9 text-white" style={{filter: 'drop-shadow(0 1px 4px #e5e7eb) brightness(1.2)'}} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-pink-500 heading-shadow mb-1">Nature Photography</h4>
              <p className="text-[var(--text-main)] text-sm">Capturing the beauty of the world fuels my creativity and attention to detail.</p>
            </div>
          </motion.div>

          {/* Canvas Painting */}
          <motion.div
            className="glass-card flex items-center gap-5 p-6 rounded-2xl shadow-lg transition-all cursor-pointer hover:scale-[1.03] group"
            style={{backdropFilter:'blur(12px)', background:'linear-gradient(120deg, rgba(34,197,94,0.18) 0%, rgba(255,255,255,0.12) 100%)', border:'1.2px solid rgba(34,197,94,0.18)'}}
            onClick={() => openModal('painting', 'Canvas Paintings')}
            whileHover={{ boxShadow: '0 8px 32px -8px rgba(34,197,94,0.3)' }}
          >
            <div className="bg-green-100/60 rounded-full p-3 mr-2 group-hover:shadow-green-200 transition-shadow">
              <Palette className="h-9 w-9 text-white" style={{filter: 'drop-shadow(0 1px 4px #e5e7eb) brightness(1.2)'}} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-500 heading-shadow mb-1">Canvas Painting</h4>
              <p className="text-[var(--text-main)] text-sm">Exploring colors on canvas lets me relax and express myself artistically.</p>
            </div>
          </motion.div>

          {/* Profile */}
          <div className="glass-card flex items-center gap-5 p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.03] group" style={{backdropFilter:'blur(12px)', background:'linear-gradient(120deg, rgba(251,191,36,0.18) 0%, rgba(255,255,255,0.12) 100%)', border:'1.2px solid rgba(251,191,36,0.18)'}}>
            <div className="bg-yellow-100/60 rounded-full p-3 mr-2 group-hover:shadow-yellow-200 transition-shadow">
              <UserCircle className="h-9 w-9 text-white" style={{filter: 'drop-shadow(0 1px 4px #e5e7eb) brightness(1.2)'}} />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-yellow-500 heading-shadow mb-1">Profile</h4>
              <p className="text-[var(--text-main)] text-sm">Always eager to learn, adapt, and contribute to innovative projects. I love new challenges!</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
