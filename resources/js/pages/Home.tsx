import { Head, Link } from '@inertiajs/react';

import { dashboard, login, register } from '@/routes';

export default function Welcome() {
    return (
        <>
            <Head title="Accueil" />
            <div className="va-gradient-bg">
                <div className="va-orb va-orb--violet" />
                <div className="va-orb va-orb--blue" />

                <div className="va-container">
                    <nav className="va-home-nav">
                        <a href="/" className="va-logo">
                            <span className="va-logo-icon">V</span>
                            VaauTableau
                        </a>
                        <div className="va-nav-actions">
                            <Link href={login()} className="va-btn va-btn--outline">
                                Connexion
                            </Link>
                            <Link href={register()} className="va-btn va-btn--primary">
                                S'inscrire
                            </Link>
                        </div>
                    </nav>

                    <section className="va-home-hero">
                        <span className="va-badge">Gestion de classe simplifiée</span>
                        <h1 className="va-title">
                            Votre tableau interactif pour la classe
                        </h1>
                        <p className="va-subtitle">
                            Gérez vos élèves, ajoutez leurs photos et tirez un nom au hasard
                            en un clic. Un outil moderne, élégant et pensé pour les enseignants.
                        </p>
                        <div className="va-home-cta">
                            <Link href={dashboard()} className="va-btn va-btn--primary va-btn--lg">
                                Accéder au tableau
                            </Link>
                            <Link href={login()} className="va-btn va-btn--outline va-btn--lg">
                                Se connecter
                            </Link>
                        </div>
                    </section>

                    <section className="va-features">
                        <article className="va-feature-card">
                            <div className="va-feature-icon">👥</div>
                            <h2 className="va-feature-title">Gestion des élèves</h2>
                            <p className="va-feature-desc">
                                Ajoutez facilement nom, prénom et photo de chaque élève
                                de votre classe en quelques secondes.
                            </p>
                        </article>
                        <article className="va-feature-card">
                            <div className="va-feature-icon">🎲</div>
                            <h2 className="va-feature-title">Tirage au sort</h2>
                            <p className="va-feature-desc">
                                Sélectionnez un élève au hasard pour les interrogations,
                                les exposés ou toute activité en classe.
                            </p>
                        </article>
                        <article className="va-feature-card">
                            <div className="va-feature-icon">📊</div>
                            <h2 className="va-feature-title">Tableau de bord</h2>
                            <p className="va-feature-desc">
                                Visualisez toute votre classe d'un coup d'œil
                                avec un affichage clair et moderne.
                            </p>
                        </article>
                    </section>

                    <footer className="va-home-footer">
                        VaauTableau — Outil de gestion de classe
                    </footer>
                </div>
            </div>
        </>
    );
}
