import { useContext } from 'react';
import { DessertContext } from '../../../context/context.js';

import './_Modal.scss';

import OrderConfirmed from '../../../assets/icon/icon_order_confirmed.svg';
import TotalOrder from '../../atoms/TotalOrder/TotalOrder.jsx';
import ButtonOrder from '../../atoms/Button/ButtonOrder.jsx';

export default function Modal({ resetState, className }) {
    const [dessertItems, setDessertItems] = useContext(DessertContext);
    let totalPrice = 0;

    const listItems = dessertItems.map(dessertItem => {
        totalPrice += (dessertItem.price * dessertItem.count);
        return (
            <li className='list_item'>
                <div className='list_item__item'>
                    <div className="list_item__tab">
                        <div className="list_item__thumbnail_and_info">
                            <img className='modal__thumbnail' src={dessertItem.thumbnail} alt='' />
                            <div className="list_item__info">
                                <div className='list_item__description list_item__description--modal  text_preset_4--bold'>
                                    {dessertItem.description}
                                </div>
                                <div className='list_item__quantity_and_price  text_preset_4--bold'>
                                    <span className='list_item__count'>{dessertItem.count}x</span>
                                    <span className='list_item__price  text_preset_4'>@ ${dessertItem.price}</span>
                                </div>
                            </div>
                        </div>
                        <span className='list_item__total_price list_item__total_price--modal  text_preset_3'>${(dessertItem.price * dessertItem.count).toFixed(2)}</span>
                    </div>
                </div>
            </li>
        )
    }
    )

    return (
        <div className={`modal ${className}`}>
            <div className='modal__container'>
                <div className='modal__confirmation_message'>
                    <img className='modal__image' src={OrderConfirmed} alt='your order is confirmed!' />
                    <h2 className='modal__confirmation_heading  text_preset_1'>order confirmed</h2>
                    <h3 className='modal__confirmation_subheading  text_preset_3--regular'>We hope you enjoy your food!</h3>
                </div>
                <div className='modal__confirmed_items'>
                    <ul className='modal__list_confirmation_items'>
                        {listItems}
                        <li><TotalOrder totalPrice={totalPrice} /></li>
                    </ul>
                </div>
                <ButtonOrder text={'start new order'} onClick={resetState}/>
            </div>
        </div>
    )
}