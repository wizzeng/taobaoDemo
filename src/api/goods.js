import { request } from './request.js'

export function fetchGoodList() {
    return request('/goods')
}