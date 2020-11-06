import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleStar } from '../store/actions/goods.js';
import { Button } from 'antd-mobile';

// TARGET 5
class Star extends Component {
    constructor(props) {
        super(props);
        this.checkLogin()
    }

    checkLogin() {
        if(!this.props.login) {
            const { pathname } = this.props.location
            this.props.history.push('/login', { pathname })
        }
    }

    render() {
        const { starList, goodList } = this.props.good;
        return (
            <div>
                <h1>我的收藏</h1>
                <div className={"star-list"}>
                    {
                        goodList.filter(item => starList.includes(item.id)).map(item => (
                            <div className={"star-item"} key={item.id}>
                                <div className={'content'} style={{ display: 'flex' }}>
                                    <img src={item.img} alt="item.name"/>
                                    <p style={{ fontSize: '20px', lineHeight: '40px'}}>商品{item.id}</p>
                                </div>
                                <Button type="ghost" onClick={ () => this.props.toggleStar(item.id)} inline size="small" style={{ display: 'block' }}>删除</Button>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        good: state.good,
        login: state.user.login
    }
}

export default connect(mapStateToProps, { toggleStar })(Star)