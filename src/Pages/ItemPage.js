import React from 'react';
import Item from '../Components/Item';
import ProductList from '../Components/ProductList';

function ItemPage()
{
    return(
        <div className="base-page">
            <Item />
            <hr />
            <ProductList />
            <hr />
        </div>
    );
}

export default ItemPage;