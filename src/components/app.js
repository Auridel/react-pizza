import React from "react";
import {Switch, Route, Redirect, useLocation} from "react-router-dom";
import Header from "./header";
import Content from "./content";
import Cart from "./cart";

const App = () => {
    const location = useLocation();
    
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Switch location={location}>
                    <Route path="/" exact>
                        <Content/>
                    </Route>
                    <Route path="/cart" exact>
                        <Cart/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </div>
    )
};

export default App;