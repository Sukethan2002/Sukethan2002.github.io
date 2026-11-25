
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowUpRight,
  Download,
  GitBranch,
  BriefcaseBusiness,
  Mail,
  
  BrainCircuit,
  Terminal,
  Database,
  ChevronDown,
} from "lucide-react";

import { personal } from "../data/portfolio";
import AnimatedBackground from "./AnimatedBackground";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    const currentRole = personal.roles[roleIndex];

    let delay = deleting ? 35 : 75;

    if (!deleting && displayText === currentRole) {
      delay = 1800;
    }

    const timeout = setTimeout(() => {
      if (!deleting && displayText === currentRole) {
        setDeleting(true);
      } else if (deleting && displayText === "") {
        setDeleting(false);

        setRoleIndex(
          (previous) =>
            (previous + 1) % personal.roles.length
        );
      } else {
        setDisplayText(
          currentRole.substring(
            0,
            displayText.length + (deleting ? -1 : 1)
          )
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, deleting, roleIndex, reducedMotion]);

  return (
    <section id="home" className="hero">
      <AnimatedBackground />

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-label">
            <span className="status-dot" />
            HELLO, WORLD!
          </div>

          <h1 className="hero-title">
            I'm {personal.shortName}
            <span>.</span>
          </h1>

          <div className="typing-text">
            {reducedMotion
              ? personal.roles[0]
              : displayText}

            {!reducedMotion && (
              <span className="typing-cursor">|</span>
            )}
          </div>

          <p className="hero-description">
            {personal.degree} undergraduate at the{" "}
            <strong>{personal.university}</strong>.
            Passionate about software development,
            artificial intelligence and building
            innovative solutions.
          </p>

          <div className="hero-buttons">
            <a
              href="#projects"
              className="primary-button"
            >
              Explore Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href={personal.cv}
              download="Sukethan_CV.pdf"
              className="secondary-button"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="social-links">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitBranch size={21} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={21} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
            >
              <Mail size={21} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          aria-hidden="true"
        >
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="visual-core profile-core">
            <img
                src={personal.photo}
                alt={personal.name}
                className="hero-profile-photo"
            />
          </div>

          <div className="floating-icon icon-one">
            <Terminal size={30} />
          </div>

          <div className="floating-icon icon-two">
            <BrainCircuit size={30} />
          </div>

          <div className="floating-icon icon-three">
            <Database size={30} />
          </div>

          <div className="floating-icon icon-four">
            <GitBranch size={30} />
          </div>

          <span className="visual-label">
            LEARN · BUILD · INNOVATE
          </span>
        </motion.div>
      </div>

      <a href="#about" className="scroll-indicator">
        <span>Scroll to explore</span>
        <ChevronDown size={22} />
      </a>
    </section>
  );
}
