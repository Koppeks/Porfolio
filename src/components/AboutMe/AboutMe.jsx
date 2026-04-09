import me from "../../images/caricatura.png";
import { useTranslation } from "react-i18next";
import useScrollReveal from "../../hooks/useScrollReveal";

const CORE_SKILLS = [
  'Development', 'DevOps', 'CI/CD', 'Cloud', 'Agile', 'Scrum',
];

const LANGUAGES = [
  { name: 'Español', level: 'Native' },
  { name: 'English', level: 'C1' },
  { name: 'Português', level: 'B1' },
];

function AboutMe() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section className="about section reveal" id="sectionAbout" ref={ref}>
      <div className="section-container">
        <div className="about__inner">
          <div className="about__image-col">
            <div className="about__image-wrap">
              <img src={me} alt="Nicolás H. Silva" className="about__photo" />
              <div className="about__image-glow" aria-hidden="true" />
            </div>
          </div>
          <div className="about__text-col">
            <h2 className="about__title">{t('aboutme.title')}</h2>
            <p className="about__desc">{t('aboutme.description')}</p>
            <div className="about__skills">
              <p className="about__skills-label">{t('aboutme.skills_label')}</p>
              <div className="about__skills-grid">
                {CORE_SKILLS.map(skill => (
                  <span key={skill} className="about__skill">{skill}</span>
                ))}
              </div>
            </div>
            <div className="about__languages">
              <p className="about__skills-label">{t('extra.languages')}</p>
              <div className="about__langs">
                {LANGUAGES.map(({ name, level }) => (
                  <div key={name} className="about__lang">
                    <span className="about__lang-name">{name}</span>
                    <span className="about__lang-level">{level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
