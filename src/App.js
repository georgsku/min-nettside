import React from 'react';
import './App.css';
import bilde from './georgbilde.JPG'
import ullogo from './ul.jpg'
import ulapp from './ulapp.jpg'
import spaceinvader from './spaceinvader.png'
import githubLogo from './github-logo.svg'
import linkedinLogo from './linkedin.svg'
import googleplaystorelogo from './Google-play-store.svg'
import appstore from './apple.svg'

function App() {
  return (
    <div className="frontpage-background">
      <div className='frontpage-projects-wrapper'>
        <h1>Georg Skuggedal</h1>
        <h2>Student ved NTNU</h2>
        <h3>Mine prosjekter:</h3>
        <div className='project'>
          <img src={ullogo} alt="IMG" className='project-image'/>
          <div className='project-information'>
            <h4>UL.no</h4>
            <p>Nettside for NLMs ungdomsfestival UL, skrevet i React. Nettsiden er under utvikling og skal lanseres i februar.
            Prosjektet er med 4 andre studenter</p>
            <a href="https://github.com/sebastianvitterso/ul.no" target="_blank" rel="noopener noreferrer">
              <img alt='IMG' className='socialmedia-logo2' src={githubLogo} />
            </a> 
          </div>
        </div>
        <div className='project'>
          <img src={ulapp} alt="IMG" className='project-image'/>
          <div className='project-information'>
            <h4>UL-appen</h4>
            <p>Informasjons-app for NLMs ungdomsfestival UL, skrevet i React Native.
            Gruppeprosjekt med 4 andre studenter.</p>
            <div className="social-media-container">
              <a href="https://github.com/sebastianvitterso/ULapp" target="_blank" rel="noopener noreferrer">
                <img alt='IMG' className='socialmedia-logo2' src={githubLogo} />
              </a> 
              <a href="https://play.google.com/store/apps/details?id=no.nlm.ulApp" target="_blank" rel="noopener noreferrer">
                <img alt='IMG' className='socialmedia-logo2' src={googleplaystorelogo} />
              </a>
              <a href="https://apps.apple.com/no/app/ul-nlm/id1468272755?l=nb" target="_blank" rel="noopener noreferrer">
                <img alt='IMG' className='socialmedia-logo2' src={appstore} />
              </a>  
            </div>  
          </div>
        </div>
        <div className='project'>
          <img src={spaceinvader} alt="IMG" className='project-image'/>
          <div className='project-information'>
            <h4>Spaceinvader</h4>
            <p>Mitt første programmeringsprosjekt. Skoleoppgave i objektorientert programmering, 
            TDT4100. Oppgaven var å lage en app som oppfylte grunnleggende ideer innen objektorientert programmering.
             </p>
             <a href="https://github.com/georgsku/spaceinvader" target="_blank" rel="noopener noreferrer">
              <img alt='IMG' className='socialmedia-logo2' src={githubLogo} />
            </a> 
          </div>
        </div>
      </div> 
      <div className='frontpage-sidebar-right'>
          <img src={bilde} alt="IMG" className='frontpage-bilde'/>
          <p style={{fontSize: "20px"}}>Mitt navn er Georg Skuggedal og er en 2. års student på kommunikasjonstekologi ved NTNU. 
          Har en brennende interresse for teknologi og programmering. Dedikert og resultatorientert. 
          Trives svært godt i grupper og glad i ansvar. </p>
          <div className="logo-container">
            <a href='https://github.com/georgsku' target="_blank" rel="noopener noreferrer">
              <img alt='IMG' className='socialmedia-logo' src={githubLogo} />
            </a>
            <a href='https://www.linkedin.com/in/georg-skuggedal' target="_blank" rel="noopener noreferrer">
              <img alt='IMG' className='socialmedia-logo' src={linkedinLogo} />
            </a>
          </div>  
      </div>
    </div>
  );
}

export default App;

