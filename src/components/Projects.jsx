import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

function Projects() {
  return (
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
          <h3>Favorite Sites</h3>
          <p>
            Manage, Showcase, and Instantly Upload Your Favorite Web Projects.
          </p>
          <p className="project-subtext">
            React | JavaScript | Node.js | PostgreSQL
          </p>
          <a
            href="https://my-favorite-sites.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View App
          </a>
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
          <p className="project-subtext">
            React | JavaScript | Node.js | Backendless | Flowrunner | AI
          </p>
          <a
            href="https://fruit-guru.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View App
          </a>
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
          <p className="project-subtext">
            React | JavaScript | Node.js | Backendless | Flowrunner | AI
          </p>
          <a
            href="https://photo-recipe.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View App
          </a>
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>Great Minds</h3>
          <p>Witness two powerful AIs debating.</p>
          <p className="project-subtext">
            React | TypeScript | Node.js | MongoDB | AI
          </p>
          <a
            href="https://great-minds-chatting.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View App
          </a>
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>Tomorrow Shift</h3>
          <p>Shift management app for work teams.</p>
          <p className="project-subtext">
            React | JavaScript | Node.js | Backendless | Flowrunner
          </p>
          <a
            href="https://tomorrow-shift.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            View App
          </a>
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>HeroRun Game</h3>
          <p>Challenge your skills in this fun game!</p>
          <p className="project-subtext">Java | LibGDX | IntelliJ IDEA</p>
          <a
            href="https://herorungame.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-btn"
          >
            Play Online
          </a>
        </motion.div>

        <motion.div
          className="project-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3>HeroRun Game</h3>
          <p>Take the game with you anywhere and have fun even offline!</p>
          <p className="project-subtext">Java | LibGDX | IntelliJ IDEA</p>
          <a
            href="/demos/HeroRunGame-1.0.0-win.jar"
            download
            className="project-btn"
          >
            Download Desktop App
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
