
import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

import {
  Mail,
  GitBranch,
  BriefcaseBusiness,
  ArrowUpRight,
  Download,
  Eye,
  Copy,
  Check,
  MapPin,
  FileText,
} from "lucide-react";

import { personal } from "../data/portfolio";
import "../styles/contact.css";

const contactLinks = [
  {
    title: "Email",
    description: "Send me a message",
    icon: Mail,
    href: `mailto:${personal.email}`,
  },
  {
    title: "GitHub",
    description: "Explore my repositories",
    icon: GitBranch,
    href: personal.github,
  },
  {
    title: "LinkedIn",
    description: "Connect with me",
    icon: BriefcaseBusiness,
    href: personal.linkedin,
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const timerRef = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(
        personal.email
      );

      setCopied(true);
      setCopyError(false);

      clearTimeout(timerRef.current);

      timerRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopyError(true);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        {/* Section heading */}

        <motion.div
          className="contact-heading"
          initial={{
            opacity: reducedMotion ? 1 : 0,
            y: reducedMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            08 / GET IN TOUCH
          </span>

          <h2 className="section-title">
            Let's Work <span>Together.</span>
          </h2>

          <p className="section-subtitle">
            Have an opportunity, project or idea?
            I'd love to hear from you.
          </p>

          <div className="contact-availability">
            <span className="contact-status-dot" />
            Open to opportunities
          </div>
        </motion.div>

        {/* Contact cards */}

        <div className="contact-grid">
          {contactLinks.map((item, index) => {
            const Icon = item.icon;
            const external =
              item.title !== "Email";

            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={
                  external ? "_blank" : undefined
                }
                rel={
                  external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="contact-card"
                initial={{
                  opacity: reducedMotion ? 1 : 0,
                  y: reducedMotion ? 0 : 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: reducedMotion ? 0 : 0.5,
                  delay: reducedMotion
                    ? 0
                    : index * 0.1,
                }}
              >
                <div className="contact-card-top">
                  <div className="contact-icon">
                    <Icon size={28} />
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="contact-arrow"
                  />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Email copy functionality */}

        <div className="email-copy-container">

          <Mail size={19} />

          <span className="contact-email">
            {personal.email}
          </span>

          <button
            type="button"
            className="copy-email-button"
            onClick={copyEmail}
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check size={17} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={17} />
                Copy
              </>
            )}
          </button>

        </div>

        <div
          className="copy-status"
          role="status"
        >
          {copied && "Email address copied."}

          {copyError &&
            "Unable to copy. Please copy the email manually."}
        </div>

        {/* Location */}

        <div className="contact-location">
          <MapPin size={17} />
          {personal.location}
        </div>

        {/* CV section */}

        <motion.div
          className="cv-card"
          initial={{
            opacity: reducedMotion ? 1 : 0,
            y: reducedMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="cv-icon">
            <FileText size={32} />
          </div>

          <h3>Interested in my experience?</h3>

          <p>
            Explore my qualifications, technical
            skills and academic projects.
          </p>

          <div className="cv-buttons">

            <a
              href={personal.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="primary-button"
            >
              <Eye size={19} />
              View CV
            </a>

            <a
              href={personal.cv}
              download="Sukethan_CV.pdf"
              className="secondary-button"
            >
              <Download size={19} />
              Download CV
            </a>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
