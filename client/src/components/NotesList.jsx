import React, { useContext } from "react";
import deleteNote from "../actions/deleteNote";
import AuthContext from "../contexts/AuthContext";

const NotesList = (props) => {
    const auth = useContext(AuthContext);

    if(!props.notes || !props.notes.length){
        return <p className="center">Задач пока нет</p>
    }

    return ( <ul>
        {props.notes.map((note, key) => {
            return(
                <li className="noteLi" key={key}>{note} <a className=" delete #00796b teal darken-2 btn-small" onClick={async () => {await deleteNote(props.id, key, auth.token); props.onClick()}}>✓</a></li>
            )
        })}
    </ul>
    )
}

export default NotesList;