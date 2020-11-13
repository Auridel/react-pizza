import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import CartItem from "./cartItem";
import emptyCart from "../assets/img/empty-cart.png"
import {ReactComponent as ArrowLeft} from "../assets/img/grey-arrow-left.svg";
import {ReactComponent as CartIcon} from "../assets/img/cart.svg";
import {ReactComponent as TrashIcon} from "../assets/img/trash.svg";

const Cart = ({cart, price, cartCount, menu}) => {
    
    return (
        !cart.length?
                <div className="container container--cart">
                    <div className="cart cart--empty">
                        <h2>Корзина пустая <icon>😕</icon></h2>
                        <p>
                            Вероятней всего, вы не заказывали ещё пиццу.<br/>
                            Для того, чтобы заказать пиццу, перейди на главную страницу.
                        </p>
                        <img src={emptyCart} alt="Empty cart"/>
                        <Link to="/" className="button button--black">
                            <span>Вернуться назад</span>
                        </Link>
                    </div>
                </div>
                :
                <div className="container container--cart">
                    <div className="cart">
                        <div className="cart__top">
                            <h2 className="content__title">
                                <CartIcon/>
                                Корзина
                            </h2>
                            <div className="cart__clear">
                                <TrashIcon/>

                                <span>Очистить корзину</span>
                            </div>
                        </div>
                        <div className="content__items">

                            {cart.map(item => <CartItem key={`${item.itemId}${item.crust}${item.size}`} {...{...item, img: menu[item.itemId].img}}/>)}

                        </div>
                        <div className="cart__bottom">
                            <div className="cart__bottom-details">
                                <span> Всего пицц: <b>{cartCount} шт.</b> </span>
                                <span> Сумма заказа: <b>{price} ₽</b> </span>
                            </div>
                            <div className="cart__bottom-buttons">
                                <Link to="/" className="button button--outline button--add go-back-btn">
                                    <ArrowLeft/>
                                    <span>Вернуться назад</span>
                                </Link>
                                <div className="button pay-btn">
                                    <span>Оплатить сейчас</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
};


const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        price: state.price,
        cartCount: state.cartCount,
        menu: state.menu
    }
}

export default connect(mapStateToProps)(Cart);