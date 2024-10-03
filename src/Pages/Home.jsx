import React from 'react'
import Hero from '../Components/Hero'
import Biography from '../Components/Biography'
import Departments from '../Components/Departments'
import MessageForm from '../Components/MessageForm'
// import hero from '../../public/hero.png'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Hero title={"Welcome to AJ world of health care"} imageurl={"/hero.png"}/>
      <Biography imgurl={"/about.png"}/>
      <Departments/>
      <MessageForm/>
      <Footer/>
     
      
    </div>
  )
}

export default Home
