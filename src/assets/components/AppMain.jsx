
import '../css/main.css'
import ImgShopLocator from '../img/buy-comics-shop-locator.png'
import ImgDigitalComics from '../img/buy-comics-digital-comics.png'
import ImgMerchandise from '../img/buy-comics-merchandise.png'
import ImgPowerVisa from '../img/buy-dc-power-visa.svg'
import ImgSubscription from '../img/buy-comics-subscriptions.png'


export default function AppMain () {


    return (
        <>

        <div class="content">
            <h1>Contente goes here</h1>
        </div>

        <div className="sub_content">
            <div class="items"><img src={ImgDigitalComics} />DIGITAL COMICS</div>
            <div class="items"><img src={ImgMerchandise} />DC MERCHANDISE</div>
            <div class="items"><img src={ImgSubscription} />SUBSCRIPTION</div>
            <div class="items"><img src={ImgShopLocator} />COMIC SHOP LOCATOR</div>
            <div class="items"><img src={ImgPowerVisa} />DC POWER VISA</div>
            
        </div>
        
        </>
    )


}