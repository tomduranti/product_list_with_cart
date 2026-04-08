import { useContext } from 'react';
import { itemContext } from '../../../context/context.js';

import './_Cart.scss';

import emptyCartImage from '../../../assets/icon/illustration_empty_cart.svg';
import carbonIcon from '../../../assets/icon/icon_carbon_neutral.svg';
import ButtonOrder from '../../atoms/Button/ButtonOrder.jsx';
import ButtonDelete from '../../atoms/Button/ButtonDelete.jsx';
import TotalOrder from '../../atoms/TotalOrder/TotalOrder.jsx';
import ListItem from '../../atoms/ListItem/ListItem.jsx';

import useCart from './useCart.js';

export default function Cart({ toggleModal, totalPrice }) {

     const [items] = useContext(itemContext);

    const {
        totalCount,
        deleteGridItem,
    } = useCart()

    const listItems = items.map(item =>
        <li className='list_item' key={item.id}>
            <article className='list_item__item'>
                <ListItem description={item.description} price={item.price} id={item.id} count={item.count} />
                <ButtonDelete onClick={() => deleteGridItem(item.id)} />
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
                            <div className='carbon_neutral_info'>
                                <div className="carbon_neutral_info__container">
                                    <img className='carbon_neutral_info__image' src={carbonIcon} alt='carbon neutral image' />
                                    <span className='carbon_neutral_info__text  text_preset_4'>This is a <span className='text_preset_4--bold'>carbon-neutral</span> delivery</span>
                                </div>
                            </div>
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