import React from 'react'
import styles from './Home.module.css'

const Home = ({ onNavigate }) => {
  return (
    <div id={styles.home}>
      <div className={styles.main}>
      <div id={styles.title} className={styles.gradientStroke}> Bienvenue au Concile2024 </div>
        <button onClick={() => onNavigate("selection")} >
          <div>
            <span>Entrez</span>
          </div>
        </button>
      </div>
      <div id={styles.title} className={styles.gradientOutline}> Bienvenue au Concile2024 </div>
    </div>
  )
}

export default Home