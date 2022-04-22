import React from 'react'
import './secciones.css'
import imgClima from '../../assets/imgPag/secClima.jpg'

const SecClima = () => {
  return (
    <div className='divSeccion secClima'>
        <div className='divInfoSec'>
            <h1>Cambio climático: es tiempo de actuar</h1>
            <div className='divDivInfo'>
                <p>l desarrollo de un consumo responsable requiere que los consumidores cuenten con la información necesaria sobre el impacto ambiental de los productos y/o servicios que consumen.</p
                >
                <p> Así, y de forma similar a la manera que la información nutricional está indicada en los alimentos, se debería informar la huella de carbono asociada a su fabricación, transporte, consumo y eliminación</p>
             </div>   
        </div>

        <div className='divImgSec'>
            <img src={imgClima} alt="clima"/>
        </div>
    </div>
  )
}

export default SecClima