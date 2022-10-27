import axios from 'axios';
import { conf } from '../config';

const registration = async (username, password) => {
    try{
        const response = await axios.post(`${conf.base_url}/auth/registration`, {
        username,
        password
    });
    return response.data.user;
    //navigate()
    } catch (e) {
        console.log(e);
        alert(e.response.data.message);
    }
}

export default registration;