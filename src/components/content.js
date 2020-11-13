import React from "react";
import {connect} from "react-redux";
import ItemsList from "./itemsList";
import {ReactComponent as Arrow} from "../assets/img/arrow-top.svg";

const Content = ({menu}) => {

    return (
        <div className="container">
            <div className="content__top">
                <div className="categories">
                    <ul>
                        <li className="active">Все</li>
                        <li>Мясные</li>
                        <li>Вегетарианская</li>
                        <li>Гриль</li>
                        <li>Острые</li>
                        <li>Закрытые</li>
                    </ul>
                </div>
                <div className="sort">
                    <div className="sort__label">
                        <Arrow/>
                        <b>Сортировка по:</b>
                        <span>популярности</span>
                    </div>
                    <div className="sort__popup">
                        <ul>
                            <li className="active">популярности</li>
                            <li>цене</li>
                            <li>алфавиту</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {menu.length? <ItemsList/> : ""}
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(Content);