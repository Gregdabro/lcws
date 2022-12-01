import './App.scss';
import Header from "./components/Header/Header";
import { Redirect, Route, Switch } from "react-router-dom";
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
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path="/auth" component={AuthLayout} />
            <Route path="/products/:id?" component={ProductsLayout} />
            <Route path="/basket" component={BasketPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/about" component={AboutPage} />
            <Redirect from="*" to="/" />
        </Switch>
    </div>
  );
}

export default App;
