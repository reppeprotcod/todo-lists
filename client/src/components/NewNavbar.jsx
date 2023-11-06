import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { useTranslation } from 'react-i18next';

const NewNavbar = () => {
    const auth = useContext(AuthContext);

    const { t, i18n } = useTranslation();

    return (
        <div>
            <nav>
                <div className="nav-wrapper #00796b teal darken-2">
                    <div className="container">
                        <a href="/" className="brand-logo">ToDo</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i>=</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/login" onClick={() => auth.logout()}>{t('sign out')}</NavLink></li>
                            <li><NavLink to="/lists">{t('lists')}</NavLink></li>
                        </ul>
                        <ul id="slide-out" className="sidenav sidenav-close">
                            <li><NavLink to="/login" onClick={() => auth.logout()}>{t('sign out')}</NavLink></li>
                            <li><NavLink to="/lists">{t('lists')}</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NewNavbar;