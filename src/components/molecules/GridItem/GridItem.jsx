import { useState } from 'react'

import '../../../sass/abstract/_utils.scss';
import './_GridItem.scss';

import ButtonAddToCart from '../../atoms/Button/ButtonAddToCart.jsx';
import ButtonCounter from '../../atoms/Button/ButtonCounter.jsx';

export default function GridItem({ desktopSrc, tabletSrc, mobileSrc, alt, name, description, price }) {
    const [toggle, setToggle] = useState(true);
    let [count, setCount] = useState(1);

    const MAX_LIMIT = 99;
    const MIN_LIMIT = 0;

    const increaseQuantity = () => {
        setCount(count => (count < MAX_LIMIT ? count + 1 : count));
    }

    const decreaseQuantity = () => {
        if (count <= MIN_LIMIT) {
            setToggle(true);
            return;
        }
        setCount(count => count - 1);
    }

    function resetCount() {
        setCount(count => count = 1);
    }

    return (
        <div className="grid_item">
            <div className="grid_item__cta_image">
                <picture className="grid_item__picture">
                    <source srcSet={desktopSrc} media='(min-width: 90rem)' />
                    <source srcSet={tabletSrc} media='(min-width: 48rem)' />
                    <img className={`grid_item__image ${!toggle && 'added_item'}`} src={mobileSrc} alt={alt} />

                    {/*TODO: add complete logic, this is just for demo*/}
                    {toggle ? <ButtonAddToCart onClick={() => (resetCount, setToggle(!toggle))} /> :
                        <ButtonCounter increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} count={count} onClick={ () => ( console.log({count})) }/>}

                </picture>
            </div>
            <div className='grid_item__info'>
                <span className='grid_item__name  text_preset_4'>{name}</span>
                <h3 className='grid_item__description  text_preset_3'>{description}</h3>
                <span className='grid_item__price  text_preset_3'>{price}</span>
            </div>
        </div>
    )
}