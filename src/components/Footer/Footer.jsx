import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__inner section-container">
        <p className="footer__text">
          {t('footer')}
          {' '}
          <a
            href="https://github.com/Koppeks"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            Nicolás H. Silva
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
