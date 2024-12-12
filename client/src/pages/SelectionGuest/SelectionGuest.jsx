import React, { useEffect, useState } from 'react';
import Button from '../../component/Button/Button';
import { fetchGuestData, updateParticipantInDatabase } from '../../services/api';
import styles from './SelectionGuest.module.css'

const SelectionGuest = ({ onNavigate, name }) => {
  const table = 'restaurants';
  const [userData, setUserData] = useState({ nb_adulte: 1, nb_enfant: 0 });

  useEffect(() => {
    const fetchInitialGuest = async () => {
      try {
        // Récupérer les données des participants
        const response = await fetchGuestData(table, name);

        // Filtrer et formater les données pertinentes
        const formattedGuest = Object.fromEntries(
          Object.entries(response)
            .filter(([key]) => ['nb_adulte', 'nb_enfant'].includes(key))
            .map(([key, value]) => [key, Number(value)])
        );

        // Mettre à jour l'état avec les données formatées
        setUserData(formattedGuest);
      } catch (error) {
        console.error('Erreur lors de la récupération des participants:', error);
      }
    };

    fetchInitialGuest();
  }, [name]);

  const handleInputChange = async (field, value) => {
    const updatedData = { ...userData, [field]: parseInt(value, 10) };
   
    setUserData(updatedData);

    try {
      // Mettre à jour les données dans la base
      await updateParticipantInDatabase('restaurants', name, updatedData);
      console.log('Participants mis à jour:', updatedData);
    } catch (error) {
      console.error('Erreur lors de la mise à jour des participants:', error);
    }
  };

  return (
    <div className={styles.display}>
      <h2>Bienvenue {name}</h2>
      <form>
        {/* Sélection pour les adultes */}
        <label htmlFor="nbAdulte">Nombre d'adultes : </label>
        <select
          value={userData.nb_adulte} // Utilise la clé correcte
          id="nbAdulte"
          onChange={(e) => handleInputChange('nb_adulte', Number(e.target.value))}
        >
          {[1, 2, 3, 4].map((i) => (
            <option
            key={i}
            value={i}
            >
              {i}
            </option>
          ))}
        </select>

        {/* Sélection pour les enfants */}
        <label htmlFor="nbEnfant">Nombre d'enfants : </label>
        <select
          value={userData.nb_enfant} // Utilise la clé correcte
          id="nbEnfant"
          onChange={(e) => handleInputChange('nb_enfant', Number(e.target.value))}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <option 
            key={i} 
            value={i}
            >
              {i}
            </option>
          ))}
        </select>
      </form>

      {/* Bouton pour naviguer */}
      <Button
        onNavigate={onNavigate}
        page="restaurantChoice"
        name="Passer au choix du restaurant"
      />
    </div>
  );
};

export default SelectionGuest;
