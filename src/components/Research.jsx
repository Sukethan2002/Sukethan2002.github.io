
import { motion, useReducedMotion } from "motion/react";

import {
  BrainCircuit,
  Target,
  ScanLine,
  FlaskConical,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

import { research } from "../data/portfolio";
import "../styles/research.css";

function ResearchVisual() {
  return (
    <div className="research-visual">

      <div className="research-grid-bg" />

      <div className="research-visual-heading">
        <ScanLine size={17} />
        OBJECT DETECTION
      </div>

      <svg
        className="elephant-illustration"
        viewBox="0 0 400 260"
        role="img"
        aria-label="Conceptual elephant object detection illustration"
      >
        {/* Elephant illustration */}

        <g fill="#52738b">

          {/* Body */}
          <ellipse
            cx="180"
            cy="120"
            rx="80"
            ry="48"
          />

          {/* Head */}
          <ellipse
            cx="252"
            cy="119"
            rx="36"
            ry="38"
          />

          {/* Ear */}
          <ellipse
            cx="224"
            cy="110"
            rx="32"
            ry="42"
            fill="#385b78"
          />

          {/* Legs */}
          <rect
            x="119"
            y="148"
            width="23"
            height="65"
            rx="6"
          />

          <rect
            x="156"
            y="148"
            width="23"
            height="65"
            rx="6"
          />

          <rect
            x="207"
            y="148"
            width="23"
            height="65"
            rx="6"
          />

          <rect
            x="241"
            y="148"
            width="23"
            height="65"
            rx="6"
          />

          {/* Trunk */}
          <path
            d="M270 127 Q304 150 285 185 Q279 196 267 188"
            fill="none"
            stroke="#52738b"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Tail */}
          <path
            d="M106 115 Q84 130 91 157"
            fill="none"
            stroke="#52738b"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Eye */}
          <circle
            cx="269"
            cy="108"
            r="3"
            fill="#dbeafe"
          />
        </g>

        {/* Bounding box */}

        <rect
          x="75"
          y="58"
          width="240"
          height="170"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="2"
          strokeDasharray="8 4"
          rx="3"
        />

        {/* Detection label */}

        <rect
          x="75"
          y="35"
          width="133"
          height="23"
          rx="3"
          fill="#0891b2"
        />

        <text
          x="85"
          y="50"
          fill="white"
          fontSize="11"
          fontFamily="monospace"
        >
          CLASS: ELEPHANT
        </text>

        {/* Animated scanning line */}

        <g className="detection-scanner">
          <rect
            x="75"
            y="100"
            width="240"
            height="20"
            fill="#22d3ee"
            opacity="0.08"
          />

          <line
            x1="75"
            y1="120"
            x2="315"
            y2="120"
            stroke="#22d3ee"
            strokeWidth="2"
          />
        </g>
      </svg>

      <div className="research-visual-footer">
        CONCEPTUAL DETECTION VISUALIZATION
      </div>

    </div>
  );
}

export default function Research() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="research"
      className="research-section"
    >
      <div className="container">

        {/* Section heading */}

        <motion.div
          className="research-heading"
          initial={{
            opacity: reducedMotion ? 1 : 0,
            y: reducedMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            04 / RESEARCH & INNOVATION
          </span>

          <h2 className="section-title">
            Ongoing <span>Research.</span>
          </h2>

          <p className="section-subtitle">
            Exploring technology for real-world
            challenges.
          </p>
        </motion.div>

        {/* Main research card */}

        <motion.article
          className="research-card"
          initial={{
            opacity: reducedMotion ? 1 : 0,
            y: reducedMotion ? 0 : 30,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
          }}
        >
          <ResearchVisual />

          <div className="research-content">

            <div className="research-status">
              <span className="research-status-dot" />
              Research in Progress
            </div>

            <h3>{research.title}</h3>

            <p className="research-description">
              {research.description}
            </p>

            <div className="research-objective">

              <Target size={23} />

              <div>
                <h4>Research Objective</h4>
                <p>{research.objective}</p>
              </div>

            </div>

            <div className="research-technologies">
              {research.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="research-university">
              <GraduationCap size={19} />

              <span>
                {research.type} · {research.university}
              </span>
            </div>

            {research.publication && (
              <a
                href={research.publication}
                target="_blank"
                rel="noopener noreferrer"
                className="research-publication"
              >
                View Publication
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </motion.article>

        {/* Research areas */}

        <div className="research-areas">
          {research.areas.map((area, index) => (
            <motion.div
              className="research-area-card"
              key={area}
              initial={{
                opacity: reducedMotion ? 1 : 0,
                y: reducedMotion ? 0 : 20,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0 : 0.4,
                delay: reducedMotion ? 0 : index * 0.1,
              }}
            >
              {index === 0 || index === 1 ? (
                <BrainCircuit size={25} />
              ) : index === 2 ? (
                <ScanLine size={25} />
              ) : (
                <FlaskConical size={25} />
              )}

              <h4>{area}</h4>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
