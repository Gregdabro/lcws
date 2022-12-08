import axios from "axios";

const httpAuth = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "api/auth/"
});

const authService = {
    register: async ({ name, email, password }) => {
        const { data } = await httpAuth.post("registration", {
            name,
            email,
            password
        });
        return data;
    },
    // login: async ({ email, password }) => {
    //     const { data } = await httpAuth.post(`accounts:signInWithPassword`, {
    //         email,
    //         password
    //     });
    //     return data;
    // },
    // refresh: async () => {
    //     const { data } = await httpAuth.post("token", {
    //         grant_type: "refresh_token",
    //         refresh_token: localStorageService.getRefreshToken()
    //     });
    //     return data;
    // }
};

export default authService;
