import React from "react";
import Hero from "../Components/Hero";
import Biography from "../Components/Biography";
import Departments from "../Components/Departments";
import MessageForm from "../Components/MessageForm";
// import hero from '../../public/hero.png'
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="mt-20">
      <Hero
        title={"Welcome to AJ world of health care"}
        imageurl={"/Doctor.webp"}
      />
      <Biography imgurl={"/about2.png"} />
      <Departments />
      <MessageForm />
      <Footer />
    </div>
  );
}

export default Home;
