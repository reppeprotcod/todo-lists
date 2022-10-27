import axios from "axios";
import { conf } from "../config";

const deleteNote = async (id, index, token) => {
    try {
        const response = await axios.delete(`${conf.base_url}/auth/lists/${id}/${index}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data.note;//убратьььььььььь
    } catch (e) {
        alert(e.response.data.message);
    }
}

export default deleteNote;