import './_Desserts.scss';

import GridItem from '../../molecules/GridItem/GridItem.jsx';
import { gridItem } from './griditem_data.js';

export default function Desserts() {
    return (
        <div className='desserts'>
            <h1 className='desserts__heading  text_preset_1'>desserts</h1>
            <div className='desserts__grid'>
                <GridItem className='desserts__grid_item' image={gridItem.waffle.image} dessert={gridItem.waffle.dessert} />
                <GridItem className='desserts__grid_item' image={gridItem.cremeBrulee.image} dessert={gridItem.cremeBrulee.dessert} />
                <GridItem className='desserts__grid_item' image={gridItem.macaron.image} dessert={gridItem.macaron.dessert} />
                <GridItem className='desserts__grid_item' image={gridItem.tiramisu.image} dessert={gridItem.tiramisu.dessert} />
                <GridItem className='desserts__grid_item' image={gridItem.baklava.image} dessert={gridItem.baklava.dessert} />
                <GridItem className='desserts__grid_item' image={gridItem.lemonMeringue.image} dessert={gridItem.lemonMeringue.dessert} />
                <GridItem className='desserts__grid_item' image={gridItem.velvetCake.image} dessert={gridItem.velvetCake.dessert} />
                <GridItem className='desserts__grid_item' image={gridItem.brownie.image} dessert={gridItem.brownie.dessert} />
                <GridItem className='desserts__grid_item' image={gridItem.pannaCotta.image} dessert={gridItem.pannaCotta.dessert} />
            </div>
        </div>
    )
}