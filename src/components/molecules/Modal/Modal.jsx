import { useContext } from 'react';
import { DessertContext } from '../../../context/context.js';

import './_Modal.scss';

import OrderConfirmed from '../../../assets/icon/icon_order_confirmed.svg';

export default function Modal() {
    return (
        <div className='modal'>
            <div className='modal__container'>
                <div className='modal__confirmation_message'>
                    <img className='modal__image' src={OrderConfirmed} alt='your order is confirmed!' />
                    <h2 className='modal__confirmation_heading  text_preset_1'>order confirmed</h2>
                    <h3 className='modal__confirmation_subheading  text_preset_3--regular'>We hope you enjoy your food!</h3>
                </div>
            </div>
        </div>
    )
}