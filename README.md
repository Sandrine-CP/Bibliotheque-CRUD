# CRUD Practice Project - React & Express

## 📚 Introduction

Ce projet est une application CRUD (Create, Read, Update, Delete) complète permettant de gérer une bibliothèque de livres. L'objectif principal est de fournir une base pour l'apprentissage et la pratique des opérations CRUD côté front-end (React) et back-end (Express avec une base de données MySQL).

L'application utilise **React** et **Material-UI** pour la partie front-end, avec un design responsive et moderne, tandis que **Express.js** et **MySQL** gèrent les opérations serveur et la persistance des données.

## 🎨 Aperçu

![Aperçu de l'application](./assets/preview.png)

### Fonctionnalités :
- **Liste des livres** : Affichage de la liste de tous les livres disponibles dans une galerie de cartes.
- **Détails d'un livre** : Visualisation des informations détaillées d'un livre.
- **Ajout de livre** : Formulaire permettant l'ajout d'un nouveau livre.
- **Modification d'un livre** : Édition des informations d'un livre existant.
- **Suppression d'un livre** : Suppression d'un livre avec confirmation.
- **Messages de succès/erreur** : Affichage de notifications lors des interactions CRUD.
- **Bouton de défilement vers le haut** : Navigation facilitée pour les longues listes de livres.

## 🛠️ Technologies Utilisées

- **Front-End** :
  - React.js
  - React Router Dom
  - Axios
  - Material-UI
- **Back-End** :
  - Express.js
  - MySQL (Base de données)
- **Outils de Développement** :
  - Node.js
  - Nodemon
  - ESLint et Biome pour le linting
  - Vite pour le démarrage rapide du projet

## Structure du projet
 CRUD-Practice/
├── client/                 # Répertoire du front-end React
│   ├── public/             # Fichiers statiques
│   ├── src/                # Code source de l'application React
│   │   ├── assets/         # Images, icônes, etc.
│   │   ├── components/     # Composants de l'interface utilisateur
│   │   ├── pages/          # Pages (BookList, BookDetail, BookForm)
│   │   ├── services/       # Services pour les appels API (ex: api.js)
│   │   ├── App.jsx         # Composant principal
│   │   └── main.jsx        # Point d'entrée React
│   └── package.json        # Dépendances front-end
├── server/                 # Répertoire du back-end Express
│   ├── app/                # Logique métier (contrôleurs, routeurs)
│   ├── database/           # Configuration de la base de données
│   ├── index.js            # Point d'entrée du serveur Express
│   └── package.json        # Dépendances back-end
├── README.md               # Documentation du projet
└── .gitignore              # Fichiers et répertoires à ignorer par Git

## ⚙️ Installation

### 1. Prérequis

- Node.js (v14.17.0 ou supérieur)
- MySQL (ou tout autre SGBD compatible)
- Git

### 2. Cloner le dépôt

```bash
git clone https://github.com/Sandrine-CP/CRUD-Practice.git
cd CRUD-Practice

### Comment utiliser ce modèle ?

1. Crée un fichier `README.md` à la racine de ton projet.
2. Copie le contenu ci-dessus et ajuste les détails selon les spécificités de ton projet.
3. Ajoute les informations de configuration spécifiques si nécessaire (par exemple, les variables d'environnement ou les scripts SQL).
4. Publie-le sur ton dépôt GitHub.

Cela devrait fournir un aperçu complet et structuré de ton projet, facilitant ainsi la compréhension et l'utilisation par d'autres développeurs.

🌟 Fonctionnalités à Améliorer

Quelques idées pour améliorer l’application :

	•	Gestion de l’authentification : Ajouter une connexion utilisateur pour restreindre l’accès aux modifications.
	•	Recherche de livres : Filtrer les livres par titre, auteur ou catégorie.
	•	Filtrage avancé : Tri par prix, date d’ajout, etc.
	•	Pagination : Charger les livres par lots pour améliorer les performances.

🔗 Liens Utiles

	•	Documentation de React
	•	Documentation de Material-UI
	•	Documentation de Node.js
	•	Documentation d’Express

🤝 Contribuer

Les contributions sont les bienvenues ! Si vous avez des suggestions ou des bugs à corriger, n’hésitez pas à ouvrir une issue ou à soumettre une pull request.

	1.	Fork le projet
	2.	Créer une branche (git checkout -b feature/amazing-feature)
	3.	Commit les modifications (git commit -m 'Add amazing feature')
	4.	Poussez la branche (git push origin feature/amazing-feature)
	5.	Ouvrir une pull request

✨ Auteur

Sandrine CP

	•	GitHub
	•	LinkedIn

📜 Licence

Ce projet est sous licence MIT.
