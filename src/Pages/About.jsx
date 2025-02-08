import React from 'react'
import Hero from '../Components/Hero'
import Biography from '../Components/Biography'
import Footer from '../Components/Footer'

function About() {
  return (
    <>
    <div className='mt-20'>
     <Hero title={"Learn more about Ajcare of medical institute"} imageurl={"/Aboutus2.webp"} />
     <Biography imgurl={"/whoarewe.webp"} />
     <Footer/>
     </div>
    </>
  )
}

export default About
