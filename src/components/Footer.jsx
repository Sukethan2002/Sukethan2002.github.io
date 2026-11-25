
import {
  ArrowUp,
  GitBranch,
  BriefcaseBusiness,
  Mail,
} from "lucide-react";

import { useReducedMotion } from "motion/react";
import { personal } from "../data/portfolio";
import "../styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  const reducedMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              S<span>.</span>
            </a>

            <p>
              Learn. Build. Innovate.
            </p>
          </div>

          <div className="footer-socials">

            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitBranch size={20} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BriefcaseBusiness size={20} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              aria-label="Email"
            >
              <Mail size={20} />
            </a>

          </div>

          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>

        </div>

        <div className="footer-bottom">

          <p>
            © {year} {personal.name}.
            All rights reserved.
          </p>

          <p>
            Built with React & Motion
          </p>

        </div>

      </div>
    </footer>
  );
}
