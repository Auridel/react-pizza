const initialState = {
    menu: [],
    loaded: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_MENU": {
            return {
                loaded: true,
                menu: action.payload
            }
        }
        default: return state;
    }
}

export default reducer;