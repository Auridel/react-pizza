import React, {useState, useEffect, useRef} from "react";
import {connect} from "react-redux";
import ItemsList from "./itemsList";
import {ReactComponent as Arrow} from "../assets/img/arrow-top.svg";

const Content = ({menu}) => {
    const [type, setType] = useState("all");
    const [sort, setSort] = useState("rating");
    const [sortPopup, setSortPopup] = useState(false);
    const [sortDirection, setSortDirection] = useState(true);

    const sortRef = useRef();

    useEffect(() => {
        if(sortPopup) document.addEventListener("click", handleClick);
        else document.removeEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [sortPopup])

    const handleClick = (e) => {
        const node = sortRef.current;
        if(!node || !node.contains(e.target)){
            setSortPopup(false);
        }
    }

    const sortTypes = (items) => {
        const pattern = new RegExp(type);
        if(type === "all") return items;
        return items.filter(item => {
            return pattern.test(item.options.join(" "));
        })
    }

    const sortItems = (items) => {
        switch (sort) {
            case "rating": {
                if(sortDirection) return  items.sort((a, b) => (a.rating - b.rating));
                else return items.sort((a, b) => (b.rating - a.rating));
            }
            case "price": {
                if(sortDirection) return  items.sort((a, b) => (a.price - b.price));
                else return items.sort((a, b) => (b.price - a.price));
            }
            case "alphabet": {
                if(sortDirection) return  items.sort((a, b) => (a.title.toUpperCase() > b.title.toUpperCase())? 1 : -1);
                else return items.sort((a, b) => (a.title.toUpperCase() < b.title.toUpperCase())? 1 : -1);
            }
            default: return items;
        }
    }

    return (
        <div className="container">
            <div className="content__top">
                <div className="categories">
                    <ul>
                        <li
                            onClick={() => setType("all")}
                            className={type === "all"? "active" : ""}>Все</li>
                        <li
                            onClick={() => setType("meat")}
                            className={type === "meat"? "active" : ""}>Мясные</li>
                        <li
                            onClick={() => setType("veg")}
                            className={type === "veg"? "active" : ""}>Вегетарианская</li>
                        <li
                            onClick={() => setType("grill")}
                            className={type === "grill"? "active" : ""}>Гриль</li>
                        <li
                            onClick={() => setType("hot")}
                            className={type === "hot"? "active" : ""}>Острые</li>
                        <li
                            onClick={() => setType("sweet")}
                            className={type === "sweet"? "active" : ""}>Сладкие</li>
                    </ul>
                </div>
                <div className="sort">
                    <div className="sort__label">
                        <Arrow
                            onClick={() => setSortDirection(!sortDirection)}
                            className={sortDirection? "" : "rotated"}/>
                        <b>Сортировка по:</b>
                        <span
                            onClick={() => setSortPopup(!sortPopup)}>{
                                sort === "rating"? "популярности" : (sort === "price" ? "цене" : "алфавиту")
                            }</span>
                    </div>
                    {sortPopup?
                        <div className="sort__popup" ref={sortRef}>
                            <ul>
                                <li
                                    onClick={() => {
                                        setSort("rating");
                                        setSortPopup(false);
                                    }}
                                    className={sort === "rating" ? "active" : ""}>популярности</li>
                                <li
                                    onClick={() => {
                                        setSort("price");
                                        setSortPopup(false);
                                    }}
                                    className={sort === "price" ? "active" : ""}>цене</li>
                                <li
                                    onClick={() => {
                                        setSort("alphabet");
                                        setSortPopup(false);
                                    }}
                                    className={sort === "alphabet" ? "active" : ""}>алфавиту</li>
                            </ul>
                        </div> : ""}
                </div>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            {menu.length? <ItemsList items={sortItems(sortTypes(menu))}/> : ""}
        </div>

    )
};

const mapStateToProps = (state) => {
    return {
        menu: state.menu
    }
}

export default connect(mapStateToProps)(Content);