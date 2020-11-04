import axios from 'axios'

export function request(...args) {
    return axios(...args).then(res => Promise.resolve(res.data))
}