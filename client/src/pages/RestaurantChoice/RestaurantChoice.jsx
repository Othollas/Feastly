import React, { useEffect, useState } from 'react'
import Card from '../../component/Card/Card'
import { fetchCheckboxData, updateCheckbox } from '../../services/api';
// import styles from './RestaurantChoice.module.css'
import { restaurantList } from '../../data/restaurant';
import styles from './RestaurantChoice.module.css'
import Footer from '../../component/Footer/Footer';



const RestaurantChoice = ({ name, onNavigate, onNameClick }) => {
  const [checkboxStates, setCheckboxStates] = useState({}); // État global pour les checkboxes
  const table = 'restaurants';

  // Récupérer les données initiales des checkboxes
  useEffect(() => {
    const fetchInitialCheckboxData = async () => {
      try {
        const response = await fetchCheckboxData(table, name);
        
        const formattedCheckboxStates = Object.fromEntries(
          Object.entries(response)
            .filter(([keys]) => !['id', 'name', 'nb_adulte', 'nb_enfant'].includes(keys)) // Exclure les non-restaurants
            .map(([keys, value]) => [keys, value === 1]) // Transformer tinyInt (1/0) en boolean
        );


        setCheckboxStates(formattedCheckboxStates); // Mettre à jour l'état
      } catch (error) {
        console.error('Erreur lors de la récupération des valeurs', error);
      }
    };

    fetchInitialCheckboxData();
  }, [name]);

  // Gestion des mises à jour des checkboxes
  const handleCheckboxUpdate = async (db_name, newCheckedState) => {
    try {
      const numericValue = newCheckedState ? 1 : 0;
      await updateCheckbox(table, name, db_name, numericValue);
      setCheckboxStates((prevState) => ({
        ...prevState,
        [db_name]: newCheckedState, // Mettre à jour localement
      }));
    } catch (error) {
      console.error(`Erreur lors de la mise à jour pour ${db_name}`, error);
    }
  };

  return (
    <div className={styles.container}>
      <h3>" Vous pouvez choisir 1 fois 1 restau, mais vous ne pouvez pas choisir 1000 restau 1000 fois "</h3>
      {restaurantList.map((restaurant, index) => (
        <div className={styles.containerCard}>
        <Card
          key={restaurant.name}
          id={`checkbox${index}`}
          user_name={name}
          name={restaurant.name}
          db_name={restaurant.db_name}
          description={restaurant.description}
          adresse={restaurant.adresse}
          prix={restaurant.prix}
          images={restaurant.images}
          isChecked={checkboxStates[restaurant.db_name] || false} // État initial
          onCheckboxChange={(newCheckedState) => handleCheckboxUpdate(restaurant.db_name, newCheckedState)} // Callback
        />
        </div>
      ))}
      
      <Footer
      name="Aller aux resultats"
      page="resultat"
      onNavigate={onNavigate}
      setName={onNameClick}
      />
    </div>
  );
};

export default RestaurantChoice