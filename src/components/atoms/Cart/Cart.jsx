import './_Cart.scss';

import emptyCartImage from '../../../assets/icon/illustration_empty_cart.svg';

export default function Cart() {
    return (
        <div className='cart'>
            {/* TODO substitute 0 with sum of all items */}
            <div className="cart__container">
                <h2 className='cart__heading  text_preset_2'>your cart (0)</h2>
                <div className='placeholder'>
                    <img className='placeholder__image' src={emptyCartImage} alt='empty cart image' />
                    <span className='placeholder__text  text_preset_4--bold'>Your added items will appear here</span>
                </div>
            </div>
        </div>
    )
}