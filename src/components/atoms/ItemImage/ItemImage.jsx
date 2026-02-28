import './_ItemImage.scss';

export default function ItemImage({ desktopSrc, tabletSrc, mobileSrc, alt }) {
    return (
        <picture className="item_image">
            <source srcSet={desktopSrc} media='(min-width: 90rem)'/>
            <source srcSet={tabletSrc} media='(min-width: 768px)'/>
            <img className='item_image__image' src={mobileSrc} alt={alt} />
        </picture>
    )
}