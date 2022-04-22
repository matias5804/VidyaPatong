import React from 'react'
import { ItemListContainer } from '../itemListContainer/ItemListContainer'
import { Routes, Route, Navigate} from 'react-router-dom'
import { ItemDetailContainer } from '../itemDetailContainer/ItemDetailContainer'


const Tienda = () => {
  return (
    <div>
        <Routes>
          <Route path="" element={<ItemListContainer greeting={'HOME'} />} />
          <Route className= "tiendaa" path="/category/:catId" element={<ItemListContainer greeting={'FILTRADO'} />}
            />
          <Route path="/product/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </div>
  )
}

export default Tienda