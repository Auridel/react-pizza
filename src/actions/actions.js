const GET_DATA = () => {
    return {
        type: "GET_DATA"
    }
}

const SET_MENU = (menu) => {
    return {
        type: "SET_MENU",
        payload: menu
    }
}

const SET_CART = (items) => {
    return {
        type: "SET_CART",
        payload: items
    }
}



export {
    GET_DATA,
    SET_MENU,
    SET_CART
}