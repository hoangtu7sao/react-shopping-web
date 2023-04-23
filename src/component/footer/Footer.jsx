
import React from "react"
import './footer.css';
import './grid.css';


function Footer() {
    return (
      <div className="footer grid">
        <div className="footer-top row">
          <div className="footer-column l-3 m-6 c-12">
            <p className="footer-title">COMPANY INFO</p>
            <a href="" className="footer-link">About us</a>
            <a href="" className="footer-link">Lastest Posts</a>
            <a href="" className="footer-link">Contact us</a>
            <a href="" className="footer-link">Shop</a>
          </div>
          <div className="footer-column l-3 m-6 c-12">
            <p className="footer-title">HELP LINKS</p>
            <a href="" className="footer-link">Tracking</a>
            <a href="" className="footer-link">Order status</a>
            <a className="footer-link" href="">Delivery</a>
            <a className="footer-link" href="">Shipping info</a>
            <a className="footer-link" href="">FAQ</a>
          </div>
          <div className="footer-column l-3 m-6 c-12">
            <p className="footer-title" >USEFUL LINKS</p>
            <a className="footer-link" href="">Special Offers</a>
            <a className="footer-link" href="">Gift Card</a>
            <a className="footer-link" href="">Advetising</a>
            <a href="" className="footer-link">Term of Use</a>
          </div>
          <div className="footer-column l-3 m-6 c-12">
            <p className="footer-title">GET IN THE KNOW</p>
            <form action="" className="footer-input-email">
              <input type="text" className="input-email" Value="Email" />
              <button className="footer-input-email-button"></button>
            </form>
          </div>
        </div>
        <hr />
        <div className="footer-bottom row">
          <div className="left-area l-9 m-6 c-12">
            <p className="copyright">© 2020 NorthStar eCommerce</p>
            <a href="">Privacy Policy Terms &amp; Conditions</a>
          </div>
          <div className="right-area l-3 m-6 c-12">
            <img className="bottom-footer-icons" src="/shopping-website/assets/icons/footer-icons/payment-icon1.svg" alt="" />
            <img className="bottom-footer-icons" src="/shopping-website/assets/icons/footer-icons/payment-icon2.svg" alt="" />
            <img className="bottom-footer-icons" src="/shopping-website/assets/icons/footer-icons/payment-icon3.svg" alt="" />
            <img className="bottom-footer-icons" src="/shopping-website/assets/icons/footer-icons/payment-icon4.svg" alt="" />
          </div>
        </div>
      </div>
    );
  }
  
  export default Footer;