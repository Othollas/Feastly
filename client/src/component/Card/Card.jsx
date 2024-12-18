import React, { useEffect, useRef, useState } from 'react';
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
  const [descriptionDisplay, setDescriptionDisplay] = useState(true)

  // Slider d'images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);



  const handleClick = () => {
    descriptionDisplay === false ? setDescriptionDisplay(true) : setDescriptionDisplay(false);
  }



  let style = isChecked === true ? styles.containerTrue : styles.containerFalse;

  return (

    <div className={`${styles.container} ${style}`}>
      <div className={styles.title}>
        <h2 onClick={handleClick}>{name}</h2>
        {descriptionDisplay === true ? <p>↓</p> : <p>↑</p>}
        
      </div>
      <label htmlFor={id}>

        <div className={`${styles.description} ${descriptionDisplay === false ? "" : styles.descriptionDisplayNone}`} >

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
      </label>
      <input
        type="checkbox"
        name={id}
        id={id}
        checked={isChecked}
        onChange={(e) => onCheckboxChange(e.target.checked)} // Utilise le callback pour remonter l'état
      />

    </div >

  );
};

export default Card;