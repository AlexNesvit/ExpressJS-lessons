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

`const port = 3010;`

Étape 4 : Maintenant, tu dois écouter les connexions entrantes. Pour cela, utilise `app.listen`.
```bash
app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
```

Étape 5 : Utilise ton terminal (assure-toi que tu es dans le bon répertoire) et exécute `node index.js`

➡️ Tu devrais voir `Server is listening on port 3010`.

Étape 6 : Maintenant, va dans ton navigateur et accède à `localhost:3010` ; Tu devrais voir `"Cannot GET /"`.

➡️ Cette erreur est normale, nous avons créé le serveur, mais nous n'avons pas encore de routes. Tu vas devoir ajouter plus de code dans ton application et recharger le serveur (ce qui signifie l'arrêter en utilisant `Ctrl+C` et exécuter à nouveau la commande node).

## ️⚙️ Installer Nodemon

Recharger ton serveur tout le temps peut être assez ennuyeux, pour éviter cela, tu peux utiliser un paquet `Node` appelé `Nodemon`.

`Nodemon` écoutera les changements dans tes fichiers et redémarrera automatiquement le serveur.

Étape 1 : Installer nodemon en utilisant `npm`.

`npm install nodemon --save-dev`



☝🏻 Nous devons installer `nodemon` dans les dépendances de développement, car nous n'utiliserons `nodemon` que lorsque nous développerons notre projet.
Nous ne voulons pas que ce paquet soit installé et utilisé en production.

Étape 2: Adapte ton `package.json`, en modifiant `"main"` et `"scripts"` :
```bash
"main": "index.js",
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```
C'est une pratique courante de réserver le `script start` pour la prodution, et d'avoir un `script dev` pour le développement : ici, le `script dev` exécutera `nodemon` au lieu de `node`.

Étape 3: Utilise `npm run dev` pour démarrer le serveur.

## 🛣️ Créer une route

Le routage consiste à déterminer comment une application répond à une `requête du client` vers une `route de l'application`. On parle également de `"point d'entrée"`, ou `endpoint` en anglais. Un `point d'entrée` est un chemin d'URL (`/, /about, contact, etc.`) associé une méthode de requête HTTP spécifique (`GET, POST, etc.`).

La définition des routes devrait ressembler à ceci :

`app.METHOD(PATH, HANDLER)`



    app est une instance d'Express.

    `METHOD` est une méthode de requête `HTTP`. (`GET, POST, PUT, DELETE`)

    `PATH` est un chemin sur le serveur.

    `HANDLER` est la fonction exécutée lorsque le chemin est reconnu


### Créons une route GET !

Quand quelqu'un fait une requête `GET` vers la racine de notre serveur, nous voulons envoyer comme réponse `"Welcome to Express"`. Donc en partant de `app.METHOD(PATH, HANDLER)` :

La METHOD est `get` :

`app.get(PATH, HANDLER);`

Le PATH est `/` :

`app.get("/", HANDLER)`

Le HANDLER doit envoyer `"Welcome to Express"` :
```bash
app.get("/", (req, res) => {

  res.send("Welcome to Express");

});
```
Maintenant, va sur `localhost:3010` : tu dois voir `"Welcome to Express"` s'afficher.

##  Allons plus loin:


### ⚙️ HANDLER

Le `HANDLER` est une fonction exécutée lorsque la route est déclenchée par une `requête`. Tu verras souvent dans la documentation ou les forums cette fonction `"fusionnée"` avec la déclaration de la route :

`app.get('/search', (req, res) => {});`

Jusqu'à ce que tu sois vraiment à l'aise avec `Express`, il est important de séparer dans ton esprit la déclaration de la `route` et le `HANDLER`. C'est pourquoi nous préférerons dans ce module écrire :
```bash
const handler = (req, res) => {};

app.get("/search", handler);
```
Le `HANDLER` prend 2 paramètres, correspondant à 2 objets HTTP définis dans `Express` :

un objet de type `Request` (par convention, le paramètre est appelé `request` ou plus souvent `req`)

un objet de type `Response` (par convention, le paramètre est appelé `response` ou plus souvent `res`)

Chacun de ces objets a de nombreuses `méthodes` et `propriétés`.

ex: `response.send("Welcome to Express");`

### ❓Request

L'objet de requête représente la requête `HTTP`. Il contient des informations telles que :

l'en-tête `HTTP`,

Le corps de la requête (ce qui est envoyé avec la requête),

Données de formulaire,

Paramètres de l'URL et `query string`, ...










