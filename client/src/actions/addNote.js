import axios from "axios";
import { conf } from "../config";

const addNote = async (id, note, token) => {
    try {
        const response = await axios.post(`${conf.base_url}/auth/lists/${id}`, {
            note
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        //alert(response.data.message);
    } catch (e) {
        alert(e.response.data.message);
    }
}

export default addNote;