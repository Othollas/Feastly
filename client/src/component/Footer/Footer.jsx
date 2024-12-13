import React from 'react'
import styles from './Footer.module.css'

const Footer = ({ onNavigate, page, name, setName}) => {
    
    

  return (
    <div className={styles.display}>
        <p
              onClick={() => {
                setName("")
                onNavigate(page)
              }} 
        >{name}</p>
    </div>
  )
}

export default Footer