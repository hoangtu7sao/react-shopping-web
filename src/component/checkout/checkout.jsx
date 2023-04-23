import React from 'react';
import './checkout.css';
import './grid.css';

function Checkout() {
    return (
        <>
            <div action="" className="checkout grid wide">
                <nav className="page-map row">
                    <a className="page-link" href="">Home</a>
                    <p>/</p>
                    <p className="page-present">Checkout</p>
                </nav>
                <div className="checkout-title-area">
                    <h1 className="checkout-title">Billing details</h1>
                </div>
                <div className="user-info-area grid">
                    <div className="user-info-element row">
                        <p className="user-info-title l-12">Full Name<span className="indispensable">*</span></p>
                        <input type="text" className="input-checkout l-12" />
                    </div>
                    <div className="user-info-element row">
                        <p className="user-info-title l-12">Street address<span className="indispensable">*</span></p>
                        <input type="text" className="input-checkout l-12" />
                    </div>
                    <div className="user-info-element row">
                        <p className="user-info-title l-12">Town/City<span className="indispensable">*</span></p>
                        <input type="text" className="input-checkout l-12" value="House number and street name" />
                    </div>
                    <div className="user-info-element row">
                        <p className="user-info-title l-12">Phone<span className="indispensable">*</span></p>
                        <input type="text" className="input-checkout l-12" />
                    </div>
                    <div className="user-info-element row">
                        <p className="user-info-title l-12 ">Email address<span className="indispensable">*</span></p>
                        <input type="text" className="input-checkout l-12 " />
                    </div>
                    <h1 className="checkout-title">Your order</h1>
                </div>
                <div className="order-info-area">
                    <div className="order-cost grid">
                        <div className="order-info-rows row">
                            <p className="l-6">Products</p>
                            <p className="l-6">Total</p>
                        </div>
                        <div className="order-info-rows row">
                            <p className="product-info l-6">Plain White Shirt</p>
                            <p className="product-cost l-6">$59.00</p>
                        </div>
                        <div className="order-info-rows row">
                            <p className="product-info l-6">subtotal</p>
                            <p className="product-cost l-6">$59.00</p>
                        </div>
                        <div className="order-info-rows row">
                            <p className="product-info l-6"></p>
                            <p className="product-cost l-6">$59.00</p>
                        </div>
                    </div>
                </div>
                <div className="payment-method-area">
                    <div className="payment-method-frame">
                        <p className="payment-method-info">Cash on delivery. Please contact us if you require assistance or wish to make alternate arrangements.</p>
                    </div>
                    <button className="checkout-button">PLACE ORDER</button>
                </div>
            </div>
        </>
    );
}
export default Checkout;
