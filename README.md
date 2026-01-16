# 🏍️ BV Express

API Express avec l'intégration du builder bvbuilder

---

## 📋 Table des matières

- [Installation & Configuration](#-installation--configuration)
- [Lancement du Projet](#-lancement-du-projet)
- [Fonctionnalités Principales](#-fonctionnalités-principales)
- [Documentation API](#-documentation-api-swagger)
- [Tests](#-tests)
- [Structure du Projet](#-structure-du-projet)
- [Technologies Utilisées](#-technologies-utilisées)
- [Contribution](#-contribution)

---

## 🚀 Installation & Configuration

### Prérequis

- Node.js (version 14 ou supérieure)
- npm
- Mysql

### Installation des dépendances

```bash
npm install
```

### Configuration des variables d'environnement

Le projet nécessite un fichier `.env` pour fonctionner correctement . 

1. Copiez le fichier d'exemple :
```bash
cp .env.example .env
```

2. Éditez le fichier `.env` avec vos propres paramètres :
```env
# Exemple de configuration
PORT=3000
DB_HOST=localhost
DB_USER=
DB_PASS=
DB_NAME=moto
```
Mettre egalement le code de db.sql dans votre base de données pour al gestion des users les role : admin / user
---

## 🏃 Lancement du Projet

### Mode Développement
Avec rechargement automatique à chaque modification :
```bash
npm run dev
```

### Mode Production
```bash
npm start
```

L'API sera accessible par défaut sur `http://localhost:3000`

---

## ✨ Fonctionnalités Principales

- ** Authentification JWT** : Sécurisation des accès par jeton JSON Web Token
---

## 📖 Documentation API (Swagger)

Accédez à la documentation interactive pour tester les endpoints et consulter les schémas de données :

🔗 **[http://localhost:3000/api-docs](http://localhost:3000/api-docs)**

La documentation Swagger vous permet de :
- Visualiser tous les endpoints disponibles
- Tester les requêtes directement depuis l'interface
- Consulter les schémas de requête et de réponse
- Voir les codes de statut et messages d'erreur

---

## 🧪 Tests

Le projet intègre des tests unitaires pour garantir la fiabilité des fonctionnalités :

```bash
npm test
```


---

## 📁 Structure du Projet

```
bbv-express/
├── src/
│   ├── controllers/     # Logique métier des routes
│   ├── models/          # Modèles de données
│   ├── routes/          # Définition des routes API
│   ├── middlewares/     # Middlewares (auth, validation, etc.)
│   └── config/          # Configuration de l'application
├── tests/               # Tests unitaires et d'intégration
├── .env                 # Configuration
├── .env.example         # Exemple de configuration
├── .gitignore
├── package.json
└── README.md
```

---

## 🛠️ Technologies Utilisées

- **Node.js** - Environnement d'exécution JavaScript
- **Bvbuilder** - Permet de build, model,controller, route et table via commande
- **Express.js** - Framework web minimaliste
- **MySql** - Base de données SQL
- **JWT** - Authentification par jetons
- **Swagger** - Documentation API interactive
- **Jest** - Framework de tests

---

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à me contacter.
