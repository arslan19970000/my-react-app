import React from 'react'
import { useCounter } from './Productlist';

const Product2 = () => {
    const{decrementBy,toggle ,redColor,greenColor}=useCounter();
    
    

  return (
    <div>
        <button onClick={decrementBy}>-</button>
        <button onClick={toggle}>Toggle</button>
      
    </div>
  )
}

export default Product2;
