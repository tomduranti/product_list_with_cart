import { useState, useContext } from 'react'
import { DessertContext } from '../../../context/context.js';

import '../../../sass/abstract/_utils.scss';
import './_GridItem.scss';

import ButtonAddToCart from '../../atoms/Button/ButtonAddToCart.jsx';
import ButtonCounter from '../../atoms/Button/ButtonCounter.jsx';

export default function GridItem({ image, dessert }) {
    const [dessertItems, setDessertItems] = useContext(DessertContext);
    let [count, setCount] = useState(0);

    function initCount() {
        const initCount = count + 1;
        setCount(initCount);
        initGridObject(initCount);
    }

    function initGridObject(initialCount) {
        setDessertItems(arr =>
            [...arr, { description: dessert.description, price: dessert.price, count: initialCount }]
        )
    }

    function updateGridObject(updatedCount) {
        setDessertItems(arr => {
            //if count is 0, delete that item from the array
            if (updatedCount === 0) return arr.filter(obj => obj.description !== dessert.description);

            //if count > 1, update that object with the latest count
            return (arr.map(obj => {
                return (obj.description === dessert.description) ? ({ ...obj, count: updatedCount }) : obj;
            }))
        })
    }

    function counter(polarity) {
        const newCount = polarity ? count + 1 : count - 1;
        setCount(newCount); //updates the local state
        updateGridObject(newCount); //updates the array
    }

    return (
        <div className='grid_item'>
            <div className='grid_item__cta_image'>
                <picture className='grid_item__picture'>
                    <source srcSet={image.desktopSrc} media='(min-width: 90rem)' />
                    <source srcSet={image.tabletSrc} media='(min-width: 48rem)' />
                    <img className={`grid_item__image ${Boolean(count) && 'added_item'}`} src={image.mobileSrc} alt={image.alt} />
                    {!Boolean(count) && <ButtonAddToCart onClick={() => initCount()} />}
                    {Boolean(count) && <ButtonCounter count={count} onIncrease={() => counter(true)} onDecrease={() => counter(false)} />}
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
