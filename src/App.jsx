import { useState } from 'react';
import { DessertContext } from './context/context.js';

import './sass/main.scss';
import './sass/base/_base.scss';

import Desserts from './components/organisms/Desserts/Desserts.jsx';
import Cart from './components/atoms/Cart/Cart.jsx';

export default function App() {
  const [dessertItems, setDessertItems] = useState({});

  return (
    <main>
      <DessertContext.Provider value={{ dessertItems, setDessertItems }}>
        <div className='page'>
          <div className='page__container'>
            <Desserts />
            <Cart />
          </div>
        </div>
      </DessertContext.Provider>
    </main>
  )
}