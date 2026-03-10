import { useContext } from 'react'
import { DessertContext } from '../../../context/context.js';

import './_Cart.scss';

import emptyCartImage from '../../../assets/icon/illustration_empty_cart.svg';
import separator from '../../../assets/icon/icon_separator.svg';
import CarbonNeutralInfo from '../../atoms/CarbonNeutralInfo/CarbonNeutralInfo.jsx';
import ButtonOrder from '../../atoms/Button/ButtonOrder.jsx';
import ButtonDelete from '../../atoms/Button/ButtonDelete.jsx';

//TODO: move Cart.jsx to molecules, create the atoms ListItem.jsx and ButtonDelete.jsx
export default function Cart() {
    const [dessertItems, setDessertItems] = useContext(DessertContext);

    const totalCount = [...dessertItems].reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);
    let totalPrice = 0;

    function deleteGridObject(itemToDelete) {
        //removes the object from dessertItems, yet does not reset count
        setDessertItems(arr => {
            return arr.filter(obj => obj.description !== itemToDelete);
        })
    }

    const listItems = dessertItems.map(dessertItem => {

        totalPrice += (dessertItem.price * dessertItem.count);

        return (<li className='list_items__item'>
            <div className="list_items__tab">
                <div className="list_items__info">
                    <div className='list_items__description  text_preset_4--bold'>
                        {dessertItem.description}
                    </div>
                    <div className='list_items__quantity_and_price  text_preset_4--bold'>
                        <span className='list_items__count'>{dessertItem.count}x</span>
                        <span className='list_items__price  text_preset_4'>@ ${dessertItem.price}</span>
                        <span className='list_items__total_price'>${(dessertItem.price * dessertItem.count).toFixed(2)}</span>
                    </div>
                </div>
                <ButtonDelete onClick={() => deleteGridObject(dessertItem.description)} />
            </div>

            <div className='separator'>
                <img src={separator} />
            </div>
        </li>)
        }
    )

    return (
        <div className='cart'>
            <div className='cart__container'>
                <h2 className='cart__heading  text_preset_2'>your cart ({totalCount})</h2>
                {totalCount ?
                    (<>
                        <ul className='list_items'>
                            {listItems}
                            <li className='list_items__total_order'>
                                <span className='text_preset_4'>order total</span>
                                <span className='text_preset_2'>${totalPrice.toFixed(2)}</span>
                            </li>
                        </ul>
                        <CarbonNeutralInfo />
                        <ButtonOrder text={'confirm order'} />
                    </>) :
                    (<div className='placeholder'>
                        <img className='placeholder__image' src={emptyCartImage} alt='empty cart image' />
                        <span className='placeholder__text  text_preset_4--bold'>Your added items will appear here</span>
                    </div>)
                }
            </div>
        </div>
    )
}