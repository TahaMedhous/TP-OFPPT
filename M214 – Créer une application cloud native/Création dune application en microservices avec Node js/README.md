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

## Inscription

- Pour vous inscrire, utilisez Postman ou tout autre outil similaire pour envoyer une requête POST à l'adresse suivante : `http://localhost:4002/auth/register`. Incluez le corps de la requête avec les informations suivantes :

```json
{
  "nom": "Taha",
  "email": "taha@gmail.com",
  "mot_passe": "12345678"
}
```

- Pour vous connecter, utilisez à nouveau Postman ou un outil similaire pour envoyer une requête POST à l'adresse suivante : `http://localhost:4002/auth/login`. Incluez le corps de la requête avec les informations suivantes :

```json
{
  "email": "taha@gmail.com",
  "mot_passe": "12345678"
}
```

Vous recevrez un jeton d'authentification (Bearer token) dans la réponse. **_Assurez-vous de le conserver car il sera utilisé pour les autres opérations._**

## Effectuer des tâches

Une fois connecté, vous pouvez effectuer d'autres tâches en envoyant des requêtes aux adresses appropriées en utilisant le jeton d'authentification reçu.

- Pour ajouter un produit, envoyez une requête POST à l'adresse suivante : `http://localhost:4000/produit/ajouter`. Assurez-vous d'inclure le jeton d'authentification dans l'en-tête de la requête avec le format suivant :

  `Authorization: Bearer <token>`

  Remplacez `<token>` par le jeton d'authentification reçu lors de la connexion.

  Vous devrez également inclure les informations nécessaires dans le corps de la requête, telles que le nom, la description et le prix du produit:

```json
{
  "nom": "Produit 1",
  "description": "Description du produit 1",
  "prix": 100
}
```

- Pour afficher des produits, envoyez une requête POST à l'adresse suivante : `http://localhost:4000/produit/afficher`. Assurez-vous d'inclure le jeton d'authentification dans l'en-tête de la requête. Dans le corps de la requête, incluez les identifiants des produits que vous souhaitez afficher:
  ```json
  {
    "ids": [
      "L'identifiant du produit 1 dans MongoDB",
      "L'identifiant du produit 2 dans MongoDB"
    ]
  }
  ```
- Pour ajouter une commande, envoyez une requête POST à l'adresse suivante : `http://localhost:4001/commande/ajouter`. Assurez-vous d'inclure le jeton d'authentification dans l'en-tête de la requête. Dans le corps de la requête, incluez les identifiants des produits:
  ```json
  {
    "ids": [
      "L'identifiant du produit 1 dans MongoDB",
      "L'identifiant du produit 2 dans MongoDB"
    ]
  }
  ```

---

_Note :_ Assurez-vous d'avoir les serveurs en cours d'exécution et de respecter les bonnes adresses et méthodes HTTP pour chaque tâche. Utilisez Postman ou un outil similaire pour envoyer les requêtes de manière pratique et visualiser les réponses.
