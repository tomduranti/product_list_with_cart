import './_Button.scss';
import '../../../sass/abstract/_utils.scss';

import iconIncreaseCount from '../../../assets/icon/icon_increase_quantity.svg';
import iconDecreaseCount from '../../../assets/icon/icon_decrease_quantity.svg';

export default function ButtonCounter({ increment, decrement, count }) {
    return (
        <div className='button  button--cta_counter  button--abs_position  button--bg_red  text_capitalize'>
            <div className='button__container  button__container--space_between'>
                <button className='decrease_sign' type='button' onClick={decrement}><img src={iconDecreaseCount} alt='decrease quantity sign' /></button>
                <span className='text_white_color  text_preset_4--bold'>{count}</span>
                <button className='increase_sign' type='button' onClick={increment}><img src={iconIncreaseCount} alt='increase quantity sign' /></button>
            </div>
        </div>
    )
}