import React from "react";
import {ReactComponent as Plus} from "../assets/img/plus.svg";

const CartItem = ({img, title, crust, size, price, quantity}) => {
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
                <p>{crust}, {size}</p>
            </div>
            <div className="cart__item-count">
                <div className="button button--outline button--circle cart__item-count-minus">
                    <Plus/>
                </div>
                <b>{quantity}</b>
                <div className="button button--outline button--circle cart__item-count-plus">
                    <Plus/>
                </div>
            </div>
            <div className="cart__item-price">
                <b>{price * quantity}</b>
            </div>
            <div className="cart__item-remove">
                <div className="button button--outline button--circle">
                    <Plus/>
                </div>
            </div>
        </div>
    )
};

export default CartItem;