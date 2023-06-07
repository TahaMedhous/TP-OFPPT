# Création d’une application en microservices avec Node js

Ce projet est composé de trois dossiers, chacun contenant une partie de l'application. Pour démarrer le projet, vous devez effectuer les étapes suivantes :

## Installation des dépendances

1.  Naviguez vers le premier dossier en utilisant la commande suivante :

    `cd auth-service`

2.  Installez les dépendances en exécutant la commande :

    `npm install`

    Ou si vous utilisez yarn :

    `yarn install`

3.  Répétez les étapes 1 et 2 pour les deux autres dossiers (produit-service et commande-service).

## Démarrage des serveurs

1.  Dans **chaque** dossier, démarrez le serveur en utilisant la commande :

    `npm start`

    Cette commande utilisera `nodemon` pour démarrer le serveur et permettre le rechargement automatique en cas de modification du code.

Si vous rencontrez des problèmes lors du démarrage des serveurs, veuillez vous assurer des points suivants :

- Assurez-vous d'avoir MongoDB et Nodejs installés correctement sur votre machine.
- Vérifiez que les ports nécessaires pour chaque serveur sont disponibles et non utilisés par d'autres applications _(4000, 4001 et 4002 et 27017 pour MongoDB)_.
