import { LOGIN_USER, REGISTER_USER } from "../actions";

const initialState = {
    user: [],
    reports: []
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return { ...state }
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload
            }    
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;