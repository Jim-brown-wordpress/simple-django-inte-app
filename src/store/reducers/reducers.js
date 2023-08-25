const initialState = {
    token: 0,
    title: 'my counter'
}

const counterReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            // console.log("I am called");
            return {
                ...state,
                // token: action.payload
                token: state.token + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                token: state.token - action.payload
            }
        default:
            return state;
    }
}

export default counterReducer;