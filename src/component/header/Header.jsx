import React from "react"
import { Link } from "react-router-dom";
import './header.css';
import '../../assets/css/style.css';

function Header() {
    return (
      <div className="header">
        <div className="header-left">
          <img className="header-logo" src="/shopping-website/assets/icons/header-icons/header_logo.svg" alt="header-logo" />
          <nav className="header-text">
            <a className="header-link" href="#">Home</a>
            <a className="header-link" href="#">About</a>
            <a className="header-link" href="#">Contact us</a>
          </nav>
        </div>
        <div className="header-right">
          <img src="/shopping-website/assets/icons/header-icons/user-icon.svg" alt="user-icon" />
          <div className="shopping-cart-icon" data={0}>
       
          <img src="../../assets/icons/header-icons/cart-icon.svg" alt="cart-icon" />
          <Link to="/cart">abc</Link>
            
          </div>
          <img src="/shopping-website/assets/icons/header-icons/menu-icon.svg" alt="menu-icon" />
        </div>
      </div>
    );
  }
  
  export default Header;