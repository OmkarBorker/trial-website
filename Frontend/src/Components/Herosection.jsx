import React from 'react'
import styles from './HeroSection.module.css'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <h1 style={{fontSize:"45px",fontWeight:"bold"}}>Welcome to the Trippie!</h1>
      <p>Unleash Your City Adventure with Trippie: Your Tailored Journey Begins Here!</p>
      <Link to="/Dashboard">
      <button className={styles.btn} style={{height:"65px",width:"175px",fontSize:"25px"}} >Dashboard</button>
      </Link>
      </div>
      <div className={styles.image}>
      <img src='src\assets\earth.png' alt='RandomImage'/>
      </div>
    </div>
  )
}

export default HeroSection
