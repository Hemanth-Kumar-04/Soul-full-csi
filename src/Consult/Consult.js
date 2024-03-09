import React from 'react'
import YourmentalHealth from './sections/YourmentalHealth'
import Image2 from './sections/Image2'
import Image3 from './sections/Image3'
import Footer from './sections/footer'
import FirstYMH from './sections/FirstYMH'
import Chatbot from './sections/Chatbot'
const Consult = () => {
  return (
    <div>
        <FirstYMH/>
        <Chatbot/>
        <YourmentalHealth/>
        <Image2/>
        <Image3/>
        <Footer/>
    </div>
  )
}

export default Consult