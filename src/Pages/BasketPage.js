import React from "react";
import "./CSS/BasketPage.css";
import BasketCard from "../Components/BasketCard";

function BasketPage()
{
    return(
        <div className="base-page hide-scrollbar" id="basket-page">
            <div className="col-lg-7 col-sm-12 basket-items hide-scrollbar">
                <h1>items</h1>
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
            <div className="col-lg-5 col-sm-12">
                <h1>checkout</h1>
            </div>
        </div>
    );
}

export default BasketPage;

// https://mk0abtastybwtpirqi5t.kinstacdn.com/wp-content/uploads/shopping-cart-payment-options.jpg