import { useContext } from 'react';
import { DessertContext } from '../../../context/context.js';

import './_Cart.scss';

import emptyCartImage from '../../../assets/icon/illustration_empty_cart.svg';
import CarbonNeutralInfo from '../../atoms/CarbonNeutralInfo/CarbonNeutralInfo.jsx';
import ButtonOrder from '../../atoms/Button/ButtonOrder.jsx';
import ButtonDelete from '../../atoms/Button/ButtonDelete.jsx';
import TotalOrder from '../../atoms/TotalOrder/TotalOrder.jsx';
import ListItem from '../../atoms/ListItem/ListItem.jsx';

import useCart from './useCart.js';

export default function Cart({ toggleModal, totalPrice }) {

     const [dessertItems] = useContext(DessertContext);

    const {
        totalCount,
        deleteGridItem,
    } = useCart()

    const listItems = dessertItems.map(dessertItem =>
        <li className='list_item' key={dessertItem.id}>
            <article className='list_item__item'>
                <ListItem description={dessertItem.description} price={dessertItem.price} id={dessertItem.id} count={dessertItem.count} />
                <ButtonDelete onClick={() => deleteGridItem(dessertItem.id)} />
            </article>
        </li>
    )

    return (
        <aside className='cart' aria-label="Your cart">
            <div className='cart__container'>
                <h3 className='cart__heading  text_preset_2  text_capitalize'>your cart ({totalCount})</h3>
                {totalCount ?
                    (
                        <>
                            <ul className='list_items'>
                                {listItems}
                                <li><TotalOrder totalPrice={totalPrice} /></li>
                            </ul>
                            <CarbonNeutralInfo />
                            <ButtonOrder text={'confirm order'} onClick={toggleModal} />
                        </>
                    ) : (
                        <div className='placeholder'>
                            <img className='placeholder__image' src={emptyCartImage} alt='empty cart image' />
                            <span className='placeholder__text  text_preset_4--bold'>Your added items will appear here</span>
                        </div>
                    )
                }
            </div>
        </aside>
    )
}