import React, { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import addNote from "../actions/addNote.js";
import { useTranslation } from 'react-i18next';

const AddNote = (props) => {
    const [note, setNote] = useState("");
    const auth = useContext(AuthContext);

    const { t, i18n } = useTranslation();

    const onAddNote = async () => {
        await addNote(props.id, note, auth.token);
        props.onClick();
        setNote("");
    }

    return(
        <div>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={note} onChange={(event) => setNote(event.target.value)} onKeyPress={(event) => { if(event.key === 'Enter') onAddNote(); }} id="note" type="text" className="validate" />
                            <label htmlFor="note">{t('note')}</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light #00796b teal darken-2 btn" onClick={onAddNote}>{t('add note')}</a>
                </form>
            </div>
        </div>
    )
}

export default AddNote;