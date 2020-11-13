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

const ADD_TO_CART = (item) => {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}



export {
    GET_DATA,
    SET_MENU,
    ADD_TO_CART
}