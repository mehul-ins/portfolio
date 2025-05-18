import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/log.svg'
import './App.css'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Connect from './Components/Connect';

function App() {
  return (
    <>
      < Navbar />
      <Home />
      <About />
      <Connect />
    </>
  );
}

export default App;