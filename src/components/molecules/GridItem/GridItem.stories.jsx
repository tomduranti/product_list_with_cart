import GridItem from './GridItem';

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

import lemonMeringueMobile from '../../../assets/mobile/meringue_mobile.jpg';
import lemonMeringueTablet from '../../../assets/tablet/meringue_tablet.jpg';
import lemonMeringueDesktop from '../../../assets/desktop/meringue_desktop.jpg';

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
    title: 'components/molecules/GridItem',
    component: GridItem,
}

export const WaffleGridItemCart = {
    args: { 
        mobileSrc: waffleMobile,
        tabletSrc: waffleTablet,
        desktopSrc: waffleDesktop,
        alt: 'waffle dessert',
        name: 'Waffle',
        description: 'Waffle with Berries',
        price: '$6.50',
        isButtonCart: true
    }
};

export const WaffleGridItemCounter = {
    args: { 
        mobileSrc: waffleMobile,
        tabletSrc: waffleTablet,
        desktopSrc: waffleDesktop,
        alt: 'waffle dessert',
        name: 'Waffle',
        description: 'Waffle with Berries',
        price: '$6.50',
        isButtonCart: false
    }
};

export const CremeBruleeGridItem = {
    args: { 
        mobileSrc: cremeBruleeMobile,
        tabletSrc: cremeBruleeTablet,
        desktopSrc: cremeBruleeDesktop,
        alt: 'crème brûlée dessert',
        name: 'Crème Brûlée',
        description: 'Vanilla Bean Crème Brûlée',
        price: '$7.00',
    }
};

export const MacaronGridItem = {
    args: { 
        mobileSrc: macaronMobile,
        tabletSrc: macaronTablet,
        desktopSrc: macaronDesktop,
        alt: 'macaron dessert',
        name: 'Macaron',
        description: 'Macaron Mix of Five',
        price: '$8.00',
    }
};

export const TiramisuGridItem = {
    args: { 
        mobileSrc: tiramisuMobile,
        tabletSrc: tiramisuTablet,
        desktopSrc: tiramisuDesktop,
        alt: 'tiramisu dessert',
        name: 'Tiramisu',
        description: 'Classic Tiramisu',
        price: '$5.50',
    }
};

export const BaklavaGridItem = {
    args: { 
        mobileSrc: baklavaMobile,
        tabletSrc: baklavaTablet,
        desktopSrc: baklavaDesktop,
        alt: 'baklava dessert',
        name: 'Baklava',
        description: 'Pistachio Baklava',
        price: '$4.00',
    }
};

export const LemonMeringueGridItem = {
    args: { 
        mobileSrc: lemonMeringueMobile,
        tabletSrc: lemonMeringueTablet,
        desktopSrc: lemonMeringueDesktop,
        alt: 'lemon meringue dessert',
        name: 'Pie',
        description: 'Lemon Meringue Pie',
        price: '$5.00',
    }
};

export const VelvetCakeItemImage = {
    args: { 
        mobileSrc: velvetCakeMobile,
        tabletSrc: velvetCakeTablet,
        desktopSrc: velvetCakeDesktop,
        alt: 'velvet cake dessert',
        name: 'Cake',
        description: 'Red Velvet Cake',
        price: '$4.50',
    }
};

export const BrownieItemImage = {
    args: { 
        mobileSrc: brownieMobile,
        tabletSrc: brownieTablet,
        desktopSrc: brownieDesktop,
        alt: 'brownie dessert',
        name: 'Brownie',
        description: 'Salted Caramel Brownie',
        price: '$5.50',
    }
};

export const PannaCottaItemImage = {
    args: { 
        mobileSrc: pannaCottaMobile,
        tabletSrc: pannaCottaTablet,
        desktopSrc: pannaCottaDesktop,
        alt: 'panna cotta dessert',
        name: 'Panna Cotta',
        description: 'Vanilla Panna Cotta',
        price: '$6.50',
    }
};