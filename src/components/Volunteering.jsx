
import { motion, useReducedMotion } from "motion/react";

import {
  Users,
  Wallet,
  HeartHandshake,
  CalendarDays,
  ArrowUpRight,
} from "lucide-react";

import { volunteering } from "../data/portfolio";
import "../styles/volunteering.css";

const roleIcons = {
  1: Wallet,
  2: HeartHandshake,
  3: Wallet,
  4: Users,
};

export default function Volunteering() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="volunteering"
      className="volunteering-section"
    >
      <div className="container">

        {/* Section heading */}

        <motion.div
          className="volunteering-heading"
          initial={{
            opacity: reducedMotion ? 1 : 0,
            y: reducedMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            06 / BEYOND THE CODE
          </span>

          <h2 className="section-title">
            Leadership{" "}
            <span>& Volunteering.</span>
          </h2>

          <p className="section-subtitle">
            Making a difference beyond technology.
          </p>
        </motion.div>

        {/* Animated timeline */}

        <div className="volunteering-timeline">

          {volunteering.map((item, index) => {
            const Icon = roleIcons[item.id] || Users;

            return (
              <motion.article
                key={item.id}
                className="timeline-item"
                initial={{
                  opacity: reducedMotion ? 1 : 0,
                  x: reducedMotion ? 0 : -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  delay: reducedMotion
                    ? 0
                    : (index % 2) * 0.1,
                }}
              >

                <div
                  className="timeline-dot"
                  aria-hidden="true"
                />

                <div className="timeline-card">

                  <div className="timeline-icon">
                    <Icon size={27} />
                  </div>

                  <div className="timeline-content">

                    <span className="timeline-category">
                      {item.category}
                    </span>

                    <h3>{item.role}</h3>

                    <p className="timeline-organization">
                      {item.organization}
                    </p>

                    {item.period && (
                      <div className="timeline-period">
                        <CalendarDays size={15} />
                        {item.period}
                      </div>
                    )}

                    {item.description && (
                      <p className="timeline-description">
                        {item.description}
                      </p>
                    )}

                    {item.image && (
                      <a
                        href={item.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-image-link"
                      >
                        View Photo
                        <ArrowUpRight size={15} />
                      </a>
                    )}

                  </div>

                  <span
                    className="timeline-number"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* Personal qualities */}

        <div className="leadership-qualities">
          {[
            "Leadership",
            "Teamwork",
            "Communication",
            "Responsibility",
          ].map((quality) => (
            <span key={quality}>{quality}</span>
          ))}
        </div>

      </div>
    </section>
  );
}
