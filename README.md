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


### req.params

Tu peux capturer certaines valeurs de l'URL en utilisant `req.params`. Imaginons que tu veuilles accéder à un profil d'utilisateur spécifique, en utilisant son nom comme référence.

Tu peux marquer la présence d'un paramètre dans le path de la route : on accédera à la valeur de ce paramètre en utilisant `req.params`.

Faisons cela ! Créons une nouvelle route :
```bash
const welcomeName = (req, res) => {
  res.send(`Welcome ${req.params.name}`);
};

app.get("/users/:name", welcomeName);
```
La partie `:name` est le marqueur d'un paramètre : `:` est le préfixe qui marque un paramètre, `name` est ici le nom du paramètre (le nom d'un utilisateur dans notre exemple). Maintenant, navigue vers `localhost:3010/users/Bob`. Tu devrais voir `"Welcome Bob"`.

Change le nom à la fin de l'url et tu devrais voir un nouveau nom quand la page se rafraîchit.

### ❗Response

L'objet `response` représente la `réponse HTTP` que le serveur envoie au client.
Il peut contenir des données, des messages (validation, erreur), ou simplement un état correspondant à l'état de la requête traitée par le serveur. 

Tu peux vérifier toutes les `méthodes` et propriétés disponibles pour l'objet de `requête` sur la documentation d'Express :

Voici quelques `méthodes` utiles de l'objet Response :

`res.send` permet d'envoyer des données `String, Object, Array, Buffer`

```bash
(req, res) => {
  res.send(‘Validated’);
};
```

`res.status` pour joindre un message de statut dans la réponse. Généralement combiné avec le `"send"`:
```bash
(req, res) => {
  res.status(404).send(‘Cannot find /foo’);
};
```


`res.sendStatus` pour n'envoyer que le statut de la requête:
```bash
(req, res) => {
  res.sendStatus(200);
};
```

`res.json` pour envoyer un objet au format `JSON`:
```bash
(req, res) => {
  res.json({ result: ‘10 items found’ });
};
```

`res.end` permet de terminer la requête sans envoyer de données particulières:
```bash
(req, res) => {
  res.end(); // or res.status(404).end();
};
```

Habituellement, quand nous créons un serveur, nous utilisons une réponse formatée en `JSON`. Imaginons que l'utilisateur veuille accéder à un catalogue de cocktails.

En accédant à `/api/cocktails` le serveur lui renverra un `JSON` avec tous les cocktails disponibles.
```bash
const cocktails = [
  {
    id: 1,
    name: "Margarita",
  },
  {
    id: 2,
    name: "Mojito",
  },
  {
    id: 3,
    name: "Cuba Libre",
  },
];
const getCocktails = (req, res) => {
  res.status(200).json(cocktails);
};
app.get("/api/cocktails", getCocktails);
```

Accède à `localhost:3010/api/cocktails` et tu devrais voir la liste des cocktails au format `JSON` ! 


## Express 01.1 - 🧪 TDD

### ⚙️ Passons à l'installation

Étape 1 : Commence par ouvrir ta quête précédente avec ta route `GET` et par créer une nouvelle branche `quest_2.1_test` :

`git switch -c quest_2.1_test`

Étape 2 : Dans un second temps, installe le framework de test `jest` (l'un des plus populaire en `JS`) :

`npm install --save-dev jest`

Étape 3 : Dans un troisième temps, ajoute la librairie `supertest` :

`npm install --save-dev supertest`

Une fois les modules installés, nous allons modifier le package`.json`. Dans la partie `script`, remplacer la commande `exécutée` lors du `npm run test` par `jest`. Cela nous facilitera la vie par la suite.
```bash
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  ```

## Sans précipitation, commençons par un peu d'architecture.

En effet, organiser correctement ses fichiers de code dès le début est une bonne pratique. Cela te permettra de t'y retrouver plus facilement au fur et à mesure que ton code grandit et se complexifie.

Etape 1 : Structure du serveur

Lorsque je lance des tests, je n'ai pas besoin de faire tourner mon serveur en `localhost:PORT`. J'ai juste besoin d'accéder à mes routes. Pour rappel, faire tourner le serveur express avec `.listen()` sert à recevoir des requêtes depuis l'extérieur.
On va donc dissocier notre app du `.listen()`.
Pour cela, crée un fichier `app.js` à coté de ton `index.js`

Dans le fichier créé précedemment, copie le code de ton `index.js`. Supprime ensuite tous les éléments faisant référence au lancement du serveur `(PORT et app.listen())`. Ton fichier doit ressembler à cela (avec le tableau movies qui contient les données de la quête précédente) :
```bash
const express = require("express");
const app = express();

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const movies = [/* ... */];

const getMovies = (req, res) => {
  res.json(movies);
};

app.get("/api/movies", getMovies);

const getMovieById = (req, res) => {
  const id = parseInt(req.params.id);

  const movie = movies.find((movie) => movie.id === id);

  if (movie != null) {
    res.json(movie);
  } else {
    res.sendStatus(404);
  }
};

app.get("/api/movies/:id", getMovieById);

module.exports = app;
```

Etape 3 : Mise à jour de `index.js`

Dans `index.js`, supprime tous les éléments faisant référence au router (Ce que tu as gardé dans `app.js`) et en haut de ton fichier, pense à require ton app :
```bash
const app = require('./app');

const port = 3010;

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
  ```

Normalement, si tu testes tes routes avec un `npm run dev`, tout fonctionne comme avant. La différence est que les tests que nous allons mettre en place pourront maintenant accéder à nos routes (app) sans écouter sur un port.

## Et maintenant, à nos (vrais) tests

Commence par créer un dossier `tests` pour y mettre tous tes fichiers de test.
Puis ajoute un fichier `movies.test.js`. Attention, le nom du fichier est fondamental :

`movies` indique à tes collègues quelle partie de code est testée
test indique à `Jest` d'exécuter ce fichier lors du lancement des tests (`npm run test`). Ce process est automatique. `Jest` va parcourir l'ensemble de nos fichiers à la recherche de cette extension.
`js` indique que c'est un fichier `JavaScript`

Super !!!

Dans ce fichier, commence par importer supertest et app :
```bash
const request = require("supertest");
const app = require("../app");
```

Etape 1 : Pour commencer une série de tests, on commence par écrire `describe`.

`describe` est une fonction issue de la librairie Jest. Comme tous les outils de Jest, elle est disponible même si Jest n'est pas explicitement importée dans le fichier. La fonction `describe` accepte 2 arguments. Le premier est une `chaîne de caractères décrivant` pour le développeur la série de tests qui va être effectuée. Le deuxième est `une fonction "callback" à exécuter`.
```bash
const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
});
```

Etape 2 : Dans la fonction fléchée, on va initialiser un test via `it`.

On utilisera une fonction `it` par test à réaliser dans notre série de tests.

it est une fonction issue de la librairie Jest également. Elle accepte 2 arguments. Le premier est une chaîne de caractères décrivant pour le développeur le test en question qui va être effectué. Le deuxième est une fonction "callback" à exécuter.

Astuce : la convention veut que nous profitions du mot clé it pour écrire une phrase intelligible (it should return all movies, Cela doit retourner tous les films)

Dans notre cas, nous allons tester des requêtes sur notre api maison. Notre callback va donc être asynchrone.
```bash
const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    /** Code your test here */
  });
});
```

Etape 3 : Entrons dans la logique de notre test. Je veux tester le résultat de ma requête `GET api/movies`. Pour cela, nous allons utiliser la fonction `request` de l'import.

`request` est une fonction issue de la librairie supertest. Elle accepte 1 argument. Celui-ci est le point d'entrée de notre `api`, soit `app` (en import) dans notre cas présent. On peut ensuite enchaîner les opérations. Nous allons donc `get()` notre route `/api/movies` et mémoriser la response dans une variable pour pouvoir l'analyser dans un second temps.
```bash
const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");
  });
});
```

Etape 4 : On peut maintenant tester le résultat de notre requête. Pour cela, on va utiliser la méthode `expect()` de Jest et valider nos attentes ("expectation" en anglais). On peut en demander autant que l'on veut. Une par condition de test.
```bash
const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.status).toEqual(200);
  });
});
```
Et c'est fini : tu n'as plus qu'à lancer la commande `npm run test` pour exécuter la série de test.


## ⚙️ Mise en place de l'application Express

Commence par `forker` ce dépôt sur ton compte GitHub. `Clone` ensuite ton `fork` sur ta machine. Jette un œil au code : c'est la même application que celle que tu as créée dans la quête précédente, sauf que les gestionnaires de films ont été déplacés dans un fichier séparé `src/controllers/movieControllers.js`. De cette manière, notre `src/app.js` se charge uniquement de déclarer les routes :
```bash
const express = require("express");


const app = express();


const movieControllers = require("./controllers/movieControllers");


app.get("/api/movies", movieControllers.getMovies);

app.get("/api/movies/:id", movieControllers.getMovieById);


module.exports = app;
```

Nous allons ajouter plus de routes dans notre application : il est important d'organiser le code avant qu'il ne devienne trop gros.

Comme tu t'en souviens, nous utilisons le port 3010 dans notre application comme port par défaut sur lequel le serveur écoutera. Mais s'il n'est pas disponible, tu peux le changer pour autre chose ! Cela peut être utile pour éviter les conflits de port avec une autre application en cours d'exécution sur ta machine qui utilise déjà le port 3010.
Note que c'est une bonne pratique de gérer cela via un fichier d'environnement : un fichier `.env` contenant ta configuration spécifique. Ce fichier `.env` peut alors être chargé en utilisant le module `dotenv`.

`Dotenv` est un module sans dépendance qui charge les variables d'environnement à partir d'un fichier `.env` dans `process.env`. Cela nous permet de stocker des informations sensibles (noms d'utilisateur, mots de passe, tokens...) dans un fichier `.env` qui ne sera pas envoyé sur GitHub. Par convention, les variables d'environnement sont en MAJUSCULES, pour faire la différence avec les variables classiques.

Si tu modifies le port dans ton fichier `.env` et que tu lui donnes la valeur `5001` par exemple, garde simplement à l'esprit que tu devras te rendre sur `localhost:5001` au lieu de `localhost:3010` lorsque tu vois un lien `"localhost"` dans les quêtes.

Commence par installer `dotenv` dans ton projet :

`npm install dotenv`

Tu vas maintenant créer ton fichier `.env`. Tu ne devras pas le partager sur GitHub, car il contiendra bientôt des informations sensibles (mot de passe de la base de données par exemple). Mais si tu ne le partages pas, comment les `"cloneurs"` de ton projet sauront-ils ce qui doit être déclaré dans le fichier ? Une autre bonne pratique consiste à partager un exemple de fichier au lieu du véritable `.env`. Le fichier d'exemple permettra aux cloneurs de savoir quelles variables doivent être déclarées pour ton application. C'est pourquoi tu peux voir un fichier `.env.sample` à la racine du projet. Copie-le :

`cp .env.sample .env`

Et ajoute ce `.env` à ton `.gitignore`. Regarde maintenant ton fichier `index.js.` Pour utiliser le module `dotenv`, tu dois ajouter cette ligne en haut de ton fichier :

`require("dotenv").config();`

Cela chargera ton fichier `.env` et remplira `process.env` avec toutes tes variables.
Maintenant, tu peux consommer la variable `APP_PORT` comme suit:

`const port = process.env.APP_PORT;`

Maintenant que ton environnement est configuré, tu peux exécuter `npm run dev`, aller sur `localhost:3010` et vérifier que ton serveur est en cours d'exécution.















