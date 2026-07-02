# 🎲 VaauTableau

> *« Qui va répondre à la question ? »* — fini les regards fuyants vers la fenêtre.

**VaauTableau** est un petit tableau de bord interactif pour les enseignants. Ajoutez vos élèves, mettez-leur une tête (photo), et laissez le hasard choisir qui monte au tableau. Simple, rapide, et un peu magique. ✨

---

## 🎯 C'est quoi exactement ?

Imaginez un tableau de classe numérique, mais en plus stylé et sans craie sur les doigts.

| Fonctionnalité | Description |
|---|---|
| 👥 **Gestion des élèves** | Ajoutez nom, prénom et photo pour chaque élève |
| 🎲 **Tirage au sort** | Un clic, un élève au hasard — la justice du hasard |
| 📊 **Dashboard** | Visualisez toute votre classe d'un coup d'œil |
| 🔐 **Compte personnel** | Chaque professeur gère sa propre classe |
| 🎨 **Design violet & bleu** | Parce qu'un outil pédagogique peut être beau |

---

## 🖼️ Aperçu

```
┌─────────────────────────────────────────────┐
│  VaauTableau          [Connexion] [S'inscrire] │
│                                               │
│     Votre tableau interactif pour la classe   │
│                                               │
│        [ Accéder au tableau ]  [ Se connecter ] │
│                                               │
│   👥 Gestion    🎲 Tirage    📊 Dashboard     │
└─────────────────────────────────────────────┘
```

---

## 🛠️ Stack technique

Ce projet ne juge pas votre stack — il l'assume fièrement :

- **Backend** — [Laravel 13](https://laravel.com) + PHP 8.3+
- **Frontend** — [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org) via [Inertia.js](https://inertiajs.com)
- **Style** — [Tailwind CSS 4](https://tailwindcss.com) + thème custom violet/bleu
- **Auth** — [Laravel Fortify](https://github.com/laravel/fortify) + support passkeys
- **Base de données** — SQLite par défaut (MySQL/PostgreSQL possibles)
- **Build** — [Vite 8](https://vitejs.dev)

---

## 🚀 Installation

### Prérequis

- PHP 8.3+
- Composer
- Node.js 20+
- Extension PHP `sqlite3` (pour la config par défaut)

### En 4 commandes (presque magique)

```bash
# 1. Cloner le projet
git clone <url-du-repo> vaautableau
cd vaautableau

# 2. Tout installer d'un coup
composer setup

# 3. Lier le stockage (pour les photos des élèves)
php artisan storage:link

# 4. Lancer le projet
composer dev
```

L'app sera disponible sur [http://localhost:8000](http://localhost:8000).

### Avec Laravel Herd 🐑

Si vous utilisez déjà [Laravel Herd](https://herd.laravel.com), le site est probablement accessible directement via `https://vaautableau.test` — il ne reste qu'à lancer Vite :

```bash
npm install
npm run dev
```

---

## 📦 Données de démo (optionnel)

Pour peupler la base avec des élèves fictifs :

```bash
php artisan migrate --seed
```

> ⚠️ Le seeder crée des élèves liés à l'utilisateur `id = 1`. Créez d'abord un compte, puis lancez le seeder.

---

## 🗺️ Parcours utilisateur

```
Accueil (/)
    │
    ├── S'inscrire / Se connecter
    │
    └── Dashboard (/dashboard)  ←── 🎲 Tirer un élève
            │
            └── Gestion des élèves (/eleves)  ←── Ajouter un élève
```

1. **Créez un compte** sur la page d'accueil
2. **Ajoutez vos élèves** avec leurs photos dans *Gestion des élèves*
3. **Retournez au dashboard** et cliquez sur *Tirer un élève*
4. **Admirez le résultat** — et priez pour que ce ne soit pas encore Kevin

---

## 📁 Structure du projet

```
vaautableau/
├── app/
│   ├── Http/Controllers/
│   │   ├── HomeController.php      # Accueil + Dashboard
│   │   └── EleveController.php     # CRUD élèves
│   └── Models/Eleve.php
├── resources/
│   ├── css/vaautableau.css       # 🎨 Thème violet & bleu
│   └── js/pages/
│       ├── Home.tsx              # Page d'accueil
│       ├── Dashboard.tsx         # Tableau de bord + tirage
│       └── eleve/Index.tsx       # Formulaire + liste élèves
├── database/migrations/          # Table `eleves`
└── routes/web.php
```

---

## ⚙️ Configuration

Copiez `.env.example` vers `.env` et ajustez si besoin :

```env
APP_NAME=VaauTableau
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite
```

Les photos des élèves sont stockées dans `storage/app/public/eleves/` et servies via `/storage/`.

---

## 🧪 Tests & qualité

```bash
# Tests PHP (Pest)
php artisan test

# Lint PHP
composer lint

# Lint + types JS/TS
npm run lint
npm run types:check
```

---

## 🤝 Contribuer

Les PR sont les bienvenues ! Quelques idées si vous cherchez inspiration :

- [ ] Historique des tirages
- [ ] Mode « exclure les déjà tirés »
- [ ] Export PDF de la classe
- [ ] Son de tambour au moment du tirage 🥁

---

## 📜 Licence

MIT — faites-en ce que vous voulez, mais soyez gentils avec vos élèves.

---

<p align="center">
  <strong>VaauTableau</strong> — Parce que parfois, le hasard est le meilleur professeur. 🎓
</p>
