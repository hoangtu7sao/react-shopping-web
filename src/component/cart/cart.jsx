import React from "react";
import './cart.css';
import '../../assets/css/grid.css';

function CartPage() {
    return (
        <>
            <div className="cart">
                <div className="hero ">
                    <a className="page-map" href="">Home</a>
                    <p className="page-map">/</p>
                    <p className="page-map">Shopping cart</p>
                </div>
                <div className="cart-table">
                    <div className="cart-info grid wide">
                        <div className="cart-header row">
                            <p className="cart-header-title l-1 l-o-3 ">Product</p>
                            <p className="cart-header-title l-2 l-o-2 ">Price</p>
                            <p className="cart-header-title l-2 ">Quantity</p>
                            <p className="cart-header-title l-2 ">Total</p>
                        </div>
                        <hr className="line-1" />

                        <div className="row-1 row">
                            <a className="cart-close l-1 l-o-1 m-o-1 m-1" href="../../assets/icons/cart-icons/close.svg"></a>
                            <img className="Product-image l-1 l-o-2  m-1 " src="./assets/images/single-product-woman/Plain-White-Shirt.png" alt="Product-image" />
                            <p className="product-name l-2 l-o-3 ">Plain White Shirt</p>
                            <p className="product-cost l-3 l-o-6  ">$59.00</p>
                            <input className="cart-input l-3 l-o-8 m-1" type="text" value="1" />
                            <p className=" cart-total l-2 l-o-10 ">$59.00</p>
                        </div>
                        <hr className="line-2" />
                    </div>
                    <div className="coupon grid wide">
                        <h1 className="cart-total-title ">Cart total</h1>
                        <div className="cart-column-1 row">
                            <p className="cart-total-info c-1 c-o-1">subtotal</p>
                            <p className="cart-total-info c-1 c-o-7">$59.00</p>
                        </div>
                        <div className="cart-column-2 row">
                            <p className="cart-total-info c-3 c-o-1">Shipping Free</p>
                            <p className="cart-total-info c-1 c-o-5">FREE!!!</p>
                        </div>
                        <div className="cart-column-3 row">
                            <p className="cart-total-info c-1 c-o-1">total</p>
                            <p className="cart-total-info c-1 c-o-7">$59.00</p>
                        </div>
                        <button className="cart-button ">PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartPage;
