import axios from "axios";
import localStorageService from "./localStorage.service";


const httpAuth = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "api/auth/"
});

httpAuth.interceptors.response.use(
    (res) => {
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 500 &&
            error.response.status < 503;

        if (!expectedErrors) {
            alert("Something was wrong. Try it later");
        }
        return Promise.reject(error);
    }
);

// todo: проверка авторизации
// const authInterceptor = config => {
//     config.headers.authorization = `Bearer ${localStorageService.getAccessToken()}`
//     console.log("authInterceptor:", config)
//     return config
// }
//
// httpAuth.interceptors.request.use(authInterceptor)

const authService = {
    signup: async ({name, email, password}) => {
        const { data } = await httpAuth.post("registration", {
            name,
            email,
            password
        });
        console.log("signUp: data", data)
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
        localStorage.setItem("user", JSON.stringify(data));
        return data;
    },
    logout: async () => {
        localStorage.removeItem("user");
    },
    // todo: проверка авторизации
    // check: async () => {
    //     const { data } = await httpAuth.get("refresh");
    //     localStorageService.setTokens({...data})
    //     localStorage.setItem("user", JSON.stringify(data));
    //     return data;
    // }
};

export default authService;
