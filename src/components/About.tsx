import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h3 className="text-3xl font-semibold mb-4 text-gray-800">
              Building Scalable Software Solutions
            </h3>
            <p className="text-lg mb-4 leading-relaxed">
              I'm a motivated third-year B.Tech Computer Science student at KL University with a solid foundation in core data structures, Python, and problem-solving. 
              My journey in tech started with a curiosity about how things work on the internet, and has evolved into a passion for developing scalable software solutions.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              I'm continuously improving my algorithmic thinking and web development skills. When I'm not coding, you'll find me 
              exploring new technologies, contributing to open-source projects, or enhancing my knowledge through virtual internships and certifications.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-600 mb-2">Programming</h4>
                <p className="text-sm text-gray-600">Python, C, C++</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-600 mb-2">Web Technologies</h4>
                <p className="text-sm text-gray-600">HTML, CSS, React</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-600 mb-2">Core Skills</h4>
                <p className="text-sm text-gray-600">Data Structures, Problem Solving</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-600 mb-2">Interests</h4>
                <p className="text-sm text-gray-600">Web Development</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Career Objective</h4>
              <p className="text-gray-600">
                Motivated third-year B.Tech Computer Science student at KL University with a solid foundation in core data structures, Python, and problem-solving. 
                Passionate about developing scalable software solutions and continuously improving algorithmic thinking and web development skills.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
              <h4 className="font-semibold text-lg mb-3 text-gray-800">Personal Philosophy</h4>
              <p className="text-gray-600">
                "Continuous learning and problem-solving are the keys to innovation. 
                I believe in building elegant solutions that not only work efficiently but also make a positive impact on society."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
