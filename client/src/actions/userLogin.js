import axios from "axios";
import { conf } from "../config";

const login = async (username, password) => {
    try{
        const response = await axios.post(`${conf.base_url}/auth/login`, {
            username,
            password
        });
        // alert(response.data.token);
        return response.data.token;
    } catch (e) {
        console.log(e);
        alert(e.response.data.message);
    }
}

export default login;