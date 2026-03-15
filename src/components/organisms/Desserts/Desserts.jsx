import './_Desserts.scss';

import GridItem from '../../molecules/GridItem/GridItem.jsx';
import { items } from './items.js';

export default function Desserts() {
    const dessert = items.map(item => {
        return <li><GridItem className='desserts__grid_item' image={item.image} dessert={item.dessert} /></li>
    })

    return (
        <div className='desserts'>
            <h1 className='desserts__heading  text_preset_1'>desserts</h1>
            <ul className='desserts__grid'>
                {dessert}
            </ul>
        </div>
    )
}