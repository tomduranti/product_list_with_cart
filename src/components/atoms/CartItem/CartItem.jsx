import { useContext } from 'react'
import { DessertContext } from '../../../context/context.js';

import './_CartItem.scss';

import ButtonDelete from '../../atoms/Button/ButtonDelete.jsx';
import separator from '../../../assets/icon/icon_separator.svg';

export default function CartItem({ deleteGridObject }) {
    const [dessertItems, setDessertItems] = useContext(DessertContext);

    return (
        dessertItems.map(dessertItem => {

            return (
                <div className='cart_item__item'>
                    <div className="cart_item__tab">
                        <div className="cart_item__info">
                            <div className='cart_item__description  text_preset_4--bold'>
                                {dessertItem.description}
                            </div>
                            <div className='cart_item__quantity_and_price  text_preset_4--bold'>
                                <span className='cart_item__count'>{dessertItem.count}x</span>
                                <span className='cart_item__price  text_preset_4'>@ ${dessertItem.price}</span>
                                <span className='cart_item__total_price'>${(dessertItem.price * dessertItem.count).toFixed(2)}</span>
                            </div>
                        </div>
                        <ButtonDelete onClick={() => deleteGridObject(dessertItem.description)} />
                    </div>

                    <div className='separator'>
                        <img src={separator} />
                    </div>
                </div>
            )
        })
    )
}