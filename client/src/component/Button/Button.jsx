import React from 'react'
import styles from './Button.module.css'


const Button = ({ name, page, onNavigate, setName, selectedName, style, className }) => {

const handleSetName =  (name) => selectedName === "" ? setName(name) : null;
  return (
    <div className={styles.button}>
      <input type="button" 
      className={className}
      value={name}
      style={style}
      onClick={() => {
        handleSetName(name) 
        onNavigate(page)
      }} />
    </div>
  )
}

export default Button