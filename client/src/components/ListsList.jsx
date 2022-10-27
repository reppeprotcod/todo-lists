import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import deleteList from "../actions/deleteList.js";
import AuthContext from "../contexts/AuthContext";

const ListsList = (props) => {
    const auth = useContext(AuthContext);

    if (!props.lists || !props.lists.length) {
        return <p className="center">Списков пока нет</p>
    }

    return (<ul>
        {props.lists.map((list) => {
            return (
                <li className="listLi" key={list.key}><NavLink className="nav" to={`/lists/${list._id}`}>{list.title}</NavLink> <a className="delete #00796b teal darken-2 btn-small" onClick={async () => {await deleteList(list._id, auth.token); props.onClick()}}>x</a></li>
            )
        })}
    </ul>)
}

export default ListsList;