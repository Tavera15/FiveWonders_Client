import React from 'react';
import './CSS/Products.css';
import ProductList from '../Components/ProductList';

function Products()
{
    return(
        <div className="base-page">
            <div className="products-banner-img card-img-top mb-4">
                <div className="products-banner-shader">
                    <h1 className="banner-name">Products</h1>
                </div>                
            </div>

            <ProductList />
        </div>
    );
}

export default Products;