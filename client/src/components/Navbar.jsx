import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Navbar = () => {

    const { t, i18n } = useTranslation();
    const navigate = useNavigate();

    return (
        <div>
            <nav>
                <div className="nav-wrapper #00796b teal darken-2">
                    <div className="container">
                        <a href="/" className="brand-logo">ToDo</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i>=</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/login">{t('sign in')}</NavLink></li>
                            <li><NavLink to="/registration">{t('sign up')}</NavLink></li>
                        </ul>
                        <ul id="slide-out" className="sidenav sidenav-close">
                            <li><NavLink to="/login">{t('sign in')}</NavLink></li>
                            <li><NavLink to="/registration">{t('sign up')}</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;