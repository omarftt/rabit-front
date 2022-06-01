import axios from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
    const {setAuth} = useAuth();

    const refresh = async () => {
        const response = await axios.get("/auth/local/refresh",{
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev))
            console.log(response.data.token)
            return {...prev,
                    roles: response.data.role,
                    accessToken: response.data.token
                    }
        })
        return response.data.token;
    }

    return refresh
}

export default useRefreshToken