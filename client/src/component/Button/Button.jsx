import React from 'react'
import styles from './Button.module.css'


const Button = ({ name, page, onNavigate, setName, selectedName }) => {

const handleSetName =  (name) => selectedName === "" ? setName(name) : null;
  return (
    <div className={styles.button}>
      <input type="button" 
      className={styles.glassButton}
      value={name}
      onClick={() => {
        handleSetName(name) 
        onNavigate(page)
      }} />
    </div>
  )
}

export default Button