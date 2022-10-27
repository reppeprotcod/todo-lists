import React, { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import addNote from "../actions/addNote.js";

const AddNote = (props) => {
    const [note, setNote] = useState("");
    const auth = useContext(AuthContext);

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
                            <input value={note} onChange={(event) => setNote(event.target.value)} id="note" type="text" className="validate" />
                            <label htmlFor="note">Note</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light #00796b teal darken-2 btn" onClick={onAddNote}>Добавить запись</a>
                </form>
            </div>
        </div>
    )
}

export default AddNote;