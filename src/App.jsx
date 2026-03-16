import { useState } from 'react';
import { DessertContext } from './context/context.js';

import './sass/main.scss';
import './sass/base/_base.scss';

import Desserts from './components/organisms/Desserts/Desserts.jsx';
import Cart from './components/molecules/Cart/Cart.jsx';
import Modal from './components/molecules/Modal/Modal.jsx';

export default function App() {
  const [dessertItems, setDessertItems] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  const totalPrice = [...dessertItems].reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.count), 0);

  const resetState = () => {
    //empties the array
    setDessertItems(arr => []);
    //resets the modal
    handleClick();
  }

  return (
    <main>
      <DessertContext.Provider value={[dessertItems, setDessertItems]}>
        <div className='page'>
          <div className='page__container'>
            <Desserts />
            <Cart handleClick={handleClick} totalPrice={totalPrice} />
          </div>
          {isActive ? (<Modal resetState={resetState} totalPrice={totalPrice} />) : null }
        </div>
      </DessertContext.Provider>
    </main>
  )
}