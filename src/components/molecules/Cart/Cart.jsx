import { useContext } from 'react';
import { DessertContext } from '../../../context/context.js';

import './_Cart.scss';

import emptyCartImage from '../../../assets/icon/illustration_empty_cart.svg';

import CarbonNeutralInfo from '../../atoms/CarbonNeutralInfo/CarbonNeutralInfo.jsx';
import ButtonOrder from '../../atoms/Button/ButtonOrder.jsx';
import TotalOrder from '../../atoms/TotalOrder/TotalOrder.jsx';
import ListItem from '../../atoms/ListItem/ListItem.jsx';

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
        return <li className='list_item__border_separator'><ListItem item={dessertItem} deleteGridObject={deleteGridObject} /></li>
    }
    )

    return (
        <div className='cart'>
            <div className='cart__container'>
                <h2 className='cart__heading  text_preset_2'>your cart ({totalCount})</h2>
                {totalCount ?
                    (<ul>
                        <li><ul className='list_items'>
                            {listItems}
                            <li><TotalOrder totalPrice={totalPrice} /></li>
                        </ul></li>
                        <li><CarbonNeutralInfo /></li>
                        <li><ButtonOrder text={'confirm order'} /></li>
                    </ul>) :
                    (<div className='placeholder'>
                        <img className='placeholder__image' src={emptyCartImage} alt='empty cart image' />
                        <span className='placeholder__text  text_preset_4--bold'>Your added items will appear here</span>
                    </div>)
                }
            </div>
        </div>
    )
}