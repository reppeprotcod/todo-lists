import React, { useContext, useState } from "react";
import addList from "../actions/addList.js";
import AuthContext from "../contexts/AuthContext.js";
import { useTranslation } from 'react-i18next';

const AddList = (props) => {
    const[title, setTitle] = useState("");
    const auth = useContext(AuthContext);

    const { t, i18n } = useTranslation();

    const onCreateList = async () => {
        await addList(title, auth.token);
        props.onClick();
        setTitle("");
    }

    return (
        <div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={title} onChange={(event) => setTitle(event.target.value)} onKeyPress={(event) => {if(event.key === 'Enter') onCreateList()}} id="title" type="text" className="validate" />
                            <label htmlFor="title">{t('title')}</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light #00796b teal darken-2 btn" onClick={onCreateList} >{t('create list')}</a>
                </form>
            </div>
        </div>
    )
}

export default AddList;