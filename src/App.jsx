import { useState } from 'react'
import Hero from './components/Hero'
import Servicios from './components/Servicios'
import Galeria from './components/Galeria'
import Contacto from './components/Contacto'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <Servicios />
      <Galeria />
      <Contacto />
    </div>
  )
}

export default App

