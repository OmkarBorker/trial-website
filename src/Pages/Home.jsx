import React from 'react'
import HeroSection from '../Components/Herosection'
import Text from '../Components/Text'
import Contact from '../Components/Contact'

function Home() {
  return (
    <div>
        <HeroSection/>
        <div id="about">
        <Text/>
        </div>
        <div className='py-6 px-2' id="contact">
        <Contact/>
        </div>
    </div>
  )
}

export default Home