import { useTranslation } from "react-i18next";
import ProjectCard from "../ProjectCard/ProjectCard";
import useScrollReveal from "../../hooks/useScrollReveal";

const PROJECTS = [
  {
    id: 1,
    name: 'portfolio.wakatimegas.title',
    descKey: 'portfolio.wakatimegas.description',
    stack: ['javascript', 'react', 'tanstack', 'tailwind', 'extension', 'browser', 'css', 'html'],
    live: 'https://wakatime-for-apps-script.vercel.app/',
    github: 'https://github.com/Koppeks/wakatime-gas',
    extra: 'https://chromewebstore.google.com/detail/wakatime-for-google-apps/gmpiofbkheibmaofamolbnahecgafkje'
  },
  {
    id: 2,
    name: 'portfolio.accounting_system.title',
    descKey: 'portfolio.accounting_system.description',
    stack: ['typescript', 'nextjs', 'tailwind', 'node.js', 'prisma', 'postgresql', 'supabase'],
    live: 'https://sistema-contable-simil-hb.vercel.app/',
  },
];

function Porfolio() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section className="portfolio section reveal" id="sectionPorfolio" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p>{t('porfolio.subtitle')}</p>
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
