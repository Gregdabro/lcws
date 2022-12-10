import { useEffect } from "react";
import {useDispatch} from "react-redux";
import {getCategories} from "../store/categorySlice";
import {getColors} from "../store/colorSlice";
import {getProducts} from "../store/productSlice";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
        dispatch(getCategories());
        dispatch(getColors());
    }, []);
    return children;
};

export default AppLoader;