import React from 'react';
import './CSS/Products.css';
import ProductCard from '../Components/ProductCard';

function Products()
{
    return(
        <div className="base-page">
            <h1>Products</h1>

            <div className=" products-list col-12">
                <ProductCard img="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/117599231_303309337761291_5702051755074339585_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=973b4a&_nc_ohc=DFa4Apfl_x0AX8Qq9a_&_nc_ht=scontent-dfw5-2.xx&oh=50349a796477024d8ec839b9cbb883d4&oe=60C21040"/>
                
                <ProductCard img="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/119062054_321936829231875_5774789871987076892_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=973b4a&_nc_ohc=QSVbGlrkT4sAX8Ra9Te&_nc_ht=scontent-dfw5-2.xx&oh=ded986f4008eb20ed90974e537ba4ae5&oe=60C3692D" />
                
                <ProductCard img="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/121359810_348416586583899_7732558674776597127_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=973b4a&_nc_ohc=vKvRahe-smMAX_eTD-c&_nc_ht=scontent-dfw5-2.xx&oh=eb4f4392d9e18f1e651df7256b1e90be&oe=60C402CD"/>
                
                <ProductCard img="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/100595692_247305520028340_7620830935973363712_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=vJH06ooTTqoAX_oKIcE&_nc_ht=scontent-dfw5-1.xx&oh=271e5f36147ffac935a11d96654b5782&oe=60C2363E" />
                
                <ProductCard img="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/103415793_257784892313736_7463922553808907042_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=973b4a&_nc_ohc=m5C-101xaC4AX_unA5c&_nc_ht=scontent-dfw5-2.xx&oh=e12f1c48f90882870a203951794b8a2b&oe=60C22D31"/>
            </div>
        </div>
    );
}

export default Products;