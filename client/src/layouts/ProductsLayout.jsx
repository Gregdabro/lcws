import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ProductListPage from "../pages/ProductListPage";
import {PRODUCT_ROUTE} from "../utils/consts";

const ProductsLayout = () => {

    let { path } = useRouteMatch();
    return (
        <div style={{paddingInline:20}}>
            <Switch>
                <Route path={path + "/:productId"} component={ProductPage} />
                <Route exact path={PRODUCT_ROUTE} component={ProductListPage} />
            </Switch>
        </div>);
};

export default ProductsLayout;
