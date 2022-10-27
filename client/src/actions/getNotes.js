import axios from "axios";
import { conf } from "../config";

const getNotes = async (id, token) => {
    try {
        const response = await axios.get(`${conf.base_url}/auth/lists/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data.notes;
    } catch (e) {
        alert(e.response.data.message);
    }
}

export default getNotes;