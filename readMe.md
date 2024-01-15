# Explaination

Créer un projet => npm init à l'intérieur
Puis npm install nodemon: 

Le package.json doit ressembler à ça:

{
  "name": "testing",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "nodemon": "^3.0.2"
  }
}
Le script à ajouter est celui-ci: "test": "nodemon index.js"

Et ensuite pour le lancer, c'est npm test
# Test-Without_framework
