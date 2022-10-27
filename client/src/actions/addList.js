import axios from "axios";
import { conf } from "../config";

const addList = async (title, token) => {
    try {
        const response = await axios.post(`${conf.base_url}/auth/lists`, {
            title
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

export default addList;