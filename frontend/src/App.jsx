import React, { useRef }  from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
const App = () => {
    const contactRef = useRef(null);

  const handleJoinClick = () => { 
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Router>
      <Navbar/>
      <Hero onJoinClick={handleJoinClick}/>
      <Gallery/>
      <Pricing onJoinClick={handleJoinClick}/>
      <Contact ref={contactRef}/>
      <BMICalculator/>
      <Footer/>
      <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

export default App
