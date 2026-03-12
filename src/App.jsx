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
            <Cart handleClick={handleClick} />
          </div>
          <Modal className={isActive ? 'display_block' : 'display_none'} resetState={resetState} />
        </div>
      </DessertContext.Provider>
    </main>
  )
}