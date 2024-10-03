import React from 'react'
import AppointmentForm from '../Components/AppointmentForm'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'

function Appointment() {
  return (
    <div>
    
       <Hero title={"Schedule a appointment | AJ health care"} imageurl={"/signin.png"}/>
      

      <AppointmentForm/>
      <Footer/>
    </div>
  )
}

export default Appointment
