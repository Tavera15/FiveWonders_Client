import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/NavBar.css";
import Logo from "../Content/Logos/LogoOriginal.png";


function NavBar()
{
    return(
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light small-device-navbar">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <div className="navbar-shader hide-scrollbar big-device-navbar">

                <div>
                    <a href="/">Account</a>
                    <a href="/">Cart</a>
                </div>
                <img

                    className="navbar-logo mb-4"
                    src={Logo} 
                    alt="logo"
                />
                <hr/>
                <div>
                    <ul className="nav-ul">
                        <li className="nav-li"><Link to="/Products"><h3 className="nav-item-text">Products</h3></Link></li>
                        <li className="nav-li"><Link to="/Item"><h3 className="nav-item-text">Item</h3></Link></li>
                        <li className="nav-li"><Link to="/Cart"><h3 className="nav-item-text">Cart</h3></Link></li>
                        <li className="nav-li"><Link to="/EditCartItem"><h3 className="nav-item-text">Cart Item</h3></Link></li>

                        <li className="nav-li"><Link to="/Admin/ProductManager/CreateItem"><h3 className="nav-item-text">Create Item</h3></Link></li>
                        
                        <li className="nav-li"><Link to="/Admin/CategoryManager/CreateCategory"><h3 className="nav-item-text">Create Category</h3></Link></li>
                        
                        <li className="nav-li"><Link to="/Admin/SubcategoryManager/CreateSubcategory"><h3 className="nav-item-text">Create Subcategory</h3></Link></li>
                        
                        <li className="nav-li"><Link to="/Admin/SizeChartManager/CreateSizeChart"><h3 className="nav-item-text">Create Size Chart</h3></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
/* 
    https://mk0abtastybwtpirqi5t.kinstacdn.com/wp-content/uploads/shopping-cart-payment-options.jpg
    https://www.facebook.com/5wonders/photos/a.105656960859864/371990414226516/?type=3&theater
    https://www.facebook.com/5wonders/photos/a.105662837525943/340390184053206/?type=3&theater

 */