import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/cta.css'


const Cta = () => {
  return (
    <div class="callToAction">
      <div class="mask">  
        <p>Nunca es tarde para tener una vida sustentable </p>
        <Link to="../pages/Tienda" class="info">Ir a la Tienda</Link>  
      </div>  
    </div>
  )
}

export default Cta