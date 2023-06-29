import React from 'react'
import HeroSection from '../Components/Herosection'
import Text from '../Components/Text'
import Contact from '../Components/Contact'
import Benefits from '../Components/Benefits'
import PriceTable from './PriceTable'

function Home() {
  return (
    <div>
        <HeroSection/>
        <div id="about">
        <Text/>
        <Benefits/>
        <PriceTable/>
        </div>
        <div className='py-6 px-2' id="contact">
        <Contact/>
        </div>
    </div>
  )
}

export default Home