import { useContext } from 'react';
import { DessertContext } from '../../../context/context.js';

import './_Cart.scss';

import emptyCartImage from '../../../assets/icon/illustration_empty_cart.svg';

import CarbonNeutralInfo from '../../atoms/CarbonNeutralInfo/CarbonNeutralInfo.jsx';
import ButtonOrder from '../../atoms/Button/ButtonOrder.jsx';
import ButtonDelete from '../../atoms/Button/ButtonDelete.jsx';
import TotalOrder from '../../atoms/TotalOrder/TotalOrder.jsx';
import ListItem from '../../atoms/ListItem/ListItem.jsx';

export default function Cart({ handleClick, totalPrice }) {
    const [dessertItems, setDessertItems] = useContext(DessertContext);

    const totalCount = [...dessertItems].reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);

    function deleteGridItem(itemToDelete) {
        //removes the object from dessertItems, yet does not reset count
        setDessertItems(arr => arr.filter(obj => obj.id !== itemToDelete));
    }

    const listItems = dessertItems.map(dessertItem =>
        <li className='list_item' key={dessertItem.id}>
            <div className='list_item__item'>
                <ListItem description={dessertItem.description} price={dessertItem.price} id={dessertItem.id} count={dessertItem.count} deleteGridItem={deleteGridItem} />
                <ButtonDelete onClick={() => deleteGridItem(dessertItem.id)} />
            </div>
        </li>
    )

    return (
        <div className='cart'>
            <div className='cart__container'>
                <h2 className='cart__heading  text_preset_2'>your cart ({totalCount})</h2>
                {totalCount ?
                    (<>
                        <ul className='list_items'>
                            {listItems}
                            <li><TotalOrder totalPrice={totalPrice} /></li>
                        </ul>
                        <CarbonNeutralInfo />
                        <ButtonOrder text={'confirm order'} onClick={handleClick} />
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