import React from 'react'

const Hero = ({ onJoinClick }) => {
  return (
    <section className='hero'>
       <div className="content">
         <div className="title">
           <h1>LET'S</h1>
           <h1>GET</h1>
           <h1>MOVING</h1>
         </div>
         <div className="sub-title">
          <p>Your Journey to Fitness Starts Here</p>
          <p>Unleash Your Potential</p>
         </div>
         <div className="buttons">
          <button onClick={onJoinClick}>Start Your Journey</button> 
          <button onClick={onJoinClick}>Discover Your Plan</button>
         </div>
       </div>
    </section>
  )
}

export default Hero