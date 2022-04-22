import React from 'react'
import './secciones.css'
import imgBolsa from '../../assets/imgPag/secBolsa.jpg'

const SecBolsas = () => {
  return (
    <div className='divSeccion'>
        <div className='divImgSec'>
            <img src={imgBolsa} alt="bolsa"/>
        </div>

        <div className='divInfoSec'>
            <h1>¿Por qué prevenir el impacto ambiental de las bolsas plásticas optando por bolsas reutilizables?</h1>

            <div className='divDivInfo'>
                <p>Los residuos plásticos son una gran amenaza para el cuidado del Medio Ambiente y las bolsas, junto con las botellas plásticas representan un gran porcentaje de la contaminación a nivel mundial.</p>
            
                <p> Hoy en día se estima que una persona utiliza alrededor de 250 bolsas plásticas al año, siendo 97.000 toneladas de residuos a nivel mundial.</p>
            </div>    
        </div>
    </div>
  )
}

export default SecBolsas