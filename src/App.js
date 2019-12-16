import React from 'react';
import './App.css';
import bilde from './georgbilde.JPG'
import ullogo from './ul.jpg'
import ulapp from './ulapp.jpg'
import spaceinvader from './spaceinvader.png'

function App() {
  return (
    <div className="frontpage-background">
      <div className='frontpage-projects-wrapper'>
        <h1>Georg Skuggedal</h1>
        <h2>Student ved NTNU</h2>
        <h3>Mine prosjekter:</h3>
        <div className='project'>
          <img src={ullogo} alt="IMG" className='project-image'/>
          <div className=''>
            <h4>UL.no</h4>
            <p>tekst her</p>
          </div>
        </div>
        <div className='project'>
          <img src={ulapp} alt="IMG" className='project-image'/>
          <div className=''>
            <h4>UL-appen</h4>
            <p>tekst her</p>
          </div>
        </div>
        <div className='project'>
          <img src={spaceinvader} alt="IMG" className='project-image'/>
          <div className=''>
            <h4>Spaceinvader</h4>
            <p>Mitt første programmeringsprosjekt. Skoleoppgave i objektorientert programmering, <br></br>
            TDT4100. Oppgaven var å lage en app  
             </p>
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

