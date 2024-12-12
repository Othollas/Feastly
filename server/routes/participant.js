// const express = require('express');
// const router = express.Router();
// const db = require('../db'); // Connexion à la base de données


// // Route PUT pour mettre à jour un participant
// router.put('/:id', async (req, res) => {
//   const participantId = req.params.id; // ID extrait de l'URL
//   const { adults, children } = req.body; // Données envoyées depuis React

//   try {
//     // Requête SQL pour mettre à jour la base
//     const query = `
//       UPDATE restaurant
//       SET adulte = $1, enfant = $2
//       WHERE id = $3
//     `;
//     await db.query(query, [adults, children, participantId]);

//     res.status(200).json({ message: 'Participant mis à jour avec succès' });
//   } catch (error) {
//     console.error('Erreur lors de la mise à jour :', error);
//     res.status(500).json({ message: 'Erreur serveur' });
//   }
// });

// module.exports = router;
