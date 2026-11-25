
import { motion, useReducedMotion } from "motion/react";
import {
  UserRound,
  GraduationCap,
  MapPin,
  BrainCircuit,
  Code2,
  ArrowUpRight,
} from "lucide-react";

import { personal } from "../data/portfolio";
import "../styles/about.css";

const cards = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Education",
    lines: [
      personal.degree,
      personal.university,
      personal.year,
    ],
  },
  {
    id: "location",
    icon: MapPin,
    title: "Based In",
    lines: [personal.location],
  },
  {
    id: "focus",
    icon: BrainCircuit,
    title: "Current Focus",
    lines: [
      "Deep Learning",
      "Computer Vision",
      "Software Development",
    ],
  },
  {
    id: "mindset",
    icon: Code2,
    title: "My Mindset",
    lines: ["Learn.", "Build.", "Innovate."],
  },
];

export default function About() {
  const reducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reducedMotion ? 0 : 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: reducedMotion ? 1 : 0,
      y: reducedMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducedMotion ? 0 : 0.5,
      },
    },
  };

  return (
    <section id="about" className="about-section">
      <div className="container">
        <motion.div
          className="about-heading"
          initial={{
            opacity: reducedMotion ? 1 : 0,
            y: reducedMotion ? 0 : 20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reducedMotion ? 0 : 0.6,
          }}
        >
          <span className="section-label">
            01 / GET TO KNOW ME
          </span>

          <h2 className="section-title">
            About <span>Me.</span>
          </h2>

          <p className="section-subtitle">
            The person behind the code.
          </p>
        </motion.div>

        <motion.div
          className="about-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.article
            className="bento-card about-intro"
            variants={cardVariants}
          >
            <div className="bento-icon">
              <UserRound size={26} />
            </div>

            <h3>Who I Am</h3>
            <p>{personal.about}</p>

            <div className="about-tags">
              <span>Developer</span>
              <span>Undergraduate</span>
              <span>Researcher</span>
            </div>
          </motion.article>

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.id}
                className={`bento-card about-${card.id}`}
                variants={cardVariants}
              >
                <div className="bento-icon">
                  <Icon size={26} />
                </div>

                <h3>{card.title}</h3>

                {card.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}

                {card.id === "location" && (
                  <span className="location-flag">
                    🇱🇰
                  </span>
                )}
              </motion.article>
            );
          })}

          <motion.article
            className="bento-card about-opportunity"
            variants={cardVariants}
          >
            <div>
              <div className="availability">
                <span className="availability-dot" />
                Open to opportunities
              </div>

              <p>
                Interested in software development
                internships and collaborative projects.
              </p>
            </div>

            <a
              href={`mailto:${personal.email}`}
              className="opportunity-link"
              aria-label="Contact me by email"
            >
              <ArrowUpRight size={24} />
            </a>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
