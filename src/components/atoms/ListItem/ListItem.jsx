import './_ListItem.scss';

export default function ListItem({ description, price, count, isActive }) {
    return (
        <div className="list_item__info">
            <div className={`list_item__description  ${isActive && 'list_item__description--modal'}  text_preset_4--bold`}>
                {description}
            </div>
            <div className='list_item__quantity_and_price  text_preset_4--bold'>
                <span className='list_item__count'>{count}x</span>
                <span className='list_item__price  text_preset_4'>@ ${price.toFixed(2)}</span>
                <span className='list_item__total_price'>${(price * count).toFixed(2)}</span>
            </div>
        </div>
    )
}