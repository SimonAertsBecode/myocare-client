import { Link } from "react-router-dom";
import { useLanguage } from "../../../i18n/useLanguage";
import type { Language } from "../../../i18n/types";
import "./Header.css";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "fr", label: "Français", flag: "FR" },
    { code: "en", label: "English", flag: "EN" },
    { code: "nl", label: "Nederlands", flag: "NL" },
  ];

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <Link to="/" className="logo-link">
          <img src="/logo-transparent.png" alt="MyoCare" className="logo" />
        </Link>

        <div className="language-switcher">
          <button className="language-button" aria-label="Change language">
            {languages.find((lang) => lang.code === language)?.flag}{" "}
            {languages.find((lang) => lang.code === language)?.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M4 6l4 4 4-4H4z" />
            </svg>
          </button>
          <div className="language-dropdown">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`language-option ${
                  language === lang.code ? "active" : ""
                }`}
                onClick={() => handleLanguageChange(lang.code)}
              >
                <span className="flag">{lang.flag}</span>
                <span className="label">{lang.label}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
