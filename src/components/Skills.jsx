
import { motion, useReducedMotion } from "motion/react";
import {
  Code2,
  Monitor,
  Server,
  Database,
  Wrench,
  BrainCircuit,
} from "lucide-react";

import { skills } from "../data/portfolio";
import "../styles/skills.css";

const categoryIcons = {
  "Programming Languages": Code2,
  "Frontend & Mobile": Monitor,
  Backend: Server,
  Databases: Database,
  "Development Tools": Wrench,
  "AI-Assisted Development": BrainCircuit,
};

const skillIcons = {
  Python: "python",
  Java: "java",
  JavaScript: "js",
  TypeScript: "ts",
  PHP: "php",
  Dart: "dart",
  HTML: "html",
  CSS: "css",
  React: "react",
  Flutter: "flutter",
  "Node.js": "nodejs",
  Laravel: "laravel",
  NestJS: "nestjs",
  MySQL: "mysql",
  PostgreSQL: "postgres",
  MongoDB: "mongodb",
  SQLite: "sqlite",
  Git: "git",
  GitHub: "github",
  "VS Code": "vscode",
  Postman: "postman",
  Linux: "linux",
};

const technologies = Object.entries(skillIcons);

export default function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        {/* Section heading */}

        <motion.div
          className="skills-heading"
          initial={{
            opacity: reducedMotion ? 1 : 0,
            y: reducedMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
          }}
        >
          <span className="section-label">
            02 / MY TOOLKIT
          </span>

          <h2 className="section-title">
            Technical <span>Skills.</span>
          </h2>

          <p className="section-subtitle">
            Technologies I use to turn ideas into
            reality.
          </p>
        </motion.div>

        {/* Infinite scrolling technology logos */}

        <div className="technology-marquee">
          <div className="technology-track">
            {[0, 1].map((copy) => (
              <div
                className="technology-group"
                key={copy}
                aria-hidden={copy === 1}
              >
                {technologies.map(([name, icon]) => (
                  <div
                    className="technology-item"
                    key={name}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
                      alt={name}
                      width="44"
                      height="44"
                    />

                    <span>{name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Categorized skill cards */}

        <div className="skills-grid">
          {Object.entries(skills).map(
            ([category, items], index) => {
              const Icon =
                categoryIcons[category] || Code2;

              return (
                <motion.article
                  key={category}
                  className="skill-card"
                  initial={{
                    opacity: reducedMotion ? 1 : 0,
                    y: reducedMotion ? 0 : 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.5,
                    delay: reducedMotion
                      ? 0
                      : (index % 3) * 0.1,
                  }}
                >
                  <div className="skill-card-header">
                    <div className="skill-category-icon">
                      <Icon size={25} />
                    </div>

                    <span className="skill-count">
                      {String(items.length).padStart(
                        2,
                        "0"
                      )}
                    </span>
                  </div>

                  <h3>{category}</h3>

                  <div className="skill-items">
                    {items.map((skill) => (
                      <div
                        className="skill-tag"
                        key={skill}
                      >
                        {skillIcons[skill] && (
                          <img
                            src={`https://skillicons.dev/icons?i=${skillIcons[skill]}&theme=dark`}
                            alt=""
                            width="20"
                            height="20"
                            loading="lazy"
                          />
                        )}

                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.article>
              );
            }
          )}
        </div>

        <p className="skills-bottom-text">
          <span className="learning-dot" />
          Always learning. Always evolving.
        </p>
      </div>
    </section>
  );
}
