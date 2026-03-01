import './_GridItem.scss'

import ButtonAddToCart from '../../atoms/Button/ButtonAddToCart.jsx';

export default function GridItem({ desktopSrc, tabletSrc, mobileSrc, alt, name, description, price }) {
    return (
        <div className="grid_item">
            <div className="grid_item__cta_image">
                <picture className="grid_item__picture">
                    <source srcSet={desktopSrc} media='(min-width: 90rem)' />
                    <source srcSet={tabletSrc} media='(min-width: 768px)' />
                    <img className="grid_item__image" src={mobileSrc} alt={alt} />
                    <ButtonAddToCart />
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