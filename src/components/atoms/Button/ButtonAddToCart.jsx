import './_Button.scss';
import '../../../sass/abstract/_utils.scss';

import IconAddToCart from '../Icon/IconAddToCart.jsx';

export default function Button() {
    return (
        <button className='button  button--cta_add_to_cart' type='button'>
            <div className="button__container">
                <IconAddToCart />
                <span className='button__text text_preset_4--bold'>Add <span className='text_lowercase'>to</span> cart</span>
            </div>
        </button>
    )
}