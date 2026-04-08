import { useContext } from 'react';
import { itemContext } from '../../../context/context.js';

import './_Modal.scss';

import OrderConfirmed from '../../../assets/icon/icon_order_confirmed.svg';
import TotalOrder from '../../atoms/TotalOrder/TotalOrder.jsx';
import ButtonOrder from '../../atoms/Button/ButtonOrder.jsx';
import ListItem from '../../atoms/ListItem/ListItem.jsx';

export default function Modal({ resetState, totalPrice, isActive }) {
    const [items] = useContext(itemContext);

    const listItems = items.map(item => {
        return (
            <li className='list_item' key={item.id}>
                <article className='list_item__item'>
                    <div className="list_item__thumbnail_and_info">
                        <img className='modal__thumbnail' src={item.thumbnail} alt='' />
                        <ListItem isActive={isActive} description={item.description} price={item.price} id={item.id} count={item.count} />
                    </div>
                    <span className='list_item__total_price list_item__total_price--modal  text_preset_3'>${(item.price * item.count).toFixed(2)}</span>
                </article>
            </li>
        )
    }
    )

    return (
        <div className='modal'>
            <div className='modal__container'>
                <div className='modal__confirmation_message'>
                    <img className='modal__image' src={OrderConfirmed} alt='your order is confirmed!' />
                    <h3 className='modal__confirmation_heading  text_preset_1  text_capitalize'>order confirmed</h3>
                    <span className='modal__confirmation_subheading  text_preset_3--regular'>We hope you enjoy your food!</span>
                </div>
                <div className='modal__confirmed_items'>
                    <ul className='modal__list_confirmation_items'>
                        {listItems}
                        <li><TotalOrder totalPrice={totalPrice} /></li>
                    </ul>
                </div>
                <ButtonOrder text={'start new order'} onClick={resetState} />
            </div>
        </div>
    )
}