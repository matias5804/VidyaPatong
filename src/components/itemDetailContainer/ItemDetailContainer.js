import React, { useState, useEffect } from 'react';
import {ItemDetail} from '../itemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
//import { getFirestore } from '../../firebase/Firebase';
import Loader from '../animation/Spinner';
import  MockedItem  from '../mock/MockedItem';

export const ItemDetailContainer = () => {
  
  const [items, setItems] = useState({});
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {

    setLoading(true);

    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const myData = itemId && MockedItem.find((item) => item.id === itemId)
        resolve(myData);
      }, 1000);

      });
      getItems.then((res) => {
        setItems(res);
      }).finally(()=> setLoading(false));

  

  },[itemId]) ;

  return loading ? (
    <div className='loader'>
      <Loader/>
    </div>)
    : (<div>
        <ItemDetail item={items} />
      </div>)
};