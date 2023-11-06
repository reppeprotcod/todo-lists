import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import registration from "../actions/userRegistration.js";
import login from "../actions/userLogin.js";
import AuthContext from "../contexts/AuthContext.js";
import { useTranslation } from 'react-i18next';

const Registration = () => {
    const navigate = useNavigate();

    const { t, i18n } = useTranslation();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");

    const auth = useContext(AuthContext);

    const checkPasswords = async () => {
        if (password === passwordTwo) {
            //await registration(username, password, navigate);
            if (await registration(username, password)) {
                const loginState = await login(username, password);
                if (loginState) {
                    auth.login(loginState);
                    navigate('/lists');
                }
            }
        } else {
            alert(t('passwords do not match'));
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
                                <label htmlFor="username">{t('username')}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={password} onChange={(event) => setPassword(event.target.value)} id="password" type="password" className="validate" />
                                <label htmlFor="password">{t('password')}</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={passwordTwo} onChange={(event) => setPasswordTwo(event.target.value)} onKeyPress={(event) => { if (event.key === 'Enter') checkPasswords() }} id="passwordTwo" type="password" className="validate" />
                                <label htmlFor="passwordTwo">{t('confirm password')}</label>
                            </div>
                        </div>
                        <a className="waves-effect waves-light #00796b teal darken-2 btn" onClick={checkPasswords}>{t('sign up')}</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;