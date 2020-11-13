import React, {useEffect} from "react";
import {Switch, Route, Redirect, useLocation} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {GET_DATA} from "../actions/actions";
import Header from "./header";
import Content from "./content";
import Cart from "./cart";

const App = ({menu, loaded}) => {
    const dispatch = useDispatch();

    useEffect(() =>{
        if(!loaded) dispatch(GET_DATA());
    }, [menu])

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

const mapStateToProps = (state) => {
    return{
        loaded: state.loaded,
        menu: state.menu
    }
}

export default connect(mapStateToProps)(App);