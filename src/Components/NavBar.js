import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/NavBar.css";
import Logo from "../Content/Logos/New_Logo.jpg";
import Cart from "../Content/Icons/Cart16.png";
import Search from "../Content/Icons/search.png";
import Account from "../Content/Icons/account.png";



function NavBar()
{
    return(
        <div className='sticky-top navbar-bg'>
            <div className='navbar-main'>
                <img src={Search} className="navbar-icon" />
                <img src={Logo} className="site-logo" />
                <div className='navbar-user'>
                    <img src={Cart} className="navbar-icon" />
                    <img src={Account} className="navbar-icon" />
                </div>
            </div>
            <nav className="navbar navbar-expand navbar-light  w-100 m-0">
                <div className="collapse navbar-collapse w-100" id="navbarNavDropdown">
                    <ul className="navbar-nav navbar-links-group">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Balloons <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Clothing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
/* 
    https://mk0abtastybwtpirqi5t.kinstacdn.com/wp-content/uploads/shopping-cart-payment-options.jpg
    https://www.facebook.com/5wonders/photos/a.105656960859864/371990414226516/?type=3&theater
    https://www.facebook.com/5wonders/photos/a.105662837525943/340390184053206/?type=3&theater

 */