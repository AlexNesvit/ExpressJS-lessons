# Express Lessons

Express Lessons est un projet éducatif conçu pour apprendre les bases et les fonctionnalités du framework Express.js. L’objectif de ce projet est d’aider les développeurs débutants à comprendre comment créer des applications web avec Express.js, des routes simples aux fonctionnalités plus avancées comme les middlewares et la gestion des données.

## 📋 Fonctionnalités du projet:

	•	Création d’un serveur simple avec `Express.js`.
	•	Gestion des routes : `GET, POST, PUT, DELETE`.
	•	Utilisation des middlewares pour traiter les requêtes.
	•	Configuration des fichiers .env pour gérer les variables d’environnement.
	•	Envoi et réception des données au format `JSON`.

## ⚙️ Installation

Étape 1 : Commence par ouvrir ton terminal et par créer un répertoire :
`mkdir express-app`

Étape 2 : Navigue dans ce répertoire :
`cd express-app`

Étape 3 : Initialise ton projet :
`npm init -y`

Étape 4 : Maintenant que le projet est initialisé, installe Express :
`npm install express`

## 💯 Bien joué ! Tu peux maintenant utiliser Express!

## 🏗️ Créer ton application express

Étape 1 : Crée un fichier javascript pour contenir tout le code de ton application. Appelons-le `index.js`. Dans ce fichier, importe express :

`const express = require('express');`

Étape 2 : Crée une application en appelant le module express. La convention est de l'appeler app :

`const app = express();`

➡️ Maintenant, nous avons accès à de nombreuses méthodes express en utilisant app.METHOD (ex : app.get(), app.post(), etc...)

    👌🏻 Tu peux trouver la liste des méthodes disponibles sur la [documentation d'express](https://expressjs.com/fr/4x/api.html).

Étape 3 : Crée une constante pour stocker le numéro du port sur lequel ton serveur sera disponible. Pour cet exemple, utilisons le port 5000.


