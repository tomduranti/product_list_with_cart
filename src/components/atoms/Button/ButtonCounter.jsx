import './_Button.scss';
import '../../../sass/abstract/_utils.scss';

import IconAddCount from '../Icon/IconAddCount.jsx';
import IconRemoveCount from '../Icon/IconRemoveCount.jsx';

export default function ButtonCounter() {
    return (
        <button className='button  button--cta_counter  button--bg_red' type='button'>
            <div className='button__container  button__container--space_between'>
                <IconRemoveCount />
                <span className='text_white_color  text_preset_4--bold'>1</span>
                <IconAddCount />
            </div>
        </button>
    )
}