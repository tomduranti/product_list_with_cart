import removeItem from '../../../assets/icon/icon_remove_item.svg';

export default function ButtonDelete({ onClick }) {
    return <button onClick={onClick} type='button'><img src={removeItem} /></button>
}