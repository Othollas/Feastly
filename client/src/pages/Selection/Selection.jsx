import React, { useEffect, useState } from 'react'
import Button from '../../component/Button/Button'
import styles from '../../component/Button/Button.module.css'
import stylesDisplay from './Selection.module.css'
import Footer from '../../component/Footer/Footer'

const Selection = ({ onNavigate, onNameClick, selectedName }) => {
  const data = ["Sancho", "Timal", "Arno", "Richard", "Yannou", "Fabien", "Olivier"]

  const [isAnimating, setIsAnimating] = useState(false);

  // Démarre l'animation après le montage du composant
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 50); // Petit délai pour que les styles CSS s'appliquent
    return () => clearTimeout(timer); // Nettoyage si le composant est démonté
  }, []);

  return (
    <div className={stylesDisplay.container}>
      <h1>Qui es tu jeune entrepreneur ?</h1>
      <div className={stylesDisplay.display}>
      {data.map((guest, index)=>{
        return(
          <Button 
          className={`${styles.glassButton} ${
            isAnimating ? stylesDisplay.animatedBtn : stylesDisplay.hiddenBtn
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
      <Footer
      name="Aller aux resultats"
      page="resultat"
      onNavigate={onNavigate}
      setName={onNameClick}
      />
    </div>
  )
}

export default Selection