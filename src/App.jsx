import './sass/main.scss';
import './sass/base/_base.scss';

import Desserts from './components/organisms/Desserts/Desserts.jsx';
import Cart from './components/atoms/Cart/Cart.jsx';

export default function App() {
  return (
    <div className='page'>
      <div className='page__container'>
        <Desserts />
        <Cart />
      </div>
    </div>
  )
}