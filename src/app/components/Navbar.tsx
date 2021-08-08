/* eslint-disable react-hooks/rules-of-hooks */
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/aluxion-logo.svg';

export const Navbar:FC = () => {

    const [toggle, setToggle] = useState(false);
    

    const handleToggle = (value:boolean) =>{
        setToggle(value);
        const originalStyle = window.getComputedStyle(document.body).overflow;

        if (toggle) {
            document.body.style.overflow = "auto";
            return () => (document.body.style.overflow = originalStyle);
        }else{
            document.body.style.overflow = "hidden";
            return () => (document.body.style.overflow = originalStyle);

        }
    }

    return (
        <nav className="navbar">
            <div className="navbar__container container">
                <Link to="/">
                    <img className="navbar__logo" src={logo} alt="Logo" />
                </Link>
                <ul className="navbar__items-content">
                    <Link to="/results" className="navbar__item btn">metro</Link>
                    <Link to="/results" className="navbar__item btn">cercanías</Link>
                    <Link to="/results" className="navbar__item btn" >carsharing</Link>
                </ul>

                {
                    toggle 
                    ? 
                        <svg className="icon-close" onClick={ () => handleToggle(false) }  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="5.46967" y1="23.8544" x2="23.8544" y2="5.46966" stroke="white" strokeWidth="1.5"/>
                            <line x1="6.53033" y1="5.85444" x2="24.9151" y2="24.2392" stroke="white" strokeWidth="1.5"/>
                        </svg>
                    :   
                        <svg className="icon-open" onClick={ () => handleToggle(true) }  width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="3" y1="8.25" x2="28" y2="8.25" stroke="white" strokeWidth="1.5"/>
                            <line x1="3" y1="20.25" x2="28" y2="20.25" stroke="white" strokeWidth="1.5"/>
                        </svg>
                }
                
            </div>

            {
                toggle &&
                (<div className="navbar__mobile">
                    <div className="navbar__mobile-items">
                        <Link to="/results" className="navbar-item-mobile btn" onClick={ () => handleToggle(false) }>metro</Link>
                        <Link to="/results" className="navbar-item-mobile btn" onClick={ () => handleToggle(false) }>cercanías</Link>
                        <Link to="/results" className="navbar-item-mobile btn" onClick={ () => handleToggle(false) }>carsharing</Link>
                    </div>
                </div>)
            }

        </nav>
    )
}
