import { useState, useContext, useEffect } from 'react';
import { DessertContext } from '../../../context/context.js';

import '../../../sass/abstract/_utils.scss';
import './_GridItem.scss';

import ButtonAddToCart from '../../atoms/Button/ButtonAddToCart.jsx';
import ButtonCounter from '../../atoms/Button/ButtonCounter.jsx';

export default function GridItem({ image, dessert }) {
    const [dessertItems, setDessertItems] = useContext(DessertContext);
    let [count, setCount] = useState(0);

    useEffect(() => {
        //this effect is triggered by ButtonDelete which deletes the object from dessertItems
        //every GridItem then checks whether its object exists in dessertItems: if it doesn't, its count is reset to 0
        const isFound = dessertItems.some(obj => obj.description === dessert.description);
        if (!isFound) return setCount(0);
    }, [dessertItems])


    function setGridObject(updatedCount) {
        setDessertItems(arr => {
            const isFound = arr.some(obj => obj.description === dessert.description);

            //if the object doesn't exist yet in array, create it
            if (!isFound) return [...arr, { description: dessert.description, price: dessert.price, count: updatedCount, thumbnail: image.thumbnail }];

            //if the object exists and its count is 0, delete that item from the array
            if (updatedCount === 0) return arr.filter(obj => obj.description !== dessert.description);

            //if the object exists and its count is more than 1, update that object with the latest count and copy the rest of the array
            return (arr.map(obj => { return (obj.description === dessert.description) ? { ...obj, count: updatedCount } : obj }))
        })
    }

    function counter(polarity) {
        const newCount = polarity ? count + 1 : count - 1;
        setCount(newCount);
        setGridObject(newCount);
    }

    return (
        <div className='grid_item'>
            <div className='grid_item__cta_image'>
                <picture className='grid_item__picture'>
                    <source srcSet={image.desktopSrc} media='(min-width: 90rem)' />
                    <source srcSet={image.tabletSrc} media='(min-width: 48rem)' />
                    <img className={`grid_item__image ${Boolean(count) && 'added_item'}`} src={image.mobileSrc} alt={image.alt} />
                    {!Boolean(count) && <ButtonAddToCart onClick={() => counter(true)} />}
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
