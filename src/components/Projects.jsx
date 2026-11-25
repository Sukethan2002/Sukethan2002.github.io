
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import {
  Dumbbell,
  GraduationCap,
  Cpu,
  Code2,
  ArrowUpRight,
  GitBranch,
  Lock,
  Layers,
} from "lucide-react";

import { projects } from "../data/portfolio";
import "../styles/projects.css";

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Collaborative", value: "collaborative" },
  { label: "Personal", value: "personal" },
];

const projectIcons = {
  1: Dumbbell,
  2: GraduationCap,
  3: Cpu,
  4: Code2,
};

export default function Projects() {
  const [activeFilter, setActiveFilter] =
    useState("all");

  const reducedMotion = useReducedMotion();

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "all" ||
      project.type === activeFilter
  );

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* Section heading */}

        <motion.div
          className="projects-heading"
          initial={{
            opacity: reducedMotion ? 1 : 0,
            y: reducedMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-label">
            03 / WHAT I'VE BUILT
          </span>

          <h2 className="section-title">
            Featured <span>Projects.</span>
          </h2>

          <p className="section-subtitle">
            Turning knowledge into real-world
            solutions.
          </p>
        </motion.div>

        {/* Project filters */}

        <div
          className="project-filters"
          aria-label="Filter projects"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              aria-pressed={
                activeFilter === filter.value
              }
              className={`project-filter ${
                activeFilter === filter.value
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                setActiveFilter(filter.value)
              }
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project grid */}

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const Icon =
                projectIcons[project.id] || Layers;

              return (
                <motion.article
                  key={project.id}
                  layout={!reducedMotion}
                  className="project-card"
                  initial={{
                    opacity: reducedMotion ? 1 : 0,
                    y: reducedMotion ? 0 : 25,
                  }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{
                    opacity: 0,
                    scale: reducedMotion ? 1 : 0.95,
                  }}
                  transition={{
                    duration: reducedMotion ? 0 : 0.35,
                  }}
                >
                  {/* Project image */}

                  <div className="project-cover">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="project-visual">
                        <Icon
                          size={65}
                          strokeWidth={1.3}
                        />
                      </div>
                    )}

                    <span className="project-status">
                      {project.status}
                    </span>
                  </div>

                  {/* Project information */}

                  <div className="project-body">
                    <div className="project-meta">
                      <span>{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3>{project.title}</h3>

                    <p className="project-description">
                      {project.description}
                    </p>

                    {project.contribution && (
                      <div className="project-contribution">
                        <strong>My Contribution</strong>

                        <p>
                          {project.contribution}
                        </p>
                      </div>
                    )}

                    <div className="project-technologies">
                      {project.technologies.map(
                        (technology) => (
                          <span key={technology}>
                            {technology}
                          </span>
                        )
                      )}
                    </div>

                    <div className="project-actions">
                      {project.repository ? (
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <GitBranch size={17} />
                          Source Code
                          <ArrowUpRight size={15} />
                        </a>
                      ) : (
                        <span className="private-repository">
                          <Lock size={15} />
                          Source not publicly available
                        </span>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          Live Demo
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
