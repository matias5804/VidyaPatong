import React from 'react'
import Cta from '../CTA/Cta'
import SecBolsas from '../seccciones/SecBolsas'
import SecClima from '../seccciones/SecClima'
import SecPlasticos from '../seccciones/SecPlasticos'
import SecSolidos from '../seccciones/SecSorbete'
//import Mar from '../mar/Mar.js'

const Home = () => {
  return (
    <div>
      <Cta/>
    
      <SecBolsas/>
      <hr/>  
      <SecClima/>
      <hr/>
      <SecPlasticos/>
      <hr/>
      <SecSolidos/>
      <hr/>

    </div>
  )
}

export default Home