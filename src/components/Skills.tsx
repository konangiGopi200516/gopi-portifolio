import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaTools, FaMobile } from 'react-icons/fa';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <FaCode className="text-purple-600" />,
      skills: [
        { name: "Python", level: 85 },
        { name: "C", level: 75 },
        { name: "C++", level: 70 }
      ]
    },
    {
      title: "Web Technologies",
      icon: <FaDatabase className="text-indigo-600" />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "React", level: 80 }
      ]
    },
    {
      title: "Core Skills",
      icon: <FaTools className="text-purple-600" />,
      skills: [
        { name: "Data Structures", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Algorithms", level: 80 }
      ]
    },
    {
      title: "AI/ML & Security",
      icon: <FaMobile className="text-indigo-600" />,
      skills: [
        { name: "Machine Learning", level: 75 },
        { name: "Cybersecurity", level: 70 },
        { name: "Data Preprocessing", level: 75 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 85) return "bg-green-500";
    if (level >= 70) return "bg-blue-500";
    return "bg-yellow-500";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg card-hover"
            >
              <div className="flex items-center mb-4">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${getSkillColor(skill.level)}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Additional Certifications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-600 mb-2">Automation Anywhere</h4>
                <p className="text-sm text-gray-600">Professional Certification • Dec 2025</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-semibold text-indigo-600 mb-2">Multicloud Network Associate</h4>
                <p className="text-sm text-gray-600">Network Certification • Aug 2025</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-600 mb-2">AI & ML Training</h4>
                <p className="text-sm text-gray-600">AICTE-EduSkills • Oct-Dec 2025</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
