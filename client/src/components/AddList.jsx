import React, { useContext, useState } from "react";
import addList from "../actions/addList.js";
import AuthContext from "../contexts/AuthContext.js";

const AddList = (props) => {
    const[title, setTitle] = useState("");
    const auth = useContext(AuthContext);

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
                            <input value={title} onChange={(event) => setTitle(event.target.value)} id="title" type="text" className="validate" />
                            <label htmlFor="title">Title</label>
                        </div>
                    </div>
                    <a className="waves-effect waves-light #00796b teal darken-2 btn" onClick={onCreateList} >Создать список</a>
                </form>
            </div>
        </div>
    )
}

export default AddList;