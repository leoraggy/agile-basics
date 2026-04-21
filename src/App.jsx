import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <>
      <section className='user-stories'>
        <h2>User Stories</h2>
        <ul>
          <li>As a fan of indie artists, I want to browse artist bios and album information, so that I can discover and share music I like.</li>  
          <li>As a mobile music fan, I want a responsive, single-column layout for the label and artist pages,
              so that I can easily browse the roster and read bios on my phone without zooming or horizontal scrolling.</li>
        </ul>
      </section>
    </>
    )
}

export default App
