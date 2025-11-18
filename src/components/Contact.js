import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaLink, FaPaperPlane, FaCheckCircle, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear success message when user starts typing
    if (showSuccess) {
      setShowSuccess(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create email subject and body
    const subject = encodeURIComponent(`Contact from Portfolio - ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Mohammad Ali,\n\n` +
      `My name is: ${formData.name}\n` +
      `My email is: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `---\n` +
      `This message was sent from your portfolio contact form.`
    );
    
    // Open Gmail compose in a new tab with pre-filled content
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=mohammadaliwork6056@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailComposeUrl, '_blank');
    
    // Show success message
    setShowSuccess(true);
    
    // Clear form after a short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setShowSuccess(false);
    }, 3000);
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: <FaEnvelope />,
      url: 'mailto:mohammadaliwork6056@gmail.com',
      color: '#EA4335',
    },
    {
      name: 'Phone',
      icon: <FaPhone />,
      url: 'tel:+9230186056021',
      color: '#25D366',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/mohammad-alee/',
      color: '#0077B5',
    },
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/MohammadAlieye',
      color: '#333',
    },
    {
      name: 'Linktree',
      icon: <FaLink />,
      url: 'https://linktr.ee/MohammadAliEye',
      color: '#43E55E',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's work together!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Get in Touch</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <div className="contact-details">
              <p><strong>Email:</strong> mohammadaliwork6056@gmail.com</p>
              <p><strong>Phone:</strong> +92 30186056021</p>
            </div>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="social-icon">{social.icon}</div>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Open Gmail <FaPaperPlane />
            </motion.button>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="status-message success"
                >
                  <FaCheckCircle className="status-icon" />
                  <span>Gmail should open in a new tab. Just click send!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

