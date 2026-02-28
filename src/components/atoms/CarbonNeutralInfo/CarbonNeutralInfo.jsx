import './_CarbonNeutralInfo.scss';
import carbonIcon from '../../../assets/icon/icon_carbon_neutral.svg';

export default function CarbonNeutralInfo() {
    return (
        <div className='carbon_neutral_info'>
            <div className="carbon_neutral_info__container">
                <img className='carbon_neutral_info__image' src={carbonIcon} alt='carbon neutral image' />
                <span className='carbon_neutral_info__text  text_preset_4'>This is a <span className='text_preset_4--bold'>carbon-neutral</span> delivery</span>
            </div>
        </div>
    )
}