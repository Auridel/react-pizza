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
        case "ADD_TO_CART": {
            return {
                ...state,
                cart: [...action.payload.items],
                cartCount: state.cartCount + 1,
                price: action.payload.total
            }
        }
        case "CLEAR_CART": {
            return {
                ...state,
                cart: [],
                cartCount: 0,
                price: 0
            }
        }
        case "REMOVE_FROM_CART": {
            return {
                ...state,
                cart: [...action.payload.items],
                cartCount: state.cartCount - 1,
                price: action.payload.total
            }
        }
        default: return state;
    }
}

export default reducer;