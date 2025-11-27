import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex-1"
    >
      <h1 className="text-5xl sm:text-6xl font-bold text-primary-content">
        Hi, I'm <span className="text-[#915eff]">Saikat Adhya</span>
      </h1>
      <p className="text-secondary text-lg mt-4 max-w-lg">
        A passionate MERN Stack Developer focused on creating interactive and user-friendly web applications.
        <br />
        Full-Stack Enthusiast | Tech Innovator | MCA'25
      </p>
      <div className="flex gap-4 mt-8">
        <motion.a
          href="/Saikat_Adhya_Resume_2025.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-[#915eff] text-white px-6 py-3 rounded-lg font-medium"
        >
          <FaDownload />
          Download CV
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 border-2 border-[#915eff] text-[#915eff] px-6 py-3 rounded-lg font-medium hover:bg-[#915eff] hover:text-white transition-colors"
        >
          <FaEnvelope />
          Contact Me
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HeroContent;