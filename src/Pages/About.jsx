import React from 'react'
import Hero from '../Components/Hero'
import Biography from '../Components/Biography'
import Footer from '../Components/Footer'

function About() {
  return (
    <>
     <Hero title={"Learn more about Ajcare of medical institute"} imageurl={"/about.png"} />
     <Biography imgurl={"/whoweare.png"} />
     <Footer/>
    </>
  )
}

export default About
