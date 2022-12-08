import axios from "axios";
import { toast } from "react-toastify";

const http = axios.create({
    baseURL: process.env.REACT_APP_API_URL + "api/"
});

http.interceptors.request.use(
    async function (config) {
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);
// function transformData(data) {
//     return data && !data._id
//         ? Object.keys(data).map((key) => ({
//             ...data[key]
//         }))
//         : data;
// }
http.interceptors.response.use(
    (res) => {
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;

        if (expectedErrors) {
            console.log(error);
            toast.error("Something was wrong. Try it later");
        }
        return Promise.reject(error);
    }
);
const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch
};
export default httpService;
