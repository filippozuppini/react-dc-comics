import '../css/footer.css'
import DcLogoBg from '../img/dc-logo-bg.png'

export default function AppFooter () {

    return (
        <>

            <section class="main-footer">
                <div className="menu-section">
                    <div class="list">
                        <h3 className="list-title">DC COMICS</h3>
                        <ul>
                            <li><a href="#">Characters</a></li>
                            <li><a href="#">Comics</a></li>
                            <li><a href="#">Movies</a></li>
                            <li><a href="#">TV</a></li>
                            <li><a href="#">Games</a></li>
                            <li><a href="#">Video</a></li>
                            <li><a href="#">News</a></li>
                        </ul>
                    </div>
                    <div class="list">
                        <h3 className="list-title">DC</h3>
                        <ul>
                            <li><a href="#">Terms Of Use</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Ad Choices</a></li>
                            <li><a href="#">Advertising</a></li>
                            <li><a href="#">Jobs</a></li>
                            <li><a href="#">Subscription</a></li>
                            <li><a href="#">Talent Workshops</a></li>
                            <li><a href="#">COSC Certificates</a></li>
                            <li><a href="#">Ratings</a></li>
                            <li><a href="#">Shop Help</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="list">
                        <h3 className="list-title">SITES</h3>
                        <ul>
                            <li><a href="#">DC</a></li>
                            <li><a href="#">MAD Magazine</a></li>
                            <li><a href="#">DC Kids</a></li>
                            <li><a href="#">DC Universe</a></li>
                            <li><a href="#">DC Power Visa</a></li>
                        </ul>
                    </div>
                </div>

                <div class="logo-section">
                    <img src={DcLogoBg} />
                </div>
   
            </section>

            <section class="sub-footer">
                <div class="cta">
                    <a href="#">SIGN-UP NOW!</a>
                </div>
                <div class="social-links">
                    <h3>FOLLOW US</h3>
                    <div className="icon">
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />

                    </div>

                </div>

            </section>

        </>
    )

}