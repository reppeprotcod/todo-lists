import React, { useState, useContext } from "react";
import login from "../actions/userLogin.js";
import AuthContext from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const auth = useContext(AuthContext);

    const loginClick = async () => {
        const loginState = await login(username, password);
        if (loginState) {
            auth.login(loginState);
            navigate('/lists');
        }
    }

    return (
        <div className="row">
            <form className="col s12">
                <div className="container">
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={username} onChange={(event) => setUsername(event.target.value)} id="username" type="text" className="validate" />
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={password} onChange={(event) => setPassword(event.target.value)} id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light #00796b teal darken-2 btn" onClick={loginClick}>Вход</a>
                </div>
            </form>
        </div>
    );
}

export default Login;