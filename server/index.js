// const express = require("express");
// const bodyParser = require("body-parser");
// const mysql = require("mysql2");
// const cors = require("cors");
// require("dotenv").config();

// const app = express()

// // MiddleWare 

// app.use(cors());
// app.use(bodyParser.json());

// // Connexion à la base de données

// const db = mysql.createConnection({
//      host: process.env.DB_HOST,
//      user: process.env.DB_USER,
//      password: process.env.DB_PASSWORD,
//      database: process.env.DB_NAME,
// });

// // Route pour enregistrer les revervations 
// app.get('/', (req, res) => {
//     res.send('Backend déployé avec succès avec index.js !');
//   });


// app.post("./reservation", (req, res) => {
//     const { name, nb_adulte, nb_enfant, restaurant_choices} = req.body;

//     const query = `INSERT INTO reservations (name, nb_adulte, nb_enfant, restaurant_choices) VALUES (?, ?, ?, ?)`;
//     db.query(query, [name, nb_adulte, nb_enfant,JSON.stringify(restaurant_choices)], (err, result) => {
//         if(err) {
//             console.error("Erreur lors de la reservation: ", err);
//             res.status(500).send("erreur du serveur.");
//         }else{
//             res.status(200).send("Réservation enregistrée avec succès.");
//         }
//     });
// });

// // Demarrage du serveur 

// const PORT = process.nextTick.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Serveur démarré sur le port ${PORT}`)
// })


const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connexion à la base de données
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Route principale
app.get('/', (req, res) => {
    res.send('Backend déployé avec succès avec index.js !');
});

// Route pour enregistrer les réservations
app.post("/reservation", (req, res) => {
    const { name, nb_adulte, nb_enfant, restaurant_choices } = req.body;

    const query = `INSERT INTO reservations (name, nb_adulte, nb_enfant, restaurant_choices) VALUES (?, ?, ?, ?)`;
    db.query(query, [name, nb_adulte, nb_enfant, JSON.stringify(restaurant_choices)], (err, result) => {
        if (err) {
            console.error("Erreur lors de la réservation: ", err);
            res.status(500).send("Erreur du serveur.");
        } else {
            res.status(200).send("Réservation enregistrée avec succès.");
        }
    });
});

// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
