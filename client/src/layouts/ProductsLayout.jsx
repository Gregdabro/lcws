import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import ProductPage from "../pages/ProductPage";
import ProductListPage from "../pages/ProductListPage";

const ProductsLayout = () => {

    let { path } = useRouteMatch();
    return (
        <div style={{paddingInline:20}}>
            <Switch>
                <Route path={path + "/:postId"} component={ProductPage} />
                <Route exact path={path} component={ProductListPage} />
            </Switch>
        </div>);
};

export default ProductsLayout;
