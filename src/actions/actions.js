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

const ADD_TO_CART = (items, total) => {
    return {
        type: "ADD_TO_CART",
        payload: {
            items,
            total
        }
    }
}

const CLEAR_CART = () => {
    return {
        type: "CLEAR_CART"
    }
}

const REMOVE_FROM_CART = (items, total, quantity = 1) => {
    return {
        type: "REMOVE_FROM_CART",
        payload: {
            items,
            total,
            quantity
        }
    }
}



export {
    GET_DATA,
    SET_MENU,
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_CART
}