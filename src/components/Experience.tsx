import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "AI & ML Virtual Intern",
      company: "AICTE-EduSkills",
      location: "Virtual",
      period: "Oct – Dec 2025",
      responsibilities: [
        "Participated in a virtual internship focused on foundational and practical AI & Machine Learning skills",
        "Used data preprocessing, model training, and evaluation techniques to build predictive models",
        "Implemented AI-driven solutions and explored real-world machine learning applications",
        "Strengthened understanding of algorithms, model optimization, and ethical AI practices",
        "Trained under the AICTE-EduSkills program supported by Google for Developers"
      ],
      technologies: ["Python", "Machine Learning", "Data Preprocessing", "Model Training", "AI Ethics"]
    },
    {
      title: "Cyber Security Virtual Intern",
      company: "ShadowFox",
      location: "Virtual",
      period: "Sept 2025",
      responsibilities: [
        "Gained hands-on experience in cybersecurity, including threat analysis and vulnerability assessment",
        "Worked on system security, network protection, and identifying cyber threats",
        "Applied industry-standard security practices and tools to analyze vulnerabilities",
        "Enhanced system security and ensured data protection",
        "Completed practical labs simulating real-world security scenarios"
      ],
      technologies: ["Cybersecurity", "Threat Analysis", "Network Security", "Vulnerability Assessment", "Security Tools"]
    }
  ];

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
          <h2 className="text-4xl font-bold mb-4 gradient-text">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 shadow-lg card-hover">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-2 md:mb-0">
                    <FaBriefcase className="text-purple-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{experience.title}</h3>
                      <p className="text-purple-600 font-medium">{experience.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600">
                    <div className="flex items-center mb-1 md:mb-0 md:mr-4">
                      <FaCalendar className="mr-2" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      {experience.location}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="text-gray-600 flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-purple-600 rounded-full text-sm font-medium border border-purple-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
