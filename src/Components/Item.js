import React, { useState } from 'react';
import './CSS/Item.css'
import plusSign from '../Content/Icons/round-plus.svg';
import minusSign from '../Content/Icons/round-minus.svg';
import { Button } from 'react-bootstrap';

function Item()
{
    const[quantity, setQuantity] = useState(1);
    const[sizeSelected, setSizeSelected] = useState("");

    function onQuantityUpdate(event, amount){
        const newQty = quantity + amount <= 1 ? 1 : quantity + amount;
        setQuantity(newQty);
    }

    function onSizeSelect(event, newSize, boxNum){
        setSizeSelected(newSize);

        let allSizeBoxes = document.getElementsByClassName("size-box");
        
        for(let i = 0; i < allSizeBoxes.length; i++)
        {
            if(i === boxNum)
                allSizeBoxes[i].classList.add("size-box-selected");
            else
                allSizeBoxes[i].classList.remove("size-box-selected");
        }        
    }

    return(
        <div id="item-page">
            <div id="demo" className="carousel slide col-lg-7 col-md-12" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#demo" data-slide-to="0" className="active"></li>
                    <li data-target="#demo" data-slide-to="1"></li>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active item-img">
                        <img src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/183663618_490811815677708_5697824285733319110_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=973b4a&_nc_ohc=R48g3yoXSEgAX9oHBwJ&_nc_ht=scontent-dfw5-2.xx&oh=7e4f88355beec5b48157487bc414403d&oe=60D1B1C7" alt="Los Angeles"/>
                    </div>
                    <div className="carousel-item item-img">
                        <img src="https://miro.medium.com/max/2880/1*RkMinN_ZS-mW1uqh1rANag.jpeg" alt="New York"/>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>

            </div>
                
            <div className="col-lg-5 col-sm-12">
                <h1 className="item-name">Over the Moon - Chang'e Balloon</h1>
                <h2 className="item-price">$10.00</h2>
                
                < hr />

                <div className="mb-4">
                    <h4>Quantity</h4>
                    <div className="item-quantity-container">
                        <input onClick={e => onQuantityUpdate(e, -1)} type="image" alt="minus" src={minusSign} className="quantity-btn unhover"/>
                        <p className="item-quantity-num unhover">{quantity}</p>
                        <input onClick={e => onQuantityUpdate(e, 1)} type="image" alt="plus" src={plusSign} className="quantity-btn unhover" />
                    </div>
                </div>

                <div className="mb-4">
                    <h4>Select Size</h4>
                    <div className="item-select-size-container">
                        <div className="size-box-container"><div onClick={e => onSizeSelect(e, "XS", 0)} type="button" className="size-box box-0"><p className="size-box-text unhover">XS</p></div></div>
                        <div className="size-box-container"><div onClick={e => onSizeSelect(e, "S", 1)} type="button" className="size-box box-1"><p className="size-box-text unhover">S</p></div></div>
                        <div className="size-box-container"><div onClick={e => onSizeSelect(e, "M", 2)} type="button" className="size-box box-2"><p className="size-box-text unhover">M</p></div></div>
                        <div className="size-box-container"><div onClick={e => onSizeSelect(e, "XL", 3)} type="button" className="size-box box-3"><p className="size-box-text unhover">XL</p></div></div>
                    </div>
                </div>

                <Button type="button" className="btn btn-dark col-12 mb-4"><h4 className="add-to-cart-btn-text">Add To Cart</h4></Button>
                
                <div>
                    <p className="item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p><p className="item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p><p className="item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p><p className="item-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

            </div>

        </div>
    );
}

export default Item;