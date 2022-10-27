import axios from "axios";
import { conf } from "../config";

const deleteList = async (id, token) => {
    try {
        const response = await axios.delete(`${conf.base_url}/auth/lists/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}` 
            }
        });
        return response.data.list; //убрать потом
    } catch (e) {
        alert(e.response.data.message);
    }
}

export  default deleteList;