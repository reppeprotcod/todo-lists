import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import registration from "../actions/userRegistration.js";

const Registration = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");

    const checkPasswords = async () => {
        if (password === passwordTwo) {
            //await registration(username, password, navigate);
            if (await registration(username, password, navigate)) {
                navigate('/login');
            }
        } else {
            alert("Пароли не совпадают");
        }
    }

    return (
        <div>
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
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={passwordTwo} onChange={(event) => setPasswordTwo(event.target.value)} id="passwordTwo" type="password" className="validate" />
                                <label htmlFor="passwordTwo">Confirm password</label>
                            </div>
                        </div>
                        <a className="waves-effect waves-light #00796b teal darken-2 btn" onClick={checkPasswords}>Регистрация</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;