import { useTranslation } from "react-i18next";
import useScrollReveal from "../../hooks/useScrollReveal";

const TECH = ['JavaScript', 'TypeScript', 'Python', ];

function FrontPage() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section className="hero section" id="sectionHome">
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />

      <div className="hero__content section-container">
        <div className="reveal" ref={ref}>
          <h1 className="hero__name">
            Nicolás H.<br />
            <span className="hero__name--accent">Silva.</span>
          </h1>

          <p className="hero__role">{t('maindescription')}</p>
          <p className="hero__desc">{t('fronttext')}</p>

          <div className="hero__ctas">
            <a href="#sectionPorfolio" className="btn btn--primary">
              {t('hero.cta1')}
            </a>
            <a href="#sectionContact" className="btn btn--ghost">
              {t('hero.cta2')}
            </a>
          </div>

          <div className="hero__tech">
            {TECH.map(tech => (
              <span key={tech} className="hero__tech-badge">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FrontPage;
