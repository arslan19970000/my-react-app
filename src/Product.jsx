import React from 'react'
import { useCounter } from './Productlist'

const Product = () => {
    const{reset, incrementBy}=useCounter();

  return (
    <div>
      <button className='bg-slate-500 py-2 px-3 rounded-lg' onClick={reset}>Reset</button>
      <button className='ml-3 bg-blue-500 py-2 px-3 rounded-lg' onClick={() => incrementBy(9)}>Increment</button>
    </div>
  )
}

export default Product
