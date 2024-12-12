import React from 'react'
import Button from '../../component/Button/Button'
import styles from '../../component/Button/Button.module.css'
import stylesDisplay from './Selection.module.css'

const Selection = ({ onNavigate, onNameClick, selectedName }) => {
  const data = ["Sancho", "Timal", "Arno", "Richard", "Yannou", "Fabien", "Olivier"]
  return (
    <div>
      <h1>Qui es tu jeune entrepreneur ?</h1>
      <div className={stylesDisplay.display}>
      {data.map(guest=>{
        return(
          <Button 
          className={styles.glassButton}
          key={guest}
          name={guest}
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