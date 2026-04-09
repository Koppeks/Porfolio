import { useTranslation } from "react-i18next";
import { SiGithub } from "@icons-pack/react-simple-icons";
import useScrollReveal from "../../hooks/useScrollReveal";

const CONTRIBUTIONS = [
  {
    id: 1,
    repo: 'Koppeks/layer5io',
    nameKey: 'contributions.layer5io.name',
    descKey: 'contributions.layer5io.desc',
    lang: 'JavaScript',
    url: 'https://github.com/layer5io/docs',
  },
  {
    id: 2,
    repo: 'Koppeks/puter',
    nameKey: 'contributions.puter.name',
    descKey: 'contributions.puter.desc',
    lang: 'JavaScript',
    url: 'https://github.com/HeyPuter/puter',
  },
  {
    id: 3,
    repo: 'Koppeks/WebDevTools',
    nameKey: 'contributions.webdevtools.name',
    descKey: 'contributions.webdevtools.desc',
    lang: 'JavaScript',
    url: 'https://github.com/Bashamega/WebDevTools',
  },
];

function Contributions() {
  const { t } = useTranslation();
  const ref = useScrollReveal();

  return (
    <section className="contributions section reveal" id="sectionContributions" ref={ref}>
      <div className="section-container">
        <div className="section-header">
          <h2>{t('contributions.title')}</h2>
          <p>{t('contributions.subtitle')}</p>
        </div>
        <ul className="contributions__list">
          {CONTRIBUTIONS.map(item => (
            <li key={item.id} className="contribution-row">
              <div className="contribution-row__main">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contribution-row__name"
                >
                  <SiGithub size={13} />
                  {t(item.nameKey)}
                </a>
                <p className="contribution-row__desc">{t(item.descKey)}</p>
              </div>
              <span className="contribution-row__lang">{item.lang}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contributions;
