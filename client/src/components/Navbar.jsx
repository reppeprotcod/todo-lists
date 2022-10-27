import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper #00796b teal darken-2">
                    <div className="container">
                        <a href="/" className="brand-logo">ToDo</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i>=</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/login">Вход</NavLink></li>
                            <li><NavLink to="/registration">Регистрация</NavLink></li>
                        </ul>
                        <ul id="slide-out" className="sidenav">
                            <li><NavLink to="/login">Вход</NavLink></li>
                            <li><NavLink to="/registration">Регистрация</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;