import React, { useEffect, useState } from 'react'
import Button from '../../component/Button/Button'
import styles from '../../component/Button/Button.module.css'
import stylesDisplay from './Selection.module.css'

const Selection = ({ onNavigate, onNameClick, selectedName }) => {
  const data = ["Sancho", "Timal", "Arno", "Richard", "Yannou", "Fabien", "Olivier"]

  const [isAnimating, setIsAnimating] = useState(false);

  // Démarre l'animation après le montage du composant
  useEffect(() => {
    setIsAnimating(true);
  }, []);

  return (
    <div>
      <h1>Qui es tu jeune entrepreneur ?</h1>
      <div className={stylesDisplay.display}>
      {data.map((guest, index)=>{
        return(
          <Button 
          className={`${styles.glassButton} ${
            isAnimating ? stylesDisplay.animatedBtn : ''
          }`}
          key={guest}
          name={guest}
          style={{ animationDelay: `${index * 0.3}s` }}
          page="selectionGuest"
          onNavigate={onNavigate}
          setName={onNameClick}
          selectedName={selectedName}
          />
        )
      })}
      </div>
    </div>
  )
}

export default Selection