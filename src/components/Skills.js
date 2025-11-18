import { motion } from 'framer-motion';
import React from 'react';
import { FaCode, FaGitAlt, FaMobile } from 'react-icons/fa';
import { SiDart, SiFirebase, SiFlutter, SiReact } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Flutter', icon: <SiFlutter />, level: 95, color: '#02569B' },
    { name: 'React Native', icon: <SiReact />, level: 90, color: '#61DAFB' },
    { name: 'Dart', icon: <SiDart />, level: 90, color: '#0175C2' },
    { name: 'Firebase', icon: <SiFirebase />, level: 85, color: '#FFCA28' },
    { name: 'Mobile Development', icon: <FaMobile />, level: 90, color: '#4CAF50' },
    { name: 'UI/UX Design', icon: <FaCode />, level: 80, color: '#E91E63' },
    { name: 'Git & Version Control', icon: <FaGitAlt />, level: 85, color: '#F05032' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  className="skill-progress"
                  style={{ backgroundColor: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

