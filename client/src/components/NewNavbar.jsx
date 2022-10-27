import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const NewNavbar = () => {
    const auth = useContext(AuthContext);
    return (
        <div>
            <nav>
                <div className="nav-wrapper #00796b teal darken-2">
                    <div className="container">
                        <a href="/" className="brand-logo">ToDo</a>
                        <a href="#" data-target="slide-out" className="sidenav-trigger"><i>=</i></a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><NavLink to="/login" onClick={() => auth.logout()}>Выход</NavLink></li>
                            <li><NavLink to="/lists">Списки</NavLink></li>
                        </ul>
                        <ul id="slide-out" className="sidenav">
                            <li><NavLink to="/login" onClick={() => auth.logout()}>Выход</NavLink></li>
                            <li><NavLink to="/lists">Списки</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NewNavbar;