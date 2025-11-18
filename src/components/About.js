import { motion } from 'framer-motion';
import React from 'react';
import './About.css';

const About = () => {
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
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-subtitle">
            Get to know more about my journey and passion
          </p>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a passionate <strong>Mobile Developer</strong> with expertise in <strong>Flutter</strong> and <strong>React Native</strong>, dedicated to creating
              beautiful, performant, and user-friendly mobile applications. With a keen
              eye for design and a love for clean code, I transform ideas into
              exceptional digital experiences.
            </p>
            <p>
              My journey in mobile development has been driven by curiosity and a
              commitment to continuous learning. I specialize in building cross-platform
              applications using Flutter and React Native that deliver native-like performance while maintaining code
              efficiency and scalability.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects</div>
            </motion.div>
            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="stat-number">4</div>
              <div className="stat-label">Years Experience</div>
            </motion.div>
            <motion.div
              className="stat-card"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedication</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

