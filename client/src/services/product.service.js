import httpService from "./http.services";

const productEndpoint = "product/";

const productService = {
    get: async () => {
        const req = await httpService.get(productEndpoint);
        return req.data;
    }
};
export default productService;