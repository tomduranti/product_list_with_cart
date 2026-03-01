import './_Desserts.scss';

import GridItem from '../../molecules/GridItem/GridItem.jsx';

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

export default function Desserts() {
    return (
        <div className='desserts'>
            <h1 className='desserts__heading  text_preset_1'>desserts</h1>
            <div className='desserts__grid'>
                <GridItem className='desserts__grid_item' desktopSrc={waffleDesktop} tabletSrc={waffleTablet} mobileSrc={waffleMobile} alt="waffle dessert" name="Waffle" description="Waffle with Berries" price="$6.50" />
                <GridItem className='desserts__grid_item' desktopSrc={cremeBruleeDesktop} tabletSrc={cremeBruleeTablet} mobileSrc={cremeBruleeMobile} alt="crème brûlée dessert" name="Crème Brûlée" description="Vanilla Bean Crème Brûlée" price="$7.00" />
                <GridItem className='desserts__grid_item' desktopSrc={macaronDesktop} tabletSrc={macaronTablet} mobileSrc={macaronMobile} alt="macaron dessert" name="Macaron" description="Macaron Mix of Five" price="$8.00" />
                <GridItem className='desserts__grid_item' desktopSrc={tiramisuDesktop} tabletSrc={tiramisuTablet} mobileSrc={tiramisuMobile} alt="tiramisu dessert" name="Tiramisu" description="Classic Tiramisu" price="$5.50" />
                <GridItem className='desserts__grid_item' desktopSrc={baklavaDesktop} tabletSrc={baklavaTablet} mobileSrc={baklavaMobile} alt="baklava dessert" name="Baklava" description="Pistachio Baklava" price="$4.00" />
                <GridItem className='desserts__grid_item' desktopSrc={lemonMeringueDesktop} tabletSrc={lemonMeringueTablet} mobileSrc={lemonMeringueMobile} alt="lemon meringue dessert" name="Pie" description="Lemon Meringue Pie" price="$5.00" />
                <GridItem className='desserts__grid_item' desktopSrc={velvetCakeDesktop} tabletSrc={velvetCakeTablet} mobileSrc={velvetCakeMobile} alt="velvet cake dessert" name="Cake" description="Red Velvet Cake" price="$4.50" />
                <GridItem className='desserts__grid_item' desktopSrc={brownieDesktop} tabletSrc={brownieTablet} mobileSrc={brownieMobile} alt="brownie dessert" name="Brownie" description="Salted Caramel Brownie" price="$5.50" />
                <GridItem className='desserts__grid_item' desktopSrc={pannaCottaDesktop} tabletSrc={pannaCottaTablet} mobileSrc={pannaCottaMobile} alt="panna cotta dessert" name="Panna Cotta" description="Vanilla Panna Cotta" price="$6.50" />
            </div>
        </div>
    )
}