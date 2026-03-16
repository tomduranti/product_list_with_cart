import './_Button.scss';
import '../../../sass/abstract/_utils.scss';

import iconIncreaseCount from '../../../assets/icon/icon_increase_quantity.svg';
import iconDecreaseCount from '../../../assets/icon/icon_decrease_quantity.svg';

export default function ButtonCounter({ onIncrease, onDecrease, count }) {
    return (
        <button className='button  button--cta_counter  button--abs_position  button--bg_red' type='button'>
            <div className='button__container  button__container--space_between'>
                <img className='decrease_sign' src={iconDecreaseCount} alt='decrease quantity sign' onClick={onDecrease} />
                <span className='text_white_color  text_preset_4--bold'>{count}</span>
                <img className='increase_sign' src={iconIncreaseCount} alt='increase quantity sign' onClick={onIncrease} />
            </div>
        </button>
    )
}