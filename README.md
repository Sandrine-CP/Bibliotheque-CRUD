# CRUD Practice Project - React & Express

## 📚 Introduction

Ce projet est une application CRUD (Create, Read, Update, Delete) complète permettant de gérer une bibliothèque de livres. L'objectif principal est de fournir une base pour l'apprentissage et la pratique des opérations CRUD côté front-end (React) et back-end (Express avec une base de données MySQL).

L'application utilise **React** et **Material-UI** pour la partie front-end, avec un design responsive et moderne, tandis que **Express.js** et **MySQL** gèrent les opérations serveur et la persistance des données.

## 🎨 Aperçu

![Aperçu de l'application](https://github.com/Sandrine-CP/CRUD-Practice/blob/main/client/src/assets/preview.png?raw=true)

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
 
## ⚙️ Installation

### 1. Prérequis

- Node.js (v14.17.0 ou supérieur)
- MySQL (ou tout autre SGBD compatible)
- Git

### 2. Cloner le dépôt

```bash
git clone https://github.com/Sandrine-CP/CRUD-Practice.git
cd CRUD-Practice

###3. Configuration de la base de données

	•	Créez une base de données MySQL nommée library.
	•	Importez le fichier SQL (si fourni) ou créez une table books avec les colonnes suivantes :
	•	id (int, auto_increment, primary key)
	•	title (varchar)
	•	description (text)
	•	cover (varchar)
	•	price (decimal)

###4. Variables d’environnement

Créez un fichier .env à la racine de server/ et ajoutez les variables suivantes :
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=library
PORT=5001

###5. Installation des dépendances
# Front-End
cd client
npm install

# Back-End
cd ../server
npm install

###6. Lancement de l’application
# Démarrage du serveur Express
cd server
npm run dev

# Démarrage de l'application React
cd ../client
npm run dev

L’application sera disponible à l’adresse : http://localhost:5173.

🤝 Contribuer

Les contributions sont les bienvenues ! Si vous avez des suggestions ou des bugs à corriger, n’hésitez pas à ouvrir une issue ou à soumettre une pull request.

	1.	Fork le projet
	2.	Créer une branche (git checkout -b feature/amazing-feature)
	3.	Commit les modifications (git commit -m 'Add amazing feature')
	4.	Poussez la branche (git push origin feature/amazing-feature)
	5.	Ouvrir une pull request

✨ Auteur

Sandrine CP

📜 Licence

Ce projet est sous licence MIT.
