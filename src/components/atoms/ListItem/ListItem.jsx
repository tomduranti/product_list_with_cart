import { useContext } from 'react';
import { DessertContext } from '../../../context/context.js';

import './_ListItem.scss';

import ButtonDelete from '../../atoms/Button/ButtonDelete.jsx';

export default function ListItem({ item, deleteGridObject}) {
    const [dessertItems, setDessertItems] = useContext(DessertContext);

    return (
        <>
            <div className='list_item__item'>
                <div className="list_item__tab">
                    <div className="list_item__info">
                        <div className='list_item__description  text_preset_4--bold'>
                            {item.description}
                        </div>
                        <div className='list_item__quantity_and_price  text_preset_4--bold'>
                            <span className='list_item__count'>{item.count}x</span>
                            <span className='list_item__price  text_preset_4'>@ ${item.price}</span>
                            <span className='list_item__total_price'>${(item.price * item.count).toFixed(2)}</span>
                        </div>
                    </div>
                    <ButtonDelete onClick={() => deleteGridObject(item.description)} />
                </div>
            </div>
        </>
    )
}