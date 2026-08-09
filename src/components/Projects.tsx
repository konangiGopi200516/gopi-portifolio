import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Blood Bank Management System",
      description: "Developed a full-featured Blood Bank Management System with donor registration, blood inventory tracking, user authentication, and request management using Spring Boot, React, and MySQL.",
      technologies: ["Spring Boot", "React", "MySQL", "RESTful APIs", "HTML", "CSS"],
      links: [
        { label: "Frontend Code", url: "https://github.com/konangiGopi200516/bloodbank-frontend.git", icon: "github" },
        { label: "Backend Code", url: "https://github.com/konangiGopi200516/bloodbank-backend.git", icon: "github" }
      ],
      image: "bloodbank",
      bgColor: "from-red-400 to-pink-500"
    },
    {
      title: "Kisan Mart - Agricultural E-Commerce",
      description: "Created a full-stack agricultural e-commerce platform. Features include product catalog, shopping cart, JWT authentication, order tracking, and Cashfree payment integration. Built an admin dashboard for inventory and order management.",
      technologies: ["React", "TypeScript", "Node.js", "Express.js", "Firebase"],
      links: [
        { label: "Live Demo", url: "https://gopi-agro-products.vercel.app", icon: "external" },
        { label: "Source Code", url: "https://github.com/konangiGopi200516/gopi-portifolio.git", icon: "github" }
      ],
      image: "kisanmart",
      bgColor: "from-green-400 to-emerald-500"
    },
    {
      title: "Hospital Management System",
      description: "Developed a full-stack Hospital Management System website with patient registration & discharge, bed occupancy tracking, appointment scheduling, staff management, and user authentication. Features an admin dashboard for real-time ward and inventory monitoring.",
      technologies: ["Spring Boot", "React", "MySQL", "RESTful APIs", "HTML", "CSS"],
      links: [
        { label: "Live Demo", url: "https://gopi-hospital-management-system.vercel.app/", icon: "external" },
        { label: "Source Code", url: "https://github.com/konangiGopi200516/gopi-hospital-management-system.git", icon: "github" }
      ],
      image: "hospital",
      bgColor: "from-blue-400 to-cyan-500"
    }
  ];

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
          <h2 className="text-5xl font-bold mb-4 gradient-text">Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover"
            >
              <div className={`h-48 bg-gradient-to-br ${project.bgColor || 'from-indigo-400 to-purple-500'} flex items-center justify-center`}>
                <img 
                  src={`/images/${project.image}.svg`} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="text-white text-6xl font-bold hidden">{project.title[0]}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4 items-center">
                  {project.links && project.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors text-sm font-medium"
                    >
                      {link.icon === 'github' ? <FaGithub className="mr-2" /> : <FaExternalLinkAlt className="mr-2" />}
                      {link.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
