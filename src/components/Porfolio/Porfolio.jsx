import { useTranslation } from "react-i18next";
import ProjectCard from "../ProjectCard/ProjectCard";
import useScrollReveal from "../../hooks/useScrollReveal";
import { PROJECTS } from "../../projects";

function Porfolio() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section className="portfolio section reveal" id="sectionPorfolio" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p>{t('portfolio.subtitle')}</p>
        </div>
        <div className="portfolio__grid">
          {PROJECTS.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Porfolio;
