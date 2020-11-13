import React from "react";
import {Link} from "react-router-dom";
import {ReactComponent as CartLogo} from "../assets/img/cart.svg"
import pizzaLogo from "../assets/img/pizza-logo.svg"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={pizzaLogo} alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>самая вкусная пицца во вселенной</p>
                    </div>
                </div>
                <div className="header__cart">
                    <Link to="/cart" className="button button--cart">
                        <span>520 ₽</span>
                        <div className="button__delimiter"></div>
                        <CartLogo/>
                        <span>3</span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Header;