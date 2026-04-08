import './_Products.scss';

import GridItem from '../../molecules/GridItem/GridItem.jsx';
import { items } from './items.js';

export default function _Products() {
    const product = items.map(item =>
        <li key={item.id}><GridItem className='products__grid_item' image={item.image} name={item.name} description={item.description} price={item.price} id={item.id} /></li>
    )

    return (
        <div className='products'>
            <h1 className='products__heading  text_preset_1  text_capitalize'>products</h1>
            <ul className='products__grid'>
                {product}
            </ul>
        </div>
    )
}