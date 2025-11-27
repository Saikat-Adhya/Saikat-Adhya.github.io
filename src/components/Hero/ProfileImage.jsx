import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const images = [
  "Profile.jpg",
  "Profile3.jpg",
  "photo1.png",
  // Add more images if you want — filenames unchanged
];

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 150 : -150,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (dir) => ({
    x: dir > 0 ? -150 : 150,
    opacity: 0,
    scale: 0.9,
  }),
};

const ProfileImage = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoRef = useRef(null);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    autoRef.current = setTimeout(() => next(), 3500);
    return () => clearTimeout(autoRef.current);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1 flex justify-center items-center relative"
    >
      {/* Decorative animated background layer (behind everything) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating gradient blob top-left */}
        <motion.div
          animate={{ y: [0, -18, 0], x: [0, 10, 0], rotate: [0, 6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-12 -top-8 w-44 h-44 rounded-full blur-3xl opacity-60"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(145,94,255,0.32), rgba(145,94,255,0.06) 40%, transparent 60%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Floating gradient blob bottom-right */}
        <motion.div
          animate={{ y: [0, 22, 0], x: [0, -18, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-8 -bottom-6 w-56 h-56 rounded-full blur-3xl opacity-55"
          style={{
            background:
              "radial-gradient(circle at 70% 80%, rgba(255,110,165,0.28), rgba(145,94,255,0.06) 35%, transparent 65%)",
            mixBlendMode: "screen",
          }}
        />

        {/* Subtle twinkling particles */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              animate={{
                opacity: [0.15, 0.6, 0.15],
                scale: [0.9, 1.15, 0.9],
              }}
              transition={{
                delay: i * 0.6,
                duration: 3.6 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bg-white rounded-full"
              style={{
                width: 4 + (i % 3) * 2,
                height: 4 + (i % 3) * 2,
                left: `${10 + i * 12}%`,
                top: `${8 + (i * 9) % 60}%`,
                opacity: 0.2,
                filter: "blur(0.6px)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Main circular slider container (keeps original layout) */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 z-10">
        {/* Outer subtle glowing halo (pulsing) */}
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.95, 0.6] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-2 rounded-full"
          style={{
            boxShadow: "0 0 40px 8px rgba(145,94,255,0.06)",
            borderRadius: "9999px",
            pointerEvents: "none",
          }}
        />

        {/* Rotating dashed border (keeps your original vibe) */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-4 border-dashed border-[#915eff] rounded-full"
        />

        {/* Image Slider */}
        <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-[#915eff] bg-black">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded-full"
              style={{
                backgroundImage: `url('${import.meta.env.BASE_URL}${images[index]}')`,
              }}
            />
          </AnimatePresence>
        </div>

        {/* Animated halo ring that grows/fades around the image occasionally */}
        <motion.div
          aria-hidden
          initial={{ scale: 0.9, opacity: 0.12 }}
          animate={{ scale: [0.95, 1.12, 0.95], opacity: [0.12, 0.28, 0.12] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            border: "6px solid rgba(145,94,255,0.06)",
            boxShadow: "0 0 60px 6px rgba(145,94,255,0.04)",
          }}
        />

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/40 hover:bg-black/60 p-2 rounded-full"
          aria-label="Previous"
        >
          <HiChevronLeft className="text-white text-xl" />
        </button>

        <button
          onClick={next}
          className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/40 hover:bg-black/60 p-2 rounded-full"
          aria-label="Next"
        >
          <HiChevronRight className="text-white text-xl" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-[#915eff]" : "bg-white/30"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;
