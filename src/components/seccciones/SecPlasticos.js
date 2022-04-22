import React from 'react'
import './secciones.css'
import imgPlasticos from '../../assets/imgPag/secPlasticos.jpg'

const SecPlasticos = () => {
  return (
    <div className='divSeccion'>
        <div className='divImgSec divImgPlasticos'>
            <img className='imgPlasticos' src={imgPlasticos} alt=""/>
        </div>

        <div className='divInfoSec'>
            <h1>Tres maneras de reducir tus residuos plásticos</h1>

            <div className='divDivInfo'>
                <p>1. Lleva tu propia bolsa ecológica cuando vayas de compras, lo cual afecta y contamina considerablemente nuestro planeta. </p>

                <p>2. No consumas agua en botellas plásticas descartables.<br/>Las botellas de agua descartables son otros de los principales contaminantes plásticos en el mundo. </p>

                <p>3. Lleva tu propia botella térmica a la tienda de café<br/>Generalmente este café nos lo entregan en envases descartables que luego son desechados a la basura.</p>
            </div>
        </div>
    </div>
  )
}

export default SecPlasticos