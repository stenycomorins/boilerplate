import { LOGIN } from './actionTypes'

const INITIAL_STATE = {
    isLoggedIn : false
}

export const sessionReducer = ( state = INITIAL_STATE, action ) => {
    switch ( action.type ) {
        case LOGIN :
            return {
                ...state,
                isLoggedIn : true
            }
        default :
            return state
    }
}