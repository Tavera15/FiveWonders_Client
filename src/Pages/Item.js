import React from 'react';
import './CSS/Item.css'

function Item()
{
    return(
        <div id="item-page">
            <div className="col-lg-6 col-sm-12">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active item-img">
                    <img className="d-block w-100" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/100595692_247305520028340_7620830935973363712_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=973b4a&_nc_ohc=vJH06ooTTqoAX_oKIcE&_nc_ht=scontent-dfw5-1.xx&oh=271e5f36147ffac935a11d96654b5782&oe=60C2363E" alt="First slide" />
                </div>
                <div className="carousel-item item-img">
                    <img className="d-block w-100" src="https://miro.medium.com/max/2880/1*RkMinN_ZS-mW1uqh1rANag.jpeg" alt="Second slide" />
                </div>
                <div className="carousel-item item-img">
                    <img className="d-block w-100" src="https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/117599231_303309337761291_5702051755074339585_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=973b4a&_nc_ohc=DFa4Apfl_x0AX8Qq9a_&_nc_ht=scontent-dfw5-2.xx&oh=50349a796477024d8ec839b9cbb883d4&oe=60C21040" alt="Third slide" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
            </div>
                
            <div className="col-lg-6 col-sm-12">
                <h1>Product Name</h1>
            </div>
        </div>
    );
}

export default Item;