import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Education: React.FC = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      school: "KL University",
      location: "Vijayawada, Andhra Pradesh",
      period: "2023 – 2027",
      gpa: "9.6/10",
      achievements: [
        "Excellent academic performance with 9.6 CGPA",
        "Strong foundation in Computer Science fundamentals",
        "Active participation in technical workshops and seminars",
        "Focus on Data Structures and Algorithms"
      ]
    },
    {
      degree: "Board of Intermediate Education",
      school: "GDMM Junior College",
      location: "Nandigama, Andhra Pradesh",
      period: "2021 – 2023",
      gpa: "96%",
      achievements: [
        "Outstanding performance with 96%",
        "Strong foundation in Mathematics and Sciences",
        "Participated in various academic competitions",
        "Leadership roles in student activities"
      ]
    },
    {
      degree: "Board of Secondary Education",
      school: "Sri Takshashila Public School",
      location: "Chillakallu, Andhra Pradesh",
      period: "2020 – 2021",
      gpa: "97%",
      achievements: [
        "Excellent academic record with 97%",
        "Top performer in Mathematics and Science",
        "Active participation in extracurricular activities",
        "School topper in board examinations"
      ]
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
          <h2 className="text-4xl font-bold mb-4 gradient-text">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
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
                    <FaGraduationCap className="text-purple-600 mr-3" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-purple-600 font-medium">{edu.school}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-600">
                    <div className="flex items-center mb-1 md:mb-0 md:mr-4">
                      <FaCalendar className="mr-2" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      {edu.location}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-white rounded-full text-purple-600 font-semibold border border-purple-200">
                    GPA: {edu.gpa}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Achievements & Activities:</h4>
                  <ul className="space-y-1">
                    {edu.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
            <p className="mb-6">
              I'm committed to continuous learning and skill development through virtual internships, certifications, and hands-on projects. 
              I actively participate in technical workshops and stay updated with the latest industry trends.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Virtual Internships</h4>
                <p className="text-sm">AI/ML and Cybersecurity internships with hands-on experience</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Certifications</h4>
                <p className="text-sm">Professional certifications in Automation and Cloud technologies</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Technical Projects</h4>
                <p className="text-sm">Full-stack projects with modern technologies and best practices</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
