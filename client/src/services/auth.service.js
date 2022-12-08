import axios from "axios";
import localStorageService from "./localStorage.service";


const httpAuth = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "api/auth/"
});

const authService = {
    signUp: (username, email, password) => {
        return httpAuth
            .post("registration", {
                username,
                email,
                password,
            })
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response;
            });
    },
    register: async ({name, email, password}) => {
        const { data } = await httpAuth.post("registration", {
            name,
            email,
            password
        });
        localStorageService.setTokens({...data})
        localStorage.setItem("user", JSON.stringify(data));
        return data;
    },
    login: async ({ email, password }) => {
        const { data } = await httpAuth.post("login", {
            email,
            password
        });
        localStorageService.setTokens({...data})
        console.log("login data:", data)
        return data;
    },
    // refresh: async () => {
    //     const { data } = await httpAuth.post("token", {
    //         grant_type: "refresh_token",
    //         refresh_token: localStorageService.getRefreshToken()
    //     });
    //     return data;
    // }
};

export default authService;
