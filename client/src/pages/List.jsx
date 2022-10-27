import React, { useContext, useEffect, useState } from "react";
import AddNote from "../components/AddNote";
import AuthContext from "../contexts/AuthContext";
import getNotes from "../actions/getNotes.js";
import { useParams } from "react-router-dom";
import NotesList from "../components/NotesList";

const List = () => {
    const params = useParams();
    const id = params.id;
    const [notes, setNotes] = useState(null);
    const auth = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            if(!notes || !notes.length){
                let notes = await getNotes(id, auth.token);
                setNotes(notes);
            }
        })();
    }, [notes, auth.token, id]);

    const cleanNotes = () => {
        setNotes([]);
    }

    return(
        <div className="container lists">
            <NotesList onClick={cleanNotes} id={id} notes={notes}/>
            <AddNote onClick={cleanNotes} id={id}/>
        </div>
    )
}

export default List;