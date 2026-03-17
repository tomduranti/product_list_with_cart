import { useContext } from 'react';
import { DessertContext } from '../../../context/context.js';

const useCart = () => {

    const [dessertItems, setDessertItems] = useContext(DessertContext);
    const totalCount = [...dessertItems].reduce((accumulator, currentValue) => accumulator + currentValue.count, 0);

    const deleteGridItem = (itemToDelete) => {
        //removes the object from dessertItems, yet does not reset count
        setDessertItems(arr => arr.filter(obj => obj.id !== itemToDelete));
    }


    return {
        totalCount,
        deleteGridItem,
    }
}

export default useCart;