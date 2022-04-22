import React from 'react'
import './secciones.css'
import imgSorbete from '../../assets/imgPag/secSorbete.jpg'

const SecSorbete = () => {
  return (
    <div className='divSeccion secSorbete'>
      <div className='divInfoSec'>
        <h1>¿Sorbete? No, gracias!</h1>

        <div className='divDivInfo'>
          <p>Millones de pajitas se acumulan todos los años en los mares y océanos, contaminando sus aguas y alterando el ecosistema que allí se desarrolla. Son cerca de 1.5 millones de animales los que fallecen o enferman a causa de la ingesta de plásticos.</p>

          <p>Según un informe de Ocean Conservacy, los cañitas o sorbetes forman parte de la contaminación marina. Pues generan daños a los animales acuáticos, como los peces, tortugas, etc; y su ecosistema. Cabe resaltar que el plástico tarda entre 100 a 1000 años en degradarse.
          </p>
        </div>  
      </div>

      <div className='divImgSec divImgSorbete'>
        <img src={imgSorbete} alt="sorbete"/>
      </div>
    </div>
  )
}

export default SecSorbete