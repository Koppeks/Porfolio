import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Sun, Moon } from "lucide-react";
import useTheme from "../../hooks/useTheme";

function NavBar() {
  const [activeSection, setActiveSection] = useState('sectionHome');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();
  const { theme, toggle: toggleTheme } = useTheme();

  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    function handleScroll() {
      setScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + window.innerHeight / 3;
      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language.startsWith('es') ? 'en' : 'es');
  };

  const NAV_LINKS = [
    { href: '#sectionHome', label: t('navbar.one') },
    { href: '#sectionStack', label: 'Stack' },
    { href: '#sectionPorfolio', label: t('navbar.three') },
    { href: '#sectionAbout', label: t('navbar.four') },
    { href: '#sectionContact', label: t('navbar.six') },
  ];

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a
          href="#sectionHome"
          className="navbar__logo"
          onClick={() => setMenuOpen(false)}
        >
          NS<span>.</span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`}>
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link ${
                activeSection === href.slice(1) ? 'navbar__link--active' : ''
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__lang"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {i18n.language.startsWith('es') ? 'EN' : 'ES'}
          </button>
          <button
            className="navbar__theme"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className={`navbar__burger ${menuOpen ? 'navbar__burger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
