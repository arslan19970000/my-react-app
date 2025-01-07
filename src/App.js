// App.js
import React from'react';
import Counter  from './ProductForm';
import { CounterProvider } from './Productlist';
import Product from './Product';
import Product2 from './Product2';

const App = () => (
  <CounterProvider>
    <Counter />
    <Product/>
    <Product2/>
  </CounterProvider>
);

export default App;
