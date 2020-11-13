import React, {useState} from "react";
import {connect} from "react-redux";
import ItemsList from "./itemsList";
import {ReactComponent as Arrow} from "../assets/img/arrow-top.svg";

const Content = ({menu}) => {

    const [sort, setSort] = useState("all")

    const sortItems = (items) => {
        const pattern = new RegExp(sort);
        if(sort === "all") return items;
        return items.filter(item => {
            return pattern.test(item.options.join(" "));
        })
    }

    return (
        <div className="container">
            <div className="content__top">
                <div className="categories">
                    <ul>
                        <li
                            onClick={() => setSort("all")}
                            className={sort === "all"? "active" : ""}>Все</li>
                        <li
                            onClick={() => setSort("meat")}
                            className={sort === "meat"? "active" : ""}>Мясные</li>
                        <li
                            onClick={() => setSort("veg")}
                            className={sort === "veg"? "active" : ""}>Вегетарианская</li>
                        <li
                            onClick={() => setSort("grill")}
                            className={sort === "grill"? "active" : ""}>Гриль</li>
                        <li
                            onClick={() => setSort("hot")}
                            className={sort === "hot"? "active" : ""}>Острые</li>
                        <li
                            onClick={() => setSort("sweet")}
                            className={sort === "sweet"? "active" : ""}>Сладкие</li>
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
            {menu.length? <ItemsList items={sortItems(menu)}/> : ""}
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(Content);