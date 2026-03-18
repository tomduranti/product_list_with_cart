import removeItem from '../../../assets/icon/icon_remove_item.svg';

export default function ButtonDelete({ onClick }) {
    return <button onClick={onClick} type='button' aria-label="Remove item"><img src={removeItem} alt=''/></button>
}