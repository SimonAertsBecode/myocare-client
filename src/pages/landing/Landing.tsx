import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../i18n/useLanguage";
import "./Landing.css";

const Landing = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleStartDiagnostic = () => {
    navigate('/diagnostic');
  };

  return (
    <main className="landing">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>{t.landing.hero.badge}</span>
            </div>
            <h1 className="hero-title">
              {t.landing.hero.title.split('MyoCare')[0]}
              <span className="brand-name">MyoCare</span>
            </h1>
            <p className="hero-subtitle">
              {t.landing.hero.subtitle}
            </p>
            <p className="hero-description">
              <strong>{t.landing.hero.approachLabel}</strong> {t.landing.hero.description}
            </p>
            <div className="medical-disclaimer">
              <div className="disclaimer-icon">⚕️</div>
              <p>
                {t.landing.hero.medicalDisclaimer}
              </p>
            </div>
            <div className="hero-actions">
              <button className="cta-button primary" onClick={handleStartDiagnostic}>
                <span>{t.landing.hero.ctaPrimary}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="cta-button secondary">
                <span>{t.landing.hero.ctaSecondary}</span>
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">🔍</div>
              <div className="card-content">
                <h4>{t.landing.hero.cards.diagnostic.title}</h4>
                <p>{t.landing.hero.cards.diagnostic.description}</p>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">👨‍⚕️</div>
              <div className="card-content">
                <h4>{t.landing.hero.cards.analysis.title}</h4>
                <p>{t.landing.hero.cards.analysis.description}</p>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">📚</div>
              <div className="card-content">
                <h4>{t.landing.hero.cards.plan.title}</h4>
                <p>{t.landing.hero.cards.plan.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="section-header">
            <h2 className="section-title">{t.landing.howItWorks.title}</h2>
            <p className="section-subtitle">
              {t.landing.howItWorks.subtitle}
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card" data-step="1">
              <div className="step-number">01</div>
              <div className="step-icon">🔍</div>
              <h3 className="step-title">{t.landing.howItWorks.steps.step1.title}</h3>
              <p className="step-description">
                {t.landing.howItWorks.steps.step1.description}
              </p>
              <div className="step-features">
                {t.landing.howItWorks.steps.step1.tags.map((tag, index) => (
                  <span key={index} className="feature-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="step-arrow">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <path
                  d="M2 12h36m-6-6l6 6-6 6"
                  stroke="var(--primary-blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="step-card" data-step="2">
              <div className="step-number">02</div>
              <div className="step-icon">🎯</div>
              <h3 className="step-title">{t.landing.howItWorks.steps.step2.title}</h3>
              <p className="step-description">
                {t.landing.howItWorks.steps.step2.description}
              </p>
              <div className="step-features">
                {t.landing.howItWorks.steps.step2.tags.map((tag, index) => (
                  <span key={index} className="feature-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="step-arrow">
              <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
                <path
                  d="M2 12h36m-6-6l6 6-6 6"
                  stroke="var(--primary-blue)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="step-card" data-step="3">
              <div className="step-number">03</div>
              <div className="step-icon">💪</div>
              <h3 className="step-title">{t.landing.howItWorks.steps.step3.title}</h3>
              <p className="step-description">
                {t.landing.howItWorks.steps.step3.description}
              </p>
              <div className="step-features">
                {t.landing.howItWorks.steps.step3.tags.map((tag, index) => (
                  <span key={index} className="feature-tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="education-section">
        <div className="education-container">
          <div className="education-content">
            <div className="education-text">
              <h2 className="section-title">
                {t.landing.education.title}
              </h2>
              <p className="education-description">
                {t.landing.education.description}
              </p>

              <div className="education-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div className="benefit-content">
                    <h4>{t.landing.education.benefits.targetedStrengthening.title}</h4>
                    <p>
                      {t.landing.education.benefits.targetedStrengthening.description}
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">⚖️</div>
                  <div className="benefit-content">
                    <h4>{t.landing.education.benefits.posturalCorrection.title}</h4>
                    <p>
                      {t.landing.education.benefits.posturalCorrection.description}
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">🔄</div>
                  <div className="benefit-content">
                    <h4>{t.landing.education.benefits.mobilityImprovement.title}</h4>
                    <p>
                      {t.landing.education.benefits.mobilityImprovement.description}
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <div className="benefit-content">
                    <h4>{t.landing.education.benefits.durablePrevention.title}</h4>
                    <p>
                      {t.landing.education.benefits.durablePrevention.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-stats">
              <div className="stat-card">
                <div className="stat-number">90%</div>
                <div className="stat-label">
                  {t.landing.education.stats.backPainRelief}
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6 sem.</div>
                <div className="stat-label">
                  {t.landing.education.stats.rehabilitationPlan}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="section-header">
            <h2 className="section-title">
              {t.landing.features.title}
            </h2>
            <p className="section-subtitle">
              {t.landing.features.subtitle}
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card modern">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🎯</div>
              </div>
              <h3 className="feature-title">{t.landing.features.personalizedCare.title}</h3>
              <p className="feature-description">
                {t.landing.features.personalizedCare.description}
              </p>
              <ul className="feature-benefits">
                {t.landing.features.personalizedCare.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="feature-card modern">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">⚡</div>
              </div>
              <h3 className="feature-title">{t.landing.features.simplifiedAccess.title}</h3>
              <p className="feature-description">
                {t.landing.features.simplifiedAccess.description}
              </p>
              <ul className="feature-benefits">
                {t.landing.features.simplifiedAccess.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="feature-card modern">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">👨‍⚕️</div>
              </div>
              <h3 className="feature-title">{t.landing.features.benevolentSupport.title}</h3>
              <p className="feature-description">
                {t.landing.features.benevolentSupport.description}
              </p>
              <ul className="feature-benefits">
                {t.landing.features.benevolentSupport.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="medical-note">
            <p>
              <small>
                {t.landing.features.medicalNote}
              </small>
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              {t.landing.cta.title}
            </h2>
            <p className="cta-description">
              {t.landing.cta.description}
            </p>
            <div className="cta-stats">
              <div className="stat">
                <span className="stat-number">2500+</span>
                <span className="stat-label">{t.landing.cta.stats.users}</span>
              </div>
              <div className="stat">
                <span className="stat-number">150+</span>
                <span className="stat-label">{t.landing.cta.stats.experts}</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">{t.landing.cta.stats.satisfaction}</span>
              </div>
            </div>
            <button className="cta-button primary large" onClick={handleStartDiagnostic}>
              <span>{t.landing.cta.button}</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L16.586 13H5a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Landing;
