import React from 'react';
import Item from '../Components/Item';
import ProductList from '../Components/ProductList';

function ItemPage()
{
    return(
        <div className="base-page">
            <Item btnText="Add to cart" />
        </div>
    );
}

export default ItemPage;