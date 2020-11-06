import Mock from 'mockjs'
import goods from './goods.js';


const mockURLs = [
    // ...goods
]

mockURLs.forEach(urlConfig => {
    Mock.mock(urlConfig.url, urlConfig.type, urlConfig.response)
})

