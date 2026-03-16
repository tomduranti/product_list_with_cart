import { useContext } from 'react';
import { DessertContext } from '../../../context/context.js';

import '../../../sass/abstract/_utils.scss';
import './_GridItem.scss';

import ButtonAddToCart from '../../atoms/Button/ButtonAddToCart.jsx';
import ButtonCounter from '../../atoms/Button/ButtonCounter.jsx';

export default function GridItem({ image, name, description, price, id }) {
    const [dessertItems, setDessertItems] = useContext(DessertContext);
    let count = dessertItems.find(obj => obj.id === id)?.count ?? 0;

    function setGridItem(updatedCount) {
        setDessertItems(arr => {
            const isFound = arr.some(obj => obj.id === id);

            //if the object doesn't exist yet in array, create it
            if (!isFound) return [...arr, { description: description, price: price, count: updatedCount, thumbnail: image.thumbnail, id: id }];

            //if the object exists and its count is 0, delete that item from the array
            if (updatedCount === 0) return arr.filter(obj => obj.id !== id);

            //if the object exists and its count is more than 1, update that object with the latest count and copy the rest of the array
            return (arr.map(obj => { return (obj.id === id) ? { ...obj, count: updatedCount } : obj }))
        })
    }

    function updateCount(increment) {
        const newCount = increment ? count + 1 : count - 1;
        setGridItem(newCount);
    }

    return (
        <div className='grid_item'>
            <div className='grid_item__cta_image'>
                <picture className='grid_item__picture'>
                    <source srcSet={image.desktopSrc} media='(min-width: 90rem)' />
                    <source srcSet={image.tabletSrc} media='(min-width: 48rem)' />
                    <img className={`grid_item__image ${Boolean(count) && 'added_item'}`} src={image.mobileSrc} alt={image.alt} />
                    {!Boolean(count) && <ButtonAddToCart onClick={() => updateCount(true)} />}
                    {Boolean(count) && <ButtonCounter count={count} increment={() => updateCount(true)} decrement={() => updateCount(false)} />}
                </picture>
            </div>
            <div className='grid_item__info'>
                <span className='grid_item__name  text_preset_4'>{name}</span>
                <h3 className='grid_item__description  text_preset_3'>{description}</h3>
                <span className='grid_item__price  text_preset_3'>${price}</span>
            </div>
        </div>
    )
}
