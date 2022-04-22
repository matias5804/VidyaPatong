import React from 'react';
import './components/styles/styles.css'
import { Routes, Route, Navigate} from 'react-router-dom'
import NavBar from "./components/navBar/NavBar";
import {ItemListContainer} from "./components/itemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/itemDetailContainer/ItemDetailContainer";

import Footer from './components/footer/Footer';
import Nosotros from './components/pages/Nosotros';
import Contacto from './components/pages/Contacto';
import Cart from './components/cart/Cart';
import Aside from './components/aside/Aside';
import ComoComprar from './components/pages/ComoComprar';
import ComoPagar from './components/pages/ComoPagar';
import Envios from './components/pages/Envios';
import { CartProvider } from './components/context/useContext';
import Home from './components/pages/Home';
import Tienda from './components/pages/Tienda';

function App () {
  
  return  (

        <CartProvider>

          <NavBar/>


          <Routes> 
            <Route path='/' element={<Home/>}/>
          <Route path="" element={<ItemListContainer greeting={'HOME'} />} />
            <Route className= "tiendaa" path="/category/:catId" element={<ItemListContainer greeting={'FILTRADO'} />}
            />
            <Route path='/pages/Tienda' element={<Tienda/>}/>
            <Route path="/product/:itemId" element={<ItemDetailContainer />} />
            <Route path="/pages/Nosotros" element={<Nosotros/>}/>
            <Route path="/pages/Contacto" element={<Contacto/>}/>
            <Route path="/cart/Cart" element={<Cart/>}/>
            <Route path="/pages/ComoComprar" element={<ComoComprar/>}/>
            <Route path="/pages/ComoPagar" element={<ComoPagar/>}/>
            <Route path="/pages/Envios" element={<Envios/>}/>
            <Route path="*" element={<Navigate to="/" />} />

          </Routes>
          
          <Aside/>
          <Footer/>

        </CartProvider>

  );

};

export default App;
