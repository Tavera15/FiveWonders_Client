import React from "react";
import "./CSS/BasketPage.css";
import BasketCard from "../Components/BasketCard";

function BasketPage()
{
    return(
        <div className="base-page" id="basket-page">
            <div className="col-xl-8 col-lg-7 col-sm-12 basket-items hide-scrollbar pt-4">
                <BasketCard />
                <hr/>
                <BasketCard />
                <hr/>
                <BasketCard />
                <hr/>
                <BasketCard />
                <hr/>
                <BasketCard />
                <hr/>
            </div>
            <div className="col-xl-4 col-lg-5 col-sm-12 pt-4 x">
                <div className="checkout-box">
                    <h3>Order Summary</h3>
                    <div className="checkout-details-box pt-4">
                        <div className="single-detail-box mb-4">
                            <h5>Subtotal: </h5>
                            <h5>$220.00</h5>
                        </div>
                        <div className="single-detail-box mb-4">
                            <h5>Delivery: </h5>
                            <h5>(?)</h5>
                        </div>
                        <div className="single-detail-box mb-4">
                            <h5>Total</h5>
                            <h5>$220.00</h5>
                        </div>
                    </div>
                    <button className="btn btn-dark checkout-btn mt-4"><h4 className="checkout-btn-text">Checkout</h4></button>
                </div>
            </div>
        </div>
    );
}

export default BasketPage;

// https://mk0abtastybwtpirqi5t.kinstacdn.com/wp-content/uploads/shopping-cart-payment-options.jpg