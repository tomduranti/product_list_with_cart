import { useState } from 'react';
import { itemContext } from './context/context.js';

import './sass/main.scss';
import './sass/base/_base.scss';

import Products from './components/organisms/Products/Products.jsx';
import Cart from './components/molecules/Cart/Cart.jsx';
import Modal from './components/molecules/Modal/Modal.jsx';

export default function App() {
  const [item, setItem] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const toggleModal = () => {
    setIsActive(!isActive);
  }

  const totalPrice = [...item].reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.count), 0);

  const resetState = () => {
    //empties the array
    setItem([]);
    //resets the modal
    toggleModal();
  }

  return (
    <main>
      <itemContext.Provider value={[item, setItem]}>
        <div className='page'>
          <div className='page__container'>
            <Products />
            <Cart toggleModal={toggleModal} totalPrice={totalPrice} />
          </div>
          {isActive ? (<Modal resetState={resetState} totalPrice={totalPrice} isActive={isActive}/>) : null }
        </div>
      </itemContext.Provider>
    </main>
  )
}