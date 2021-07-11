import React from 'react';
import './CSS/BasketCard.css';
import {Button} from "react-bootstrap";

function BasketCard()
{
    return(
        <div className="mb-4 basket-card-container">

            <div className="basket-card-product">
                <div className="basket-img-and-details-container">
                    <div className="basket-card-img-container">
                        <img 
                            className="basket-card-img"
                            src="https://via.placeholder.com/250"
                            alt="product"   
                            />
                    </div>
                    <div className="basket-product-details-container">
                        <h5 className="basket-product-name">Product Name - Limited Edition</h5>
                        <h6>Qty: 1</h6>
                        <h6>Unit Price: $20.00</h6>
                    </div>
                </div>
                <div className="basket-product-price-container">
                    <h6>$220.00</h6>
                </div>
                <div>
                    <button type="button" className="btn btn-link">Edit</button>
                    <button type="button" className="btn btn-link">Delete</button>
                </div>
            </div>
        </div>
    );
}

export default BasketCard;