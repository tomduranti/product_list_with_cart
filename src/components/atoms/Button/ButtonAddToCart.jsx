import './_Button.scss';
import '../../../sass/abstract/_utils.scss';

import iconAddToCart from '../../../assets/icon/icon_add_to_cart.svg';

export default function ButtonAddToCart() {
    return (
        <button className='button  button--cta_add_to_cart' type='button'>
            <div className="button__container  button__container--gap">
                <img src={iconAddToCart} alt='add to cart image'/>
                <span className='button__text text_preset_4--bold'>Add <span className='text_lowercase'>to</span> cart</span>
            </div>
        </button>
    )
}