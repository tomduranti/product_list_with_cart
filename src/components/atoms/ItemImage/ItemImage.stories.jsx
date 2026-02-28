import ItemImage from './ItemImage';

//NOTE: Storybook doesnt' seem to render source images correctly

import waffleMobile from '../../../assets/mobile/waffle_mobile.jpg';
import waffleTablet from '../../../assets/tablet/waffle_tablet.jpg';
import waffleDesktop from '../../../assets/desktop/waffle_desktop.jpg';

import cremeBruleeMobile from '../../../assets/mobile/creme_brulee_mobile.jpg';
import cremeBruleeTablet from '../../../assets/tablet/creme_brulee_tablet.jpg';
import cremeBruleeDesktop from '../../../assets/desktop/creme_brulee_desktop.jpg';

import macaronMobile from '../../../assets/mobile/macaron_mobile.jpg';
import macaronTablet from '../../../assets/tablet/macaron_tablet.jpg';
import macaronDesktop from '../../../assets/desktop/macaron_desktop.jpg';

import tiramisuMobile from '../../../assets/mobile/tiramisu_mobile.jpg';
import tiramisuTablet from '../../../assets/tablet/tiramisu_tablet.jpg';
import tiramisuDesktop from '../../../assets/desktop/tiramisu_desktop.jpg';

import baklavaMobile from '../../../assets/mobile/baklava_mobile.jpg';
import baklavaTablet from '../../../assets/tablet/baklava_tablet.jpg';
import baklavaDesktop from '../../../assets/desktop/baklava_desktop.jpg';

import velvetCakeMobile from '../../../assets/mobile/velvet_cake_mobile.jpg';
import velvetCakeTablet from '../../../assets/tablet/velvet_cake_tablet.jpg';
import velvetCakeDesktop from '../../../assets/desktop/velvet_cake_desktop.jpg';

import brownieMobile from '../../../assets/mobile/brownie_mobile.jpg';
import brownieTablet from '../../../assets/tablet/brownie_tablet.jpg';
import brownieDesktop from '../../../assets/desktop/brownie_desktop.jpg';

import pannaCottaMobile from '../../../assets/mobile/panna_cotta_mobile.jpg';
import pannaCottaTablet from '../../../assets/tablet/panna_cotta_tablet.jpg';
import pannaCottaDesktop from '../../../assets/desktop/panna_cotta_desktop.jpg';

export default {
    title: 'components/atoms/ItemImage',
    component: ItemImage,
}

export const WaffleItemImage = {
    args: { 
        mobileSrc: waffleMobile,
        tabletSrc: waffleTablet,
        desktopSrc: waffleDesktop,
        alt: 'waffle dessert'
    }
};

export const CremeBruleeItemImage = {
    args: { 
        mobileSrc: cremeBruleeMobile,
        tabletSrc: cremeBruleeTablet,
        desktopSrc: cremeBruleeDesktop,
        alt: 'creme brulee dessert'
    }
};

export const MacaronItemImage = {
    args: { 
        mobileSrc: macaronMobile,
        tabletSrc: macaronTablet,
        desktopSrc: macaronDesktop,
        alt: 'macaron dessert'
    }
};

export const TiramisuItemImage = {
    args: { 
        mobileSrc: tiramisuMobile,
        tabletSrc: tiramisuTablet,
        desktopSrc: tiramisuDesktop,
        alt: 'tiramisu dessert'
    }
};

export const BaklavaItemImage = {
    args: { 
        mobileSrc: baklavaMobile,
        tabletSrc: baklavaTablet,
        desktopSrc: baklavaDesktop,
        alt: 'baklava dessert'
    }
};

export const VelvetCakeItemImage = {
    args: { 
        mobileSrc: velvetCakeMobile,
        tabletSrc: velvetCakeTablet,
        desktopSrc: velvetCakeDesktop,
        alt: 'velvet cake dessert'
    }
};

export const BrownieItemImage = {
    args: { 
        mobileSrc: brownieMobile,
        tabletSrc: brownieTablet,
        desktopSrc: brownieDesktop,
        alt: 'brownie dessert'
    }
};

export const PannaCottaItemImage = {
    args: { 
        mobileSrc: pannaCottaMobile,
        tabletSrc: pannaCottaTablet,
        desktopSrc: pannaCottaDesktop,
        alt: 'panna cotta dessert'
    }
};
