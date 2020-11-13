import React from "react";
import MenuItem from "./menuItem";

const ItemsList = ({items}) => {
    return (
        <div className="content__items">
            {items.map(item => <MenuItem item={item} key={item.id}/>)}
        </div>

    )
};

export default ItemsList;