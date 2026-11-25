
import { motion, useReducedMotion } from "motion/react";

import { sports } from "../data/portfolio";
import "../styles/sports.css";

export default function Sports() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="sports" className="sports-section">
      <div className="container">

        {/* Section heading */}

        <motion.div
          className="sports-heading"
          initial={{
            opacity: reducedMotion ? 1 : 0,
            y: reducedMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            07 / LIFE BEYOND TECHNOLOGY
          </span>

          <h2 className="section-title">
            Sports <span>& Activities.</span>
          </h2>

          <p className="section-subtitle">
            Discipline, dedication and teamwork.
          </p>
        </motion.div>

        {/* Sports cards */}

        <div className="sports-grid">
          {sports.map((sport, index) => (
            <motion.article
              key={sport.id}
              className="sports-card"
              initial={{
                opacity: reducedMotion ? 1 : 0,
                y: reducedMotion ? 0 : 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: reducedMotion ? 0 : 0.5,
                delay: reducedMotion ? 0 : index * 0.1,
              }}
            >

              {sport.image ? (
                <div className="sports-image">
                  <img
                    src={sport.image}
                    alt={sport.title}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div
                  className="sports-icon"
                  aria-hidden="true"
                >
                  {sport.icon}
                </div>
              )}

              <h3>{sport.title}</h3>

              <p className="sports-achievement">
                {sport.achievement}
              </p>

              {sport.organization && (
                <p className="sports-organization">
                  {sport.organization}
                </p>
              )}

            </motion.article>
          ))}
        </div>

        <motion.p
          className="sports-quote"
          initial={{ opacity: reducedMotion ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Beyond coding, sports teach me the value
          of teamwork, resilience and continuous
          improvement.
        </motion.p>

      </div>
    </section>
  );
}
