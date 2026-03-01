import { useState } from 'react'

import './_GridItem.scss'

import ButtonAddToCart from '../../atoms/Button/ButtonAddToCart.jsx';
import ButtonCounter from '../../atoms/Button/ButtonCounter.jsx';

export default function GridItem({ desktopSrc, tabletSrc, mobileSrc, alt, name, description, price }) {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="grid_item">
            <div className="grid_item__cta_image">
                <picture className="grid_item__picture">
                    <source srcSet={desktopSrc} media='(min-width: 90rem)' />
                    <source srcSet={tabletSrc} media='(min-width: 768px)' />
                    <img className="grid_item__image" src={mobileSrc} alt={alt} />

                    {/*TODO: add complete logic, this is just for demo*/}
                    { toggle ? <ButtonAddToCart onClick={() =>setToggle(!toggle)} /> : <ButtonCounter onClick={() =>setToggle(!toggle)} /> }

                </picture>
            </div>
            <div className='grid_item__info'>
                <span className='grid_item__name text_preset_4'>{name}</span>
                <h3 className='grid_item__description text_preset_3'>{description}</h3>
                <h4 className='grid_item__price text_preset_3'>{price}</h4>
            </div>
        </div>
    )
}