import { useContext } from 'react';
import { DessertContext } from '../../../context/context.js';

import './_Modal.scss';

import OrderConfirmed from '../../../assets/icon/icon_order_confirmed.svg';
import ListItem from '../../atoms/ListItem/ListItem.jsx';
import TotalOrder from '../../atoms/TotalOrder/TotalOrder.jsx';
import ButtonOrder from '../../atoms/Button/ButtonOrder.jsx';

export default function Modal() {
    const [dessertItems, setDessertItems] = useContext(DessertContext);
    let totalPrice = 0;

    const listItems = dessertItems.map(dessertItem => {
        totalPrice += (dessertItem.price * dessertItem.count);
        return (
            <>
                <img className='modal__thumbnail' src={dessertItem.thumbnail} alt='' />
                <ListItem className='modal__list_confirmation_items' item={dessertItem} />
            </>
        )
    }
    )

    return (
        <div className='modal'>
            <div className='modal__container'>
                <div className='modal__confirmation_message'>
                    <img className='modal__image' src={OrderConfirmed} alt='your order is confirmed!' />
                    <h2 className='modal__confirmation_heading  text_preset_1'>order confirmed</h2>
                    <h3 className='modal__confirmation_subheading  text_preset_3--regular'>We hope you enjoy your food!</h3>
                </div>
                <div className='modal__confirmed_items'>
                    <ul className='modal__list_confirmation_items'>
                        <li>{listItems}</li>
                        <li><TotalOrder totalPrice={totalPrice} /></li>
                    </ul>
                </div>
                <ButtonOrder text={'start new order'} />
            </div>
        </div>
    )
}