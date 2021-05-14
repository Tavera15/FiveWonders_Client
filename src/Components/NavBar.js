import React from 'react';
import { Link } from 'react-router-dom';
import "./CSS/NavBar.css";

function NavBar()
{

    return(
        <div className="navbar navbar-light bg-light navbar-container">
            <div>
                <ul>
                    <li>
                        <Link to="/Products">Products</Link>
                    </li>
                    <li>
                        <Link to="/Item">Item</Link>
                    </li>
                    <li>
                        <h1>ads</h1>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;