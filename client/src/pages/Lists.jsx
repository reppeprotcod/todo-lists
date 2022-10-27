import React, { useContext, useEffect, useState } from "react";
import ListsList from "../components/ListsList";
import AuthContext from "../contexts/AuthContext";
import getLists from "../actions/getLists.js";
import AddList from "../components/AddList";

const Lists = () => {
    const [lists, setLists] = useState([]);
    const auth = useContext(AuthContext);

    useEffect(() => {
        (async () => {
            if (!lists || !lists.length) {
                let list = await getLists(auth.token);
                setLists(list.map((l, key) => {
                    l.key = key;
                    return l;
                }));
            }
        })();
    }, [lists, auth.token]);

    const cleanList = () => {
        setLists([]);
    }

    return (
        <div className="container lists">
            <ListsList onClick={cleanList} lists={lists} />
            <AddList onClick={cleanList}/>
        </div>
    )
}

export default Lists;