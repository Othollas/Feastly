const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express()

// MiddleWare 

app.use(cors());
app.use(bodyParser.json());

// Connexion à la base de données

const db = mysql.createConnection({
     host: process.env.DB_HOST,
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_NAME,
});

// Route pour enregistrer les revervations 

app.post("./reservation", (req, res) => {
    const { name, nb_adulte, nb_enfant, restaurant_choices} = req.body;

    const query = `INSERT INTO reservations (name, nb_adulte, nb_enfant, restaurant_choices) VALUES (?, ?, ?, ?)`;
    db.query(query, [name, nb_adulte, nb_enfant,JSON.stringify(restaurant_choices)], (err, result) => {
        if(err) {
            console.error("Erreur lors de la reservation: ", err);
            res.status(500).send("erreur du serveur.");
        }else{
            res.status(200).send("Réservation enregistrée avec succès.");
        }
    });
});

// Demarrage du serveur 

const PORT = process.nextTick.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`)
})