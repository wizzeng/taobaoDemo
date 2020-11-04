import { ACTION_TYPES } from '../actions/action-types.js';

const initialUser = {
    goodList: [],
    starList: []
}

export default function (state = initialUser, action) {
    switch (action.type) {
        case ACTION_TYPES.SET_GOODS:
            return {
                ...state,
                goodList: action.payload,
            }
        case ACTION_TYPES.SET_STAR:
            return {
                ...state,
                starList: action.payload
            }
        case ACTION_TYPES.TOGGLE_STAR:
            const id = action.payload
            let newList = [...state.starList]
            if (newList.includes(id)) {
                newList = newList.filter(item => item !== id)
            } else {
                newList.push(id)
            }
            return {
                ...state,
                starList: newList
            }
        default:
            return state
    }
}
