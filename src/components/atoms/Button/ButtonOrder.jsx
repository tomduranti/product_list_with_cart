import './_Button.scss';
import '../../../sass/abstract/_utils.scss';

export default function ButtonOrder({ text }) {
    return (
        <button className='button  button--cta_order  button--bg_red' type='button'>
            <div className='button__container'>
                <span className='text_white_color  text_preset_3'>{ text }</span>
            </div>
        </button>
    )
}