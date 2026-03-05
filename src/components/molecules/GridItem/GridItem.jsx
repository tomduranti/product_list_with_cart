import { useState, useContext } from 'react'
import { DessertContext } from '../../../context/context.js';

import '../../../sass/abstract/_utils.scss';
import './_GridItem.scss';

import ButtonAddToCart from '../../atoms/Button/ButtonAddToCart.jsx';
import ButtonCounter from '../../atoms/Button/ButtonCounter.jsx';

export default function GridItem({ image, dessert }) {
    //global state
    const { dessertItems, setDessertItems } = useContext(DessertContext);

    //local state
    let [count, setCount] = useState(1);
    const [toggle, setToggle] = useState(true);

    const MAX_COUNT = 99;
    const MIN_COUNT = 0;

    const increaseQuantity = () => {
        setCount(count => {
            //increases the count at each click
            const newCount = count < MAX_COUNT ? count + 1 : count;
            handleChangeDessertItems(newCount);
            console.log(dessertItems); //delete
            return newCount;
        })
    }

    const decreaseQuantity = () => {
        setCount(count => {
            const newCount = count > MIN_COUNT ? count - 1 : count;

            if (newCount <= MIN_COUNT + 1) {
                resetState();
                delete dessertItems[dessert.name]; //if count is 0, delete dessert from list
            }
            handleChangeDessertItems(newCount);
            console.log(dessertItems); //delete
            return newCount;
        });
    }

    function resetCount() {
        setCount(count => { return count = 1 });
    }

    function resetState() {
        return setToggle(!toggle);
    }

    function handleChangeDessertItems(updatedCount) {
        //initialises the dessert object with all information and count = 1 
        //{ Tiramisu: {description: ..., price: ..., count: ...}, ...}
        setDessertItems(currentObj => {
            return { ...currentObj, [dessert.name]: { description: dessert.description, price: dessert.price, count: updatedCount } }
        });
    }

    return (
        <div className="grid_item">
            <div className="grid_item__cta_image">
                <picture className="grid_item__picture">
                    <source srcSet={image.desktopSrc} media='(min-width: 90rem)' />
                    <source srcSet={image.tabletSrc} media='(min-width: 48rem)' />
                    <img className={`grid_item__image ${!toggle && 'added_item'}`} src={image.mobileSrc} alt={image.alt} />
                    {toggle ?
                        <ButtonAddToCart onClick={() => (handleChangeDessertItems(), resetState())} /> :
                        <ButtonCounter increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} count={count} />
                    }
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