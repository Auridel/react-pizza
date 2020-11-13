import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {ReactComponent as CartLogo} from "../assets/img/cart.svg"
import pizzaLogo from "../assets/img/pizza-logo.svg"

const Header = ({cartCount, price}) => {
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
                        <span>{`${price} ₽`}</span>
                        <div className="button__delimiter"></div>
                        <CartLogo/>
                        <span>{cartCount}</span>
                    </Link>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        cartCount: state.cartCount,
        price: state.price
    }
}

export default connect(mapStateToProps)(Header);