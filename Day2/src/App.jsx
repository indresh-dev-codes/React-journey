import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Welcome from './components/Welcome'
import ProductCard from './components/ProductCard'

function App() {
return(
  <div>
    <Welcome />
    <ProductCard/>
  </div>
)
}

export default App
