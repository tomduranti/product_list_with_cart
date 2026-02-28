import { useState } from 'react';

import './_Button.scss';
import '../../../sass/abstract/_utils.scss';

import IconAddCount from '../Icon/IconAddCount.jsx';
import IconRemoveCount from '../Icon/IconRemoveCount.jsx';

export default function ButtonCounter() {
    const [count, setCount] = useState(1);
    const MAX_LIMIT = 99;
    const MIN_LIMIT = 0;

    const increment = () => {
        setCount(count => (count < MAX_LIMIT ? count + 1 : count));
    }

    const decrement = () => {
        setCount(count => (count > MIN_LIMIT ? count - 1 : count));
    }

    return (
        <button className='button  button--cta_counter  button--bg_red' type='button'>
            <div className='button__container  button__container--space_between'>
                <IconRemoveCount onClick={decrement} />
                <span className='text_white_color  text_preset_4--bold'>{count}</span>
                <IconAddCount onClick={increment} disabled={count >= MAX_LIMIT} />
            </div>
        </button>
    )
}