import { BannerSection } from "./BannerSection/BannerSection"
import './style.css'
export const FooterContent = ()=>{
    return(<>
     <BannerSection/>
     <footer class="FooterContainer">

        <div class='FooterLogo'>
            <div class='LogoImg'>

            </div>
            <div class='FooterContact'>
            <a href="#" ><div class="facebook"></div></a>
            <a href="#">
            <div class="instagram"></div>
            </a>
            <a href="#" >
            <div class="pinterest"></div>
            </a>
            <a href="#" >
            <div class="twitter"></div>
            </a>
            <a href="#" >
            <div class="youtube"></div>
            </a>
            </div>
        </div>

        <div class="FooterList">
        <ol>
            <li>Home</li>
            <li>Pricing</li>
            <li>Products</li>
            <li> About Us</li>
            <li>Careers</li>
            <li> Community</li>
            <li>Privacy Policy</li>
        </ol>
    </div>

    <div class="FooterForm">
    <form class="FormContent">
        <input type="email" placeholder="  Email here…" required/>
        <button id='FooterBtn'>
        Go
        </button>
    </form>
    <span>Copyright 2020. All Rights Reserved</span>
    </div>

    </footer>
    </>
       
    )
}