
import { motion, useReducedMotion } from "motion/react";

import {
  Trophy,
  Award,
  CalendarDays,
  ArrowUpRight,
  Medal,
} from "lucide-react";

import {
  achievements,
  certificates,
} from "../data/portfolio";

import "../styles/achievements.css";

export default function Achievements() {
  const reducedMotion = useReducedMotion();

  const reveal = {
    initial: {
      opacity: reducedMotion ? 1 : 0,
      y: reducedMotion ? 0 : 25,
    },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.1,
    },

    transition: {
      duration: reducedMotion ? 0 : 0.5,
    },
  };

  return (
    <section
      id="achievements"
      className="achievements-section"
    >
      <div className="container">

        {/* Section heading */}

        <motion.div
          className="achievements-heading"
          {...reveal}
        >
          <span className="section-label">
            05 / MILESTONES & RECOGNITION
          </span>

          <h2 className="section-title">
            Achievements{" "}
            <span>& Certificates.</span>
          </h2>

          <p className="section-subtitle">
            Celebrating progress, dedication and
            continuous learning.
          </p>
        </motion.div>

        {/* Competition achievements */}

        <div className="achievement-list">
          {achievements.map((achievement) => (
            <motion.article
              key={achievement.id}
              className="achievement-card"
              {...reveal}
            >
              <div className="achievement-icon">
                <Trophy
                  size={48}
                  strokeWidth={1.5}
                />
              </div>

              <div className="achievement-info">
                <span className="achievement-label">
                  COMPETITION ACHIEVEMENT
                </span>

                <h3>{achievement.title}</h3>

                <p>{achievement.description}</p>

                {achievement.image && (
                  <a
                    href={achievement.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-link"
                  >
                    View Achievement
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>

              <div className="achievement-rank">
                <Medal size={25} />

                <strong>
                  {achievement.rank}
                </strong>

                <span>PLACE</span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Certificates heading */}

        <motion.div
          className="certificates-heading"
          {...reveal}
        >
          <Award size={25} />

          <h3>Certifications</h3>
        </motion.div>

        {/* Certificate cards */}

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <motion.article
              key={certificate.id}
              className="certificate-card"
              {...reveal}
            >
              <div className="certificate-cover">

                {certificate.image ? (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    loading="lazy"
                  />
                ) : (
                  <div className="certificate-placeholder">
                    <Award
                      size={65}
                      strokeWidth={1.2}
                    />

                    <span>CERTIFICATION</span>
                  </div>
                )}

              </div>

              <div className="certificate-body">

                <h3>{certificate.title}</h3>

                {certificate.organization && (
                  <p className="certificate-organization">
                    {certificate.organization}
                  </p>
                )}

                <p className="certificate-description">
                  {certificate.description}
                </p>

                {certificate.date && (
                  <div className="certificate-date">
                    <CalendarDays size={16} />
                    {certificate.date}
                  </div>
                )}

                <div className="certificate-actions">

                  {certificate.image && (
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      View Certificate
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  {certificate.credentialUrl && (
                    <a
                      href={certificate.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certificate-link"
                    >
                      Verify Credential
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                </div>

              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
