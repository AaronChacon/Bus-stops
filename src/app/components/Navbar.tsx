import React, { useState } from 'react';

import logo from '../../assets/img/aluxion-logo.svg';

export const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar__container container">
                <img className="navbar__logo" src={logo} alt="Logo" />
                <ul className="navbar__items-content">
                    <li className="navbar__item">metro</li>
                    <li className="navbar__item">cercanías</li>
                    <li className="navbar__item">carsharing</li>
                </ul>

                {
                    toggle 
                    ? 
                        <svg className="navbar__icon-close" onClick={ () => setToggle(false) }  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="5.46967" y1="23.8544" x2="23.8544" y2="5.46966" stroke="white" strokeWidth="1.5"/>
                            <line x1="6.53033" y1="5.85444" x2="24.9151" y2="24.2392" stroke="white" strokeWidth="1.5"/>
                        </svg>
                    :   
                        <svg className="navbar__icon-open" onClick={ () => setToggle(true) }  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="3" y1="8.25" x2="28" y2="8.25" stroke="white" strokeWidth="1.5"/>
                            <line x1="3" y1="20.25" x2="28" y2="20.25" stroke="white" strokeWidth="1.5"/>
                        </svg>
                }
                
            </div>

            {
                toggle &&
                (<div className="navbar__mobile">
                    <div className="navbar__mobile-items">

                        <h3 className="navbar-item-mobile">metro</h3>
                        <h3 className="navbar-item-mobile">cercanías</h3>
                        <h3 className="navbar-item-mobile">carsharing</h3>

                    </div>
                </div>)
            }

        </nav>
    )
}
