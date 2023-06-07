const express = require("express");
const app = express();
const PORT = process.env.PORT_ONE || 4001;
const mongoose = require("mongoose");
const Commande = require("./Commande");
const axios = require("axios");
const isAuthenticated = require("./isAuthenticated");
require("dotenv").config();

mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/produit-service", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());
function prixTotal(produits) {
  let total = 0;
  for (let t = 0; t < produits.length; ++t) {
    total += produits[t].prix;
  }
  console.log("prix total :" + total);
  return total;
}

async function httpRequest(ids) {
  try {
    const URL = "http://localhost:4000/produit/acheter";
    // put the ids in the body of the request
    const response = await axios.post(URL, { ids });
    console.log(response.data);
    return prixTotal(response.data);
  } catch (error) {
    console.error(error);
  }
}

app.post("/commande/ajouter", isAuthenticated, (req, res, next) => {
  const { ids } = req.body;

  httpRequest(ids).then((total) => {
    const newCommande = new Commande({
      ids,
      produits: ids,
      email_utilisateur: req.user.email,
      prix_total: total,
    });
    newCommande
      .save()
      .then((commande) => res.status(201).json(commande))
      .catch((error) => res.status(400).json({ error }));
  });
});

app.listen(PORT, () => {
  console.log(`Commande-Service at ${PORT}`);
});
