import { useContext } from 'react';
import { itemContext } from '../../../context/context.js';

const useGridItem = (image, description, price, id) => {

    const [items, setItems] = useContext(itemContext);
    const count = items.find(obj => obj.id === id)?.count ?? 0;
    const hasCount = Boolean(count);

    
    const setGridItem = (updatedCount) => {
        setItems(arr => {
            const isFound = arr.some(obj => obj.id === id);

            //if the object doesn't exist yet in array, create it
            if (!isFound) return [...arr, { description: description, price: price, count: updatedCount, thumbnail: image.thumbnail, id: id }];

            //if the object exists and its count is 0, delete that item from the array
            if (updatedCount === 0) return arr.filter(obj => obj.id !== id);

            //if the object exists and its count is more than 1, update that object with the latest count and copy the rest of the array
            return (arr.map(obj => { return (obj.id === id) ? { ...obj, count: updatedCount } : obj }))
        })
    }


    const updateCount = (increment) => {
        const newCount = increment ? count + 1 : count - 1;
        setGridItem(newCount);
    }


    return {
        count,
        hasCount,
        updateCount,
    }
}

export default useGridItem;