import { useState } from 'react';

import './_Button.scss';
import '../../../sass/abstract/_utils.scss';

import iconIncreaseCount from '../../../assets/icon/icon_increase_quantity.svg';
import iconDecreaseCount from '../../../assets/icon/icon_decrease_quantity.svg';

export default function ButtonCounter() {
    const [count, setCount] = useState(1);
    const MAX_LIMIT = 99;
    const MIN_LIMIT = 0;

    const increaseQuantity = () => {
        setCount(count => (count < MAX_LIMIT ? count + 1 : count));
    }

    const decreaseQuantity = () => {
        setCount(count => (count > MIN_LIMIT ? count - 1 : count));
    }

    return (
        <button className='button  button--cta_counter  button--bg_red' type='button'>
            <div className='button__container  button__container--space_between'>
                <img src={iconDecreaseCount} alt='decrease quantity sign' onClick={decreaseQuantity} />
                <span className='text_white_color  text_preset_4--bold'>{count}</span>
                <img src={iconIncreaseCount} alt='increase quantity sign' onClick={increaseQuantity} disabled={count >= MAX_LIMIT} />
            </div>
        </button>
    )
}