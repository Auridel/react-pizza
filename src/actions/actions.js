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

const SEND_ORDER = (order) => {
    return {
        type: "SEND_ORDER",
        payload: order
    }
}

const ORDER_SUCCESS = () => {
    return {
        type: "ORDER_SUCCESS"
    }
}

const CLEAR_ORDER = () => {
    return {
        type: "CLEAR_ORDER"
    }
}


export {
    GET_DATA,
    SET_MENU,
    ADD_TO_CART,
    CLEAR_CART,
    REMOVE_FROM_CART,
    SEND_ORDER,
    ORDER_SUCCESS,
    CLEAR_ORDER
}