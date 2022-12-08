import './App.scss';
import Header from "./components/Header/Header";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify"
import {MAIN_ROUTE, AUTH_ROUTE, PRODUCT_ROUTE, CART_ROUTE, CONTACT_ROUTE, ABOUT_ROUTE} from "./utils/consts";
import ProductsLayout from "./layouts/ProductsLayout";
import AuthLayout from "./layouts/AuthLayout";
import MainPage from "./pages/MainPage";
import BasketPage from "./pages/BasketPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <div className="App">
        <Header />
        <BrowserRouter>
            <Switch>
                <Route path={MAIN_ROUTE} exact component={MainPage} />
                <Route path={AUTH_ROUTE} component={AuthLayout} />
                <Route path={PRODUCT_ROUTE + "/:id?"} component={ProductsLayout} />
                <Route path={CART_ROUTE} component={BasketPage} />
                <Route path={CONTACT_ROUTE} component={ContactPage} />
                <Route path={ABOUT_ROUTE} component={AboutPage} />
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
        <ToastContainer />
    </div>
  );
}

export default App;
