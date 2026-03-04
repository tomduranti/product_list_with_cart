import { useState, useContext } from 'react'
import { DessertContext } from '../../../context/context.js';

import '../../../sass/abstract/_utils.scss';
import './_GridItem.scss';

import ButtonAddToCart from '../../atoms/Button/ButtonAddToCart.jsx';
import ButtonCounter from '../../atoms/Button/ButtonCounter.jsx';

export default function GridItem({ image, dessert }) {
    //global state
    const {dessertItems, setDessertItems} = useContext(DessertContext);

    //local state
    let [count, setCount] = useState(1);
    const [toggle, setToggle] = useState(true);

    const MAX_COUNT = 99;
    const MIN_COUNT = 0;

    const increaseQuantity = () => {
        setCount(count => (count < MAX_COUNT ? count + 1 : count));
    }

    const decreaseQuantity = () => {
        setCount(count => {
            if (count <= MIN_COUNT + 1) setToggle(true);
            return count > MIN_COUNT ? count - 1 : count;
        });
    }

    function resetCount() {
        setCount(count => count = 1);
    }

    const addItem = () => {
        setDessertItems(item => [...item, { [dessert.name]: {description: dessert.description, price: dessert.price, count: count} } ]);
        console.log(dessertItems);
    }

    return (
        <div className="grid_item">
            <div className="grid_item__cta_image">
                <picture className="grid_item__picture">
                    <source srcSet={image.desktopSrc} media='(min-width: 90rem)' />
                    <source srcSet={image.tabletSrc} media='(min-width: 48rem)' />
                    <img className={`grid_item__image ${!toggle && 'added_item'}`} src={image.mobileSrc} alt={image.alt} />
                    {toggle ? <ButtonAddToCart onClick={() => (resetCount(), addItem(), setToggle(!toggle))} /> :
                        <ButtonCounter increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} count={count} />}
                </picture>
            </div>
            <div className='grid_item__info'>
                <span className='grid_item__name  text_preset_4'>{dessert.name}</span>
                <h3 className='grid_item__description  text_preset_3'>{dessert.description}</h3>
                <span className='grid_item__price  text_preset_3'>{dessert.price}</span>
            </div>
        </div>
    )
}