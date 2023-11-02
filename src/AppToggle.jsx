import { useState } from 'react';
import './App.css'
import Product from './components/Product';

export default function AppToggle(){
  let [products,setProducts] = useState(false)
  const handleClick = (event)=>{
    setProducts(!products)
  }
  return(
    <>
      <button onClick={handleClick}>Toggle</button>
      {
        products && <Product/>
      }
      
    </>
  );
}