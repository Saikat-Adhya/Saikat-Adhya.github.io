import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
  return (
    <section className="py-20 px-6 sm:px-8 bg-tertiary">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Resume</h2>
        <p className="text-secondary mb-8 max-w-2xl mx-auto">
          Download my resume to learn more about my skills, experience, and qualifications.
        </p>
        <motion.a
          href="/Saikat_Adhya_Resume_2025.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-[#915eff] text-white px-6 py-3 rounded-lg font-medium"
        >
          <FaDownload />
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Resume;