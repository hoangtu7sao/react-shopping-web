import React from 'react';
import './single-product-woman.css';
import '../../assets/css/grid.css';

function SingleProductWoman() {
    return (
        <>
            <div className="single-product-woman grid wide">
                <div className="single-product-content row">
                    <div className="single-product-content-left l-6" data="24%">
                        <img className="product-image" src="/shopping-website/assets/images/single-product-woman/Plain-White-Shirt.png" alt="Woman" width="550" height="685" />
                    </div>
                    <div className="single-product-content-right l-6">
                        <div className="page-map row">
                            <a href="page-link">Home</a>/
                            <a href="page-link">Shop</a>/
                            <a href="page-link">Women</a>/
                            <a className="page-present">Shop</a>
                        </div>
                        <h1 className="product-title">Plain White Shirt</h1>
                        <div className="row">
                            <td><img src="images/star.jpg" alt="" /></td>
                            <td><img src="images/star.jpg" alt="" /></td>
                            <td><img src="images/star.jpg" alt="" /></td>
                            <td><img src="images/star.jpg" alt="" /></td>
                            <td><img src="images/star.jpg" alt="" /></td>
                            <td>(15)</td>
                        </div>
                        <div className="product-cost row">
                            <h2 className="cost">$69.00</h2>
                            <h2 className="sale-cost">$59.00</h2>
                        </div>
                        <div className="intro-area">
                            <p>A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.</p>
                        </div>
                        <div className="select-size-box row">
                            <p>Select size</p>
                            <select className="select-button" name="" id="">Select size</select>
                        </div>
                        <button onclick="add-to-cart()" className="single-product-button">Add to cart</button>
                        <div>
                            <p>Category: Women, Polo, Casual
                                Tags: Modern, Design, cotton
                            </p>
                        </div>
                        <div className="contact">
                            <img src="../assets/icons/single-product-woman/contact-1.svg" alt="" />
                            <img src="../assets/icons/single-product-woman/contact-2.svg" alt="" />
                            <img src="../assets/icons/single-product-woman/contact-3.svg" alt="" />
                            <img src="../assets/icons/single-product-woman/contact-4.svg" alt="" />
                            <img src="../assets/icons/single-product-woman/contact-5.svg" alt="" />
                        </div>
                    </div>
                    <div className="description row">
                        <p>Description</p>
                        <p>reviews(0)</p>
                        <div>
                            <p>A key objective is engaging digital marketing customers and allowing
                                them to interact with the brand through servicing and delivery of digital
                                media. Information is easy to access at a fast rate through the use of digital
                                communications.

                                Users with access to the Internet can use many digital mediums,
                                such as Facebook, YouTube, Forums, and Email etc. Through Digital
                                communications it creates a Multi-communication channel where
                                information can be quickly exchanged around the world by anyone without
                                any regard to whom they are.[28] Social segregation plays no part through
                                social mediums due to lack of face to face communication and information
                                being wide spread instead to a selective audience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SingleProductWoman;