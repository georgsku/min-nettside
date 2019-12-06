import React from 'react';
import logo from './logo.svg';
import './App.css';
import bilde from './georgbilde.JPG'
import ullogo from './ul.jpg'
import ulapp from './ulapp.jpg'

function App() {
  return (
    <div className="frontpage-background">
      <div className='frontpage-projects-wrapper'>
        <h1>Georg Skuggedal</h1>
        <h2>Mine prosjekter:</h2>
        <div className='project'>
          <img src={ullogo} alt="IMG" className='project-image'/>
          <div className=''>
            <h3>UL.no</h3>
            <p>tekst her</p>
          </div>
        </div>
        <div className='project'>
          <img src={ulapp} alt="IMG" className='project-image'/>
          <div className=''>
            <h3>UL.no</h3>
            <p>tekst her</p>
          </div>
        </div>
      </div> 
      <div className='frontpage-sidebar-right'>
          <img src={bilde} alt="IMG" className='frontpage-bilde'/>
          <p>Mitt navn er Georg Skuggedal og er en 2. års student ved NTNU på kommunikasjonsteknologi.</p>
      </div>
      
    </div>
  );
}

export default App;
