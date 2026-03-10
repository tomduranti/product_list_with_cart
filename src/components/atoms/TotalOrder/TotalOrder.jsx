import './_TotalOrder.scss';

export default function TotalOrder({ totalPrice }) {
    return (
        <div className="total_order">
            <span className='text_preset_4'>order total</span>
            <span className='text_preset_2'>${totalPrice.toFixed(2)}</span>
        </div>
    )
}