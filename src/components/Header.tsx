import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
              <img
                src="/images/profile.jpg"
                alt="Konangi Gopi"
                className="w-40 h-40 mx-auto bg-white rounded-full flex items-center justify-center shadow-2xl object-cover border-4 border-purple-300"
              />
            </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Konangi Gopi
          </h1>
          
          <p className="text-2xl md:text-3xl mb-8 text-purple-100">
            Computer Science Student | Web Developer | AI/ML Enthusiast
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-purple-50">
            Third-year B.Tech Computer Science student at KL University with a solid foundation in core data structures, Python, and problem-solving. Passionate about developing scalable software solutions.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="https://github.com/konangiGopi200516"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-purple-200 transition-colors"
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gopi-konangi-3ba06235b/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-purple-200 transition-colors"
            >
              <FaLinkedin size={30} />
            </motion.a>
            <motion.a
              href="mailto:gopikonangi0001@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-purple-200 transition-colors"
            >
              <FaEnvelope size={30} />
            </motion.a>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors shadow-lg flex items-center mx-auto"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/FINAL RESUME.pdf';
              link.download = 'Konangi_Gopi_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <FaDownload className="mr-2" />
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
