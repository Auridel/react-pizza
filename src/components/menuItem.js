import React, {useState} from "react";
import {connect, useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {ADD_TO_CART} from "../actions/actions";
import {ReactComponent as Plus} from "../assets/img/plus.svg";
import {totalPrice} from "../utils";

const MenuItem = ({item, cart}) => {
    const [crust, setCrust]  = useState(1);
    const [size, setSize] = useState(1);
    const dispatch = useDispatch();

    const calcPrice = (basePrice, crustOpt, sizeOpt) => {
        return Math.floor(basePrice * crustOpt * sizeOpt);
    }

    const addToCart = () => {
        const crustOpt = crust === 1? "тонкое" : "традиционное";
        const sizeOpt = size === 1? "26" : (size === 1.2? "30" : "40");
        const newItem = {
            id: uuidv4(),
            itemId: item.id,
            crust: crustOpt,
            size: sizeOpt,
            quantity: 1,
            price: calcPrice(item.price, crust, size)
        }
        if(cart.length) {
            let newCart = [...cart];
            const idx = newCart.findIndex(el => (el.itemId === item.id && el.crust === crustOpt && el.size === sizeOpt));
            if(idx > -1) {
                if(newCart[idx].crust === crustOpt && newCart[idx].size === sizeOpt){
                    newCart[idx].quantity++;
                    dispatch(ADD_TO_CART(newCart, totalPrice(newCart)))
                }
            }
            else {
                newCart = [...newCart, newItem];
                dispatch(ADD_TO_CART(newCart, totalPrice(newCart)));
            }
        }
        else {
            const newCart = [newItem];
            dispatch(ADD_TO_CART(newCart, totalPrice(newCart)))
        }
    }

    const showCount = () => {
        let counter = 0;
        const items = cart.filter(el => el.itemId === item.id);
        items.forEach(i => {
            counter +=i.quantity;
        })
        return counter;
    }



    return (
        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={item.img}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{item.title}</h4>
            <div className="pizza-block__selector">
                <ul>
                    <li
                        onClick={() => setCrust(1)}
                        className={crust === 1? "active" : ""}>тонкое</li>
                    <li
                        onClick={() => setCrust(1.1)}
                        className={crust === 1.1? "active" : ""}>традиционное</li>
                </ul>
                <ul>
                    <li
                        onClick={() => setSize(1)}
                        className={size === 1? "active" : ""}>26 см.</li>
                    <li
                        onClick={() => setSize(1.2)}
                        className={size === 1.2? "active" : ""}>30 см.</li>
                    <li
                        onClick={() => setSize(1.5)}
                        className={size === 1.5 ?"active" : ""}>40 см.</li>
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{calcPrice(item.price, crust, size)} ₽</div>
                <div
                    onClick={() => addToCart(item)}
                    className="button button--outline button--add">
                    <Plus/>
                    <span>Добавить</span>
                    <i>{showCount()}</i>
                </div>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(MenuItem);