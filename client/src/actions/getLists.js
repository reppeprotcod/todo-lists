import axios from "axios";
import { conf } from "../config";

const getLists = async (token) => {
    try {
        const response = await axios.get(`${conf.base_url}/auth/lists`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return response.data.lists;
    } catch (e) {
        //alert(e.response.data.message);
    }
}

export default getLists;