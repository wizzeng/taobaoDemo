import React, { Component } from 'react';

import { NavLink, Route, NavSearch } from 'react-router-dom';
import "./home.css";
import './Searchbar';
import Carouseltu from './Carouseltu'
import List from './list'
import { fetchGoodList } from '../api/goods.js';
import { connect } from 'react-redux';
import { setGoods, setStar } from '../store/actions/goods.js';


// iconfont.cn官网搜选图标，加入购物车
// 点击页面右上角购物车，将图标添加进项目（没有项目就新建）
// 点击“下载到本地”
// 解压压缩包，全部复制到项目public文件夹下，
// 在index.html中通过link引入iconfont.css
// 使用时，<i className='iconfont icon-具体名字'></i>
class Home extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <header className="aa">
                    <NavLink className="header-bd" to='/Searchbar'>
                        <a herf="#" className="placeholder">
                    <span className="text">
                        寻找宝贝店铺
                    </span>
                        </a>
                    </NavLink>
                </header>
                <div className="bb">
                    <Carouseltu/>
                </div>
                <div className="cc">
                    {/* <List /> */}
                    <ul>
                        {
                            this.props.goodList.map(v => {
                                return <li key={v.id} onClick={() => this.routerTo(v)}>
                                    <img className={v.name}
                                         src={v.img}
                                    />
                                    <p>商品{v.name}</p>
                                    <p>{v.id}￥</p>
                                </li>
                            })
                        }
                    </ul>
                </div>

                {/* <i style={{fontSize:100,color:'red'}} className='iconfont icon-dingdan'></i> */}
            </div>
        )
    }

    routerTo(v) {
        this.props.history.push({ pathname: `/Detail/${v.id}`, state: { data: v } })
    }

}

const mapStateToProps = state => {
    // 映射 redux 中的属性至 props
    return { goodList: state.good.goodList }

}


export default connect(mapStateToProps, { setGoods, setStar })(Home)
