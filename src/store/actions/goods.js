import { ACTION_TYPES } from './action-types.js';

export const setGoods = goods => ({
    type: ACTION_TYPES.SET_GOODS,
    payload: goods
});

export const setStar = id => ({
    type: ACTION_TYPES.SET_STAR,
    payload: id
})

export const toggleStar = id => ({
    type: ACTION_TYPES.TOGGLE_STAR,
    payload: id
})

