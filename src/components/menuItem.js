import React, {useState} from "react";
import {connect} from "react-redux";
import {ReactComponent as Plus} from "../assets/img/plus.svg";

const MenuItem = ({item, cart}) => {
    const [crust, setCrust]  = useState(1);
    const [size, setSize] = useState(1);

    const calcPrice = (basePrice, crustOpt, sizeOpt) => {
        return Math.floor(basePrice * crustOpt * sizeOpt);
    }

    const addToCart = (item) => {
        const crustOpt = crust === 1? "тонкое" : "традиционное";
        const sizeOpt = size === 1? "26" : (size === 1.2? "30" : "40");
        const newItem = {
            id: item.id,
            crust: crustOpt,
            size: sizeOpt
        }
    }

    addToCart(item)
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
                <div className="button button--outline button--add">
                    <Plus/>
                    <span>Добавить</span>
                    <i>2</i>
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