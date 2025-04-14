import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_d0ubp3d',
        'template_yqkh0e6',
        formRef.current,
        'J0JtcEs3cy2F7Qlw7'
      );
      setSuccess(true);
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-tertiary border border-[#915eff] focus:outline-none focus:ring-2 focus:ring-[#915eff]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 rounded-lg bg-tertiary border border-[#915eff] focus:outline-none focus:ring-2 focus:ring-[#915eff]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg bg-tertiary border border-[#915eff] focus:outline-none focus:ring-2 focus:ring-[#915eff]"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#915eff] text-white py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
              {success && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
            </form>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-secondary">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p>
                Feel free to reach out to me through the contact form or connect with
                me on social media. I'm always open to discussing new projects,
                creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/Saikat-Adhya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-[#915eff] transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/saikat-adhya-53b7452a9/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-[#915eff] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/saikatadhya2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl hover:text-[#915eff] transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;