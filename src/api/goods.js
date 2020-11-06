import { request } from './request.js'

export function fetchGoodList() {
    return request('https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist')
}