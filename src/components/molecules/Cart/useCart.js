import { useContext } from 'react';
import { itemContext } from '../../../context/context.js';

const useCart = () => {

    const [items, setItems] = useContext(itemContext);
    const totalCount = [...items].reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);


    const deleteGridItem = (itemToDelete) => {
        //removes the object from items, yet does not reset count
        setItems(arr => arr.filter(obj => obj.id !== itemToDelete));
    }


    return {
        totalCount,
        deleteGridItem,
    }
}

export default useCart;