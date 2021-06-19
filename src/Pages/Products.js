import React from 'react';
import './CSS/Products.css';
import ProductCard from '../Components/ProductCard';

function Products()
{
    return(
        <div className="base-page">
            <div className="products-banner-img card-img-top mb-4">
                <div className="products-banner-shader">
                    <h1 className="banner-name">Products</h1>
                </div>                
            </div>

            <div className="product-container col-12 p-0">
                <div className=" products-list col-12">
                    <ProductCard name="Character Text Pocket T-Shirt - Mint Acid Wash" 
                    img="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/183663618_490811815677708_5697824285733319110_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=R48g3yoXSEgAX9oHBwJ&_nc_ht=scontent-dfw5-2.xx&oh=7e4f88355beec5b48157487bc414403d&oe=60D1B1C7"
                    />
                    
                    <ProductCard name="Character Text Pocket T-Shirt - Mint Acid Wash" 
                    img="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/166068028_464775821614641_5695597253326723654_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=973b4a&_nc_ohc=X6H_4E0S5TwAX-RkvNf&_nc_ht=scontent-dfw5-1.xx&oh=ccb3be175abc5ffdd5f5a38a3a6f749c&oe=60D0F7AE" 
                    />
                    
                    <ProductCard name="Character Text Pocket T-Shirt - Mint Acid Wash Character Text Pocket T-Shirt - Mint Acid Wash" 
                    img="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/183663618_490811815677708_5697824285733319110_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=R48g3yoXSEgAX9oHBwJ&_nc_ht=scontent-dfw5-2.xx&oh=7e4f88355beec5b48157487bc414403d&oe=60D1B1C7"
                    />
                    
                    <ProductCard name="Character Text Pocket T-Shirt - Mint Acid Wash" 
                    img="https://via.placeholder.com/250" 
                    />
                    
                    <ProductCard name="Character Text Pocket T-Shirt - Mint Acid Wash" 
                    img="https://via.placeholder.com/250"
                    />

                    <ProductCard name="Character Text Pocket T-Shirt - Mint Acid Wash" 
                    img="https://via.placeholder.com/100"
                    />

                    <ProductCard name="Character Text Pocket T-Shirt - Mint Acid Wash" 
                    img="https://via.placeholder.com/100"
                    />
                </div>
            </div>
        </div>
    );
}

export default Products;