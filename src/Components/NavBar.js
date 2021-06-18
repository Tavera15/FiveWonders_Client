import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/NavBar.css";

function NavBar()
{

    return(
        <div className="navbar-container">
            <div className="navbar-shader">

                <img
                    className="navbar-logo mb-4"
                    src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.6435-9/121175657_346058896819668_6192305800667003757_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=973b4a&_nc_ohc=RI3ruiJIUWsAX9fs7iZ&_nc_ht=scontent-hou1-1.xx&oh=e99ec25aa49c1361675d8894dd524f6e&oe=60E0C1C8" 
                    alt="logo"
                    />
                <hr/>
                <div>
                    <ul className="nav-ul">
                        <li className="nav-li"><Link to="/Products"><h3 className="nav-item-text">Products</h3></Link></li>
                        <li className="nav-li"><Link to="/Products"><h3 className="nav-item-text">Balloons</h3></Link></li>
                        <li className="nav-li"><Link to="/Products"><h3 className="nav-item-text">Clothing</h3></Link></li>
                        <li className="nav-li"><Link to="/Item"><h3 className="nav-item-text">Item</h3></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;