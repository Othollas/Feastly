import React, { useEffect, useState } from 'react';
import styles from './Card.module.css'

const Card = ({ 
  name, 
  id,
  description, 
  prix, 
  adresse, 
  images, 
  isChecked, 
  onCheckboxChange 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Slider d'images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

let style = isChecked === true ? styles.containerTrue : styles.containerFalse; 

  return (
    <label htmlFor={id}>
    <div className={style}>
      <div className={styles.description}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{adresse}</p>
        {prix.map((price, index) => (
          <p key={index}>{price}</p>
        ))}
      </div>
      <div className={styles.slider}>
        <img
          src={images[currentImageIndex]}
          alt={`Slide ${currentImageIndex + 1}`}
        />
      </div>
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={isChecked}
        onChange={(e) => onCheckboxChange(e.target.checked)} // Utilise le callback pour remonter l'état
      />
    </div>
    </label>
  );
};

export default Card;