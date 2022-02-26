import React from 'react';
import './CSS/Products.css';
import ProductList from '../Components/ProductList';

function Products()
{
    return(
        <div className="pt-4">
            <ProductList />
        </div>
    );
}

export default Products;