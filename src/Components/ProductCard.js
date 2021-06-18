import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/ProductCard.css';

function ProductCard(props)
{
    return(
        <div className="card-container mb-4">
            <div className="card ">
                <div className="card-body">
                    <img className="card-img-top " src={props.img} alt="product-img"/>
                    <div className="card-text mt-2">                
                        <h4 className="card-product-name">{props.name}</h4>
                        <h4 className="card-prices">$34</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;