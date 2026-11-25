
import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  {
    name: "Achievements",
    href: "#achievements",
  },
  {
    name: "Activities",
    href: "#volunteering",
  },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("home");

  const reducedMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      const sections =
        document.querySelectorAll("main section[id]");

      let current = "home";

      sections.forEach((section) => {
        const rect =
          section.getBoundingClientRect();

        if (rect.top <= 160) {
          current = section.id;
        }
      });

      if (current === "sports") {
        current = "volunteering";
      }

      const atBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 10;

      setActiveSection(
        atBottom ? "contact" : current
      );
    };

    const handleScroll = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(
        updateActiveSection
      );
    };

    updateActiveSection();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleScroll
    );

    return () => {
      cancelAnimationFrame(frame);

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  return (
    <motion.header
      className="navbar"
      initial={{
        y: reducedMotion ? 0 : -100,
        opacity: reducedMotion ? 1 : 0,
      }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: reducedMotion ? 0 : 0.7,
      }}
    >
      <a
        href="#home"
        className="nav-logo"
        aria-label="Home"
        onClick={() => setIsOpen(false)}
      >
        S<span>.</span>
      </a>

      <nav
        id="main-navigation"
        aria-label="Main navigation"
        className={`nav-links ${
          isOpen ? "open" : ""
        }`}
      >
        {navLinks.map((link) => {
          const sectionId =
            link.href.substring(1);

          const isActive =
            activeSection === sectionId;

          return (
            <a
              key={link.name}
              href={link.href}
              className={
                isActive ? "active" : ""
              }
              aria-current={
                isActive ? "location" : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      <a
        href="#contact"
        className="nav-contact"
        onClick={() => setIsOpen(false)}
      >
        Let's Talk
      </a>

      <button
        type="button"
        className="menu-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={
          isOpen ? "Close menu" : "Open menu"
        }
        aria-expanded={isOpen}
        aria-controls="main-navigation"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </motion.header>
  );
}
