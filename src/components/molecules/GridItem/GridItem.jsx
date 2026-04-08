import '../../../sass/abstract/_utils.scss';
import './_GridItem.scss';
import useGridItem from './useGridItem.js';

import ButtonAddToCart from '../../atoms/Button/ButtonAddToCart.jsx';
import ButtonCounter from '../../atoms/Button/ButtonCounter.jsx';

export default function GridItem({ image, name, description, price, id }) {

    const {
        count,
        hasCount,
        updateCount,
    } = useGridItem(image, description, price, id)

    return (
        <figure className='grid_item'>
            <div className='grid_item__cta_image'>
                <picture className='grid_item__picture'>
                    <source srcSet={image.desktopSrc} media='(min-width: 90rem)' />
                    <source srcSet={image.tabletSrc} media='(min-width: 48rem)' />
                    <img className={`grid_item__image ${hasCount ? 'added_item' : ''}`} src={image.mobileSrc} alt={image.alt} />
                </picture>
                {hasCount ?
                    <ButtonCounter count={count} increment={() => updateCount(true)} decrement={() => updateCount(false)} /> :
                    <ButtonAddToCart onClick={() => updateCount(true)} />
                }
            </div>
            <figcaption className='grid_item__info'>
                <span className='grid_item__name  text_preset_4  text_capitalize'>{name}</span>
                <h2 className='grid_item__description  text_preset_3'>{description}</h2>
                <span className='grid_item__price  text_preset_3'>${price.toFixed(2)}</span>
            </figcaption>
        </figure>
    )
}
