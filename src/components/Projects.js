import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Digestrack',
      description: 'A comprehensive iOS app for tracking and managing digestive health. Features include meal logging, symptom tracking, and personalized health insights.',
      tech: ['Flutter', 'iOS', 'Dart', 'Health Tracking'],
      github: 'https://github.com/MohammadAlieye',
      demo: 'https://apps.apple.com/es/app/digestrack/id6740924621?l=en-GB',
      image: '📱',
    },
    {
      title: 'Baraka',
      description: 'A financial technology mobile application available on Android. Provides investment and financial management services with a user-friendly interface.',
      tech: ['Flutter', 'Android', 'Firebase', 'FinTech'],
      github: 'https://github.com/MohammadAlieye',
      demo: 'https://play.google.com/store/apps/details?id=com.baraka.user&hl=en_US',
      image: '💰',
    },
    {
      title: 'SalahMate',
      description: 'A web application designed to help Muslims track prayer times, Qibla direction, and manage their daily prayers with accurate location-based services.',
      tech: ['Flutter', 'Web', 'Location Services', 'Prayer Times'],
      github: 'https://github.com/MohammadAlieye',
      demo: 'https://salahmate.com/',
      image: '🕌',
    },
    {
      title: 'Mealsmash',
      description: 'A modern web platform for meal planning, recipe discovery, and nutrition tracking. Helps users create healthy meal plans and discover new recipes.',
      tech: ['Flutter', 'Web', 'Nutrition API', 'Meal Planning'],
      github: 'https://github.com/MohammadAlieye',
      demo: 'https://mealsmash.com/',
      image: '🍽️',
    },
    {
      title: 'Rel8',
      description: 'A social networking mobile application for Android. Enables users to connect, share experiences, and build meaningful relationships in their community.',
      tech: ['Flutter', 'Android', 'Social Networking', 'Real-time Chat'],
      github: 'https://github.com/MohammadAlieye',
      demo: 'https://play.google.com/store/apps/details?id=com.rel8.app&hl=en',
      image: '🤝',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            Some of my recent work and side projects
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && project.github !== 'https://github.com/MohammadAlieye' && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaExternalLinkAlt /> View Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

