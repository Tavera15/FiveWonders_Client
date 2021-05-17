import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/ProductCard.css';

function ProductCard(props)
{
    return(
        <div className="area-container col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-6">
            <div className="card ">
                <div className="card-body">
                    <img className="card-img-top" src={props.img} alt="product-img" />
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