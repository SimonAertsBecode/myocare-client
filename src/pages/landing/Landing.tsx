import "./Landing.css";

const Landing = () => {
  return (
    <main className="landing">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span>🎯 Spécialisé dans les douleurs du dos</span>
            </div>
            <h1 className="hero-title">
              Soulagez vos douleurs de dos avec{" "}
              <span className="brand-name">MyoCare</span>
            </h1>
            <p className="hero-subtitle">
              Un plan de rééducation complet sur 6 semaines avec 3 fiches PDF
              progressives pour maximiser vos résultats contre le mal de dos
            </p>
            <p className="hero-description">
              <strong>Notre approche :</strong> Diagnostic du dos en 15 minutes
              → Analyse par un physiothérapeute expert → Recevez votre plan
              complet de rééducation avec 3 fiches PDF d'exercices évolutifs sur
              6 semaines
            </p>
            <div className="medical-disclaimer">
              <div className="disclaimer-icon">⚕️</div>
              <p>
                <strong>Important :</strong> MyoCare complète mais ne remplace
                pas un diagnostic médical traditionnel.
              </p>
            </div>
            <div className="hero-actions">
              <button className="cta-button primary">
                <span>Démarrer mon plan de rééducation</span>
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
                <span>En savoir plus</span>
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-card card-1">
              <div className="card-icon">🔍</div>
              <div className="card-content">
                <h4>Diagnostic dos</h4>
                <p>Formulaire 15 minutes</p>
              </div>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">👨‍⚕️</div>
              <div className="card-content">
                <h4>Analyse expert</h4>
                <p>Sous 24 heures</p>
              </div>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">📚</div>
              <div className="card-content">
                <h4>Plan 6 semaines</h4>
                <p>3 fiches PDF évolutives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <div className="section-header">
            <h2 className="section-title">Comment soulager votre mal de dos</h2>
            <p className="section-subtitle">
              3 étapes simples pour obtenir vos exercices personnalisés
            </p>
          </div>

          <div className="steps-grid">
            <div className="step-card" data-step="1">
              <div className="step-number">01</div>
              <div className="step-icon">🔍</div>
              <h3 className="step-title">Diagnostic du dos en ligne</h3>
              <p className="step-description">
                Répondez à notre questionnaire spécialisé sur vos douleurs
                dorsales : localisation, intensité, historique, activités
                quotidiennes et facteurs déclenchants.
              </p>
              <div className="step-features">
                <span className="feature-tag">Spécialisé dos</span>
                <span className="feature-tag">15 minutes</span>
                <span className="feature-tag">Sécurisé</span>
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
              <h3 className="step-title">Analyse physiothérapique</h3>
              <p className="step-description">
                Un physiothérapeute expert en troubles dorsaux analyse votre
                profil et sélectionne les exercices les plus adaptés à votre
                type de mal de dos.
              </p>
              <div className="step-features">
                <span className="feature-tag">Expert dos</span>
                <span className="feature-tag">24h max</span>
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
              <h3 className="step-title">Vos exercices anti-mal de dos</h3>
              <p className="step-description">
                Recevez vos fiches PDF d'exercices fonctionnels évolutives
                spécialement conçus pour soulager et prévenir vos douleurs
                dorsales. Accessible via votre tableau de bord.
              </p>
              <div className="step-features">
                <span className="feature-tag">Exercices ciblés</span>
                <span className="feature-tag">PDF téléchargeable</span>
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
                Pourquoi les exercices fonctionnels soulagent le mal de dos ?
              </h2>
              <p className="education-description">
                <strong>90% des douleurs dorsales (HAS)</strong> peuvent être
                soulagées grâce à des exercices adaptés et fonctionnels.
                Contrairement aux médicaments qui masquent temporairement la
                douleur, les exercices ciblés s'attaquent aux causes profondes :
                faiblesse musculaire, déséquilibres posturaux et rigidité
                articulaire.
              </p>

              <div className="education-benefits">
                <div className="benefit-item">
                  <div className="benefit-icon">🎯</div>
                  <div className="benefit-content">
                    <h4>Renforcement ciblé</h4>
                    <p>
                      Renforcez les muscles du dos, de la ceinture abdominale et
                      du bassin pour un soutien optimal de votre colonne
                      vertébrale.
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">⚖️</div>
                  <div className="benefit-content">
                    <h4>Correction posturale</h4>
                    <p>
                      Prenez conscience et corrigez les déséquilibres
                      musculaires ayant un impact dans vos douleurs
                      quotidiennes.
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">🔄</div>
                  <div className="benefit-content">
                    <h4>Amélioration de la mobilité</h4>
                    <p>
                      Retrouvez votre amplitude de mouvement et réduisez les
                      raideurs grâce à des étirements spécifiques.
                    </p>
                  </div>
                </div>

                <div className="benefit-item">
                  <div className="benefit-icon">🛡️</div>
                  <div className="benefit-content">
                    <h4>Prévention durable</h4>
                    <p>
                      Prévenez la réapparition des douleurs en développant de
                      bonnes habitudes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="education-stats">
              <div className="stat-card">
                <div className="stat-number">90%</div>
                <div className="stat-label">
                  des maux de dos soulagés par l'exercice
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-number">6 sem.</div>
                <div className="stat-label">
                  plan de réhabilitation evolutif sur 6 semaines
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
              Pourquoi choisir MyoCare pour votre dos
            </h2>
            <p className="section-subtitle">
              Une solution spécialisée dans les troubles dorsaux
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card modern">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">🎯</div>
              </div>
              <h3 className="feature-title">Spécialisation dos</h3>
              <p className="feature-description">
                Nos physiothérapeutes sont spécialisés dans les troubles
                dorsaux. Chaque exercice est sélectionné selon votre type de mal
                de dos.
              </p>
              <ul className="feature-benefits">
                <li>Expertise troubles dorsaux</li>
                <li>Exercices ciblés lombaires</li>
                <li>Approche posturale</li>
              </ul>
            </div>

            <div className="feature-card modern">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">⚡</div>
              </div>
              <h3 className="feature-title">Accompagnement structuré</h3>
              <p className="feature-description">
                Un plan d'exercices progressif que vous pouvez suivre à votre
                rythme. Chaque personne évolue différemment selon sa condition
                et son engagement.
              </p>
              <ul className="feature-benefits">
                <li>Exercices à votre rythme</li>
                <li>Suivi progressif</li>
                <li>Résultats variables*</li>
              </ul>
            </div>

            <div className="feature-card modern">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">👨‍⚕️</div>
              </div>
              <h3 className="feature-title">Approche complémentaire</h3>
              <p className="feature-description">
                MyoCare complète votre suivi médical traditionnel sans le
                remplacer. Une approche intégrée pour votre bien-être.
              </p>
              <ul className="feature-benefits">
                <li>Complément médical</li>
                <li>Approche holistique</li>
                <li>Suivi personnalisé</li>
              </ul>
            </div>
          </div>

          <div className="medical-note">
            <p>
              <small>
                * Les résultats peuvent varier d'une personne à l'autre selon la
                condition physique, l'assiduité dans la pratique et la nature du
                trouble dorsal. MyoCare ne garantit pas de résultats
                spécifiques.
              </small>
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-content">
            <h2 className="cta-title">
              Prêt à démarrer votre plan d'exercices ?
            </h2>
            <p className="cta-description">
              Rejoignez des milliers de personnes qui font confiance à MyoCare
              pour les accompagner dans leur démarche de mieux-être.
            </p>
            <div className="cta-stats">
              <div className="stat">
                <span className="stat-number">2500+</span>
                <span className="stat-label">Utilisateurs accompagnés</span>
              </div>
              <div className="stat">
                <span className="stat-number">150+</span>
                <span className="stat-label">Experts du dos</span>
              </div>
              <div className="stat">
                <span className="stat-number">95%</span>
                <span className="stat-label">Taux de satisfaction</span>
              </div>
            </div>
            <button className="cta-button primary large">
              <span>Commencer mon diagnostic du dos</span>
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
