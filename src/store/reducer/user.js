import { ACTION_TYPES } from '../actions/action-types.js';

const initialUser = {
    username: '',
    password: '',
    login: false,
}

export default function (state = initialUser, action) {
    switch (action.type) {
        case ACTION_TYPES.LOGIN:
            return {
                ...state,
                login: true
            }
        case ACTION_TYPES.LOGOUT:
            return {
                ...state,
                login: false
            }
        default:
            return state
    }
}
