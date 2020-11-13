import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import {CLEAR_CART, ADD_TO_CART, REMOVE_FROM_CART, SEND_ORDER} from "../actions/actions";
import CartItem from "./cartItem";
import {totalPrice} from "../utils";
import emptyCart from "../assets/img/empty-cart.png"
import {ReactComponent as ArrowLeft} from "../assets/img/grey-arrow-left.svg";
import {ReactComponent as CartIcon} from "../assets/img/cart.svg";
import {ReactComponent as TrashIcon} from "../assets/img/trash.svg";
import Popup from "./popup";

const Cart = ({cart, price, cartCount, orderSuccess}) => {
    const [popup, setPopup] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if(orderSuccess) setPopup(true);
    }, [orderSuccess])

    const changeQuantity = (action, id) => {
        const idx = cart.findIndex(el => el.id === id);
        switch (action) {
            case "plus": {
                cart[idx].quantity++;
                dispatch(ADD_TO_CART(cart, totalPrice(cart)));
                break;
            }
            case "minus": {
                if(cart[idx].quantity === 1) {
                    cart.splice(idx, 1);
                    dispatch(REMOVE_FROM_CART(cart, totalPrice(cart)));
                }
                else {
                    cart[idx].quantity--;
                    dispatch(REMOVE_FROM_CART(cart, totalPrice(cart)));
                }
                break;
            }
            case "remove": {
                const removedQuantity = cart[idx].quantity;
                const newCart = cart.filter(el => el.id !== id);
                dispatch(REMOVE_FROM_CART(newCart, totalPrice(newCart), removedQuantity));
            }
            default: break;
        }
    }

    return (
        !cart.length?
                <div className="container container--cart">
                    {popup? <Popup trigger={setPopup}/> : ""}
                    <div className="cart cart--empty">
                        <h2>Корзина пустая <i>😕</i></h2>
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
                            <div
                                onClick={() => dispatch(CLEAR_CART())}
                                className="cart__clear">
                                <TrashIcon/>

                                <span>Очистить корзину</span>
                            </div>
                        </div>
                        <div className="content__items">

                            {cart.map(item => <CartItem changeQuantity={changeQuantity} key={item.id} {...{...item}}/>)}

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
                                    <span
                                        onClick={() => dispatch(SEND_ORDER(cart))}>Отправить заказ</span>
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
        orderSuccess: state.orderSuccess
    }
}

export default connect(mapStateToProps)(Cart);