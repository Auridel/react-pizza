import React from "react";
import {ReactComponent as Plus} from "../assets/img/plus.svg";

const CartItem = ({id, img, title, crust, size, price, quantity, changeQuantity}) => {

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img
                    className="pizza-block__image"
                    src={img}
                    alt="Pizza"
                />
            </div>
            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>{crust} тесто, {size} см.</p>
            </div>
            <div className="cart__item-count">
                <div
                    onClick={() => changeQuantity("minus", id)}
                    className="button button--outline button--circle cart__item-count-minus">
                    <Plus/>
                </div>
                <b>{quantity}</b>
                <div
                    onClick={() => changeQuantity("plus", id)}
                    className="button button--outline button--circle cart__item-count-plus">
                    <Plus/>
                </div>
            </div>
            <div className="cart__item-price">
                <b>{+price * +quantity}</b>
            </div>
            <div className="cart__item-remove">
                <div
                    onClick={() => changeQuantity("remove", id)}
                    className="button button--outline button--circle">
                    <Plus/>
                </div>
            </div>
        </div>
    )
};

export default CartItem;