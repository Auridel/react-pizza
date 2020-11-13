const initialState = {
    menu: [],
    loaded: false,
    cart: [],
    cartCount: 0,
    price: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MENU": {
            return {
                ...state,
                loaded: true,
                menu: [...action.payload]
            }
        }
        case "SET_CART": {
            return {
                ...state,
                cart: [...action.payload]
            }
        }
        default: return state;
    }
}

export default reducer;