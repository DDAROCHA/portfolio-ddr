import './App.css';
import logo from './logo.png';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <div className="header-center">
          {/* Logo flotante permanente */}
          <motion.img 
            src={logo} 
            alt="Logo" 
            className="header-logo"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="header-title-wrapper">
            <h1 className="header-title">Diego Da Rocha</h1>
            <p className="header-role">App Developer • React • Fullstack</p>
          </div>

          <div className="header-links">
            <a href="https://github.com/DDAROCHA" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/diego-da-rocha" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:ddarocha@jdnservice.com">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          Hello! 👋 I'm Diego
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5, duration: 1 }}
        >
          Passionate about building <strong>modern applications</strong> with focus on 
          <strong> Artificial Intelligence</strong>, clean design, high performance and scalability.
        </motion.p>

        {/* Botón con animación permanente tipo "pulse".*/}
        <motion.a 
          href="mailto:ddarocha@jdnservice.com" 
          className="cta-button"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Get in Touch
        </motion.a>
      </section>

      {/* Projects */}
      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <motion.div 
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Tomorrow Shift</h3>
            <p>Shift management app for work teams.</p>
            <a href="https://tomorrow-shift.netlify.app" target="_blank" rel="noopener noreferrer" className="project-btn">View App</a>
          </motion.div>

          <motion.div 
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Fruit Guru</h3>
            <p>Interactive fruit quiz for learning and fun.</p>
            <a href="https://fruit-guru.netlify.app" target="_blank" rel="noopener noreferrer" className="project-btn">View App</a>
          </motion.div>

          <motion.div 
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>Photo Recipe</h3>
            <p>Find recipes using only food photos.</p>
            <a href="https://photo-recipe.netlify.app" target="_blank" rel="noopener noreferrer" className="project-btn">View App</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;
