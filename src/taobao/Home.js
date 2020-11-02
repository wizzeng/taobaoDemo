
import React, {Component} from 'react';

import { NavLink ,Route,NavSearch} from 'react-router-dom';
import "./home.css";
import './Searchbar';
import Carouseltu from './Carouseltu'
import List from './list'


// iconfont.cn官网搜选图标，加入购物车
// 点击页面右上角购物车，将图标添加进项目（没有项目就新建）
// 点击“下载到本地”
// 解压压缩包，全部复制到项目public文件夹下，
// 在index.html中通过link引入iconfont.css
// 使用时，<i className='iconfont icon-具体名字'></i>
class Home extends Component {
    render() {
        var userList = [
          {
            id: 100,
            name:'p1',
            src:'i1/675960670/O1CN011QK2FE1GotwPkfNa6_!!675960670.jpg_500x500q90'
          },
          {
            id: 101,
            name:'p2',
            src:'i1/1613695585/TB2m5_cmuJ8puFjy1XbXXagqVXa_!!1613695585.jpg_500x500q90'
          },
          {
            id: 102,
            name:'p3',
            src:'i1/776371527/TB20e79feOSBuNjy0FdXXbDnVXa_!!776371527.jpg_500x500q90'
          },
          {
            id: 103,
            name:'p4',
            src:'i1/2069768411/O1CN01AeciAn2C0Hu3PeI00_!!0-item_pic.jpg_500x500q90'
          },
          {
            id: 104,
            name:'p5',
            src:'i1/776371527/TB20e79feOSBuNjy0FdXXbDnVXa_!!776371527.jpg_500x500q90'
          },
          {
            id: 105,
            name:'p6',
            src:'i1/776371527/TB20e79feOSBuNjy0FdXXbDnVXa_!!776371527.jpg_500x500q90'
          },
          {
            id: 106,
            name:'p7',
            src:'i1/776371527/TB20e79feOSBuNjy0FdXXbDnVXa_!!776371527.jpg_500x500q90'
          },
          {
            id: 107,
            name:'p8',
            src:'i1/776371527/TB20e79feOSBuNjy0FdXXbDnVXa_!!776371527.jpg_500x500q90'
          },
          {
            id: 108,
            name:'p9',
            src:'i1/776371527/TB20e79feOSBuNjy0FdXXbDnVXa_!!776371527.jpg_500x500q90'
          },
          {
            id: 109,
            name:'p10',
            src:'i1/776371527/TB20e79feOSBuNjy0FdXXbDnVXa_!!776371527.jpg_500x500q90'
          }
        ]
        return (
        <div>
            <header className="aa">
                <NavLink className="header-bd"  to='/Searchbar'>
                <a herf="#"className="placeholder" >
                    <span className="text">
                        寻找宝贝店铺
                    </span>
                </a>
            </NavLink>
            </header>
            <div className="bb">
                <Carouseltu />
            </div>
            <div className="cc">
                {/* <List /> */}
                <ul>
                    {userList.map(v => {
                    return <li key={v.id}  onClick={()=>this.routerTo(v)} >
                        <img className={v.name} 
                        src={`https://gw.alicdn.com/bao/uploaded/${v.src}.jpg_.webp`} 
                        />
                        <p>商品{v.id}</p>
                        <p>{v.id}￥</p>
                        </li>
                        })
                    }
                </ul>
            </div>
            
            {/* <i style={{fontSize:100,color:'red'}} className='iconfont icon-dingdan'></i> */}
        </div>
    )}
    routerTo(v) {
        this.props.history.push({pathname: `/Detail/${v.id}`, state: {data: v}})
      }
    
}

export default Home
