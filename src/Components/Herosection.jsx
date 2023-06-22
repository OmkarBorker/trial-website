import React from 'react'
import styles from './HeroSection.module.css'

function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <h1>Welcome to the Trippie!</h1>
      <p>Unleash Your City Adventure with Trippie: Your Tailored Journey Begins Here!</p>
      <button className={styles.btn}>Jump in</button>
      </div>
      <div className={styles.image}>
      <img src='src\assets\earth.png' alt='RandomImage'/>
      </div>
    </div>
  )
}

export default HeroSection
