import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Automation Anywhere Professional",
      issuer: "Automation Anywhere University",
      date: "December 2025",
      description: "Professional certification in Robotic Process Automation (RPA) and intelligent automation solutions.",
      skills: ["RPA", "Process Automation", "Digital Workforce", "Bot Development"],
      credentialId: "AA-PRO-2025",
      image: "automation"
    },
    {
      title: "Multicloud Network Associate",
      issuer: "Multicloud Network Certification Board",
      date: "August 2025",
      description: "Network certification covering multicloud architecture, networking protocols, and cloud infrastructure management.",
      skills: ["Cloud Networking", "Multicloud Architecture", "Network Security", "Infrastructure Management"],
      credentialId: "MCNA-2025",
      image: "network"
    },
    {
      title: "AI & ML Virtual Internship",
      issuer: "AICTE-EduSkills (Google for Developers)",
      date: "October - December 2025",
      description: "Comprehensive AI and Machine Learning training program with hands-on experience in building predictive models and implementing AI solutions.",
      skills: ["Machine Learning", "Data Preprocessing", "Model Training", "AI Ethics", "Python"],
      credentialId: "AI-ML-2025",
      image: "aiml"
    },
    {
      title: "Cyber Security Virtual Internship",
      issuer: "ShadowFox Security Academy",
      date: "September 2025",
      description: "Intensive cybersecurity training covering threat analysis, vulnerability assessment, and system security best practices.",
      skills: ["Cybersecurity", "Threat Analysis", "Network Security", "Vulnerability Assessment", "Security Tools"],
      credentialId: "CS-SEC-2025",
      image: "cybersecurity"
    }
  ];

  const getCertColor = (index: number) => {
    const colors = [
      "from-blue-400 to-cyan-500",
      "from-green-400 to-emerald-500",
      "from-purple-400 to-pink-500",
      "from-orange-400 to-red-500"
    ];
    return colors[index % colors.length];
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
          <h2 className="text-4xl font-bold mb-4 gradient-text">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Professional certifications and training programs that enhance my technical skills and industry knowledge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              <div className={`h-48 bg-gradient-to-br ${getCertColor(index)} flex items-center justify-center`}>
                <img 
                  src={`/images/${cert.image}.svg`} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <FaCertificate className="text-white text-6xl hidden" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{cert.title}</h3>
                  <span className="text-sm text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-3 text-sm font-medium text-indigo-600">
                  {cert.issuer}
                </p>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {cert.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2 text-sm">Key Skills:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Credential ID:</span> {cert.credentialId}
                  </div>
                </div>
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
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Continuous Learning Journey</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-600 mb-3">Professional Development</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Actively pursuing industry-recognized certifications to stay current with emerging technologies.
                </p>
                <div className="text-left space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Automation Technologies
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Cloud Computing
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-600 mb-3">Technical Expertise</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Building specialized skills through hands-on virtual internships and practical training.
                </p>
                <div className="text-left space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    AI & Machine Learning
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Cybersecurity
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-600 mb-3">Future Goals</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Planning advanced certifications in cloud architecture and specialized AI domains.
                </p>
                <div className="text-left space-y-2">
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Advanced Cloud Certifications
                  </div>
                  <div className="flex items-center text-sm">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    Specialized AI/ML Programs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
