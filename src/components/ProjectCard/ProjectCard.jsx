import { useTranslation } from "react-i18next";
import { Link, ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

function ProjectCard({ name, descKey, stack, live, github, extra }) {
  const { t } = useTranslation();

  return (
    <article className="project-card">
      <div className="project-card__header">
        <h3 className="project-card__name">{t(name)}</h3>
        <div className="project-card__links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="View on GitHub"
            >
              <SiGithub size={13} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="View live site"
            >
              <Link size={13} />
            </a>
          )}
          {extra && (
            <a
              href={extra}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
              aria-label="View extra link"
            >
              <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>

      <p className="project-card__desc">{t(descKey)}</p>

      <div className="project-card__stack">
        {stack.map(tech => (
          <span key={tech} className="project-card__tech">{tech}</span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;
