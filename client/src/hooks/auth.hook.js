import { useCallback, useEffect, useState } from "react"


const useAuth = () => {
    const [token, setToken] = useState(null);

    const login = useCallback((t) => {
        setToken(t);

        localStorage.setItem("userToken", JSON.stringify({
            t
        }));
        //console.log(JSON.parse(localStorage.getItem("userToken")));//ОДИН ТУТ
    }, []);

    const logout = useCallback(() => {
        setToken(null);

        localStorage.removeItem("userToken");
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("userToken"));
        //console.log(data);// И ОДИН ТУТ

        if(data && data.t){
            login(data.t);
        }
    }, [login]);

    return {
        login, token,
        logout
    }
}

export default useAuth;