import React, { Component } from 'react'
import { connect } from 'react-redux';
import { toggleStar } from '../store/actions/goods.js';

// TARGET 5
class Star extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { starList, goodList } = this.props.good;
        return (
            <div>
                <h1>我的收藏</h1>
                <div className={"star-list"}>
                    {
                        goodList.filter(item => starList.includes(item.id)).map(item => (
                            <div className={"star-item"}>
                                <p>商品{item.id}</p>
                                <img src={`https://gw.alicdn.com/bao/uploaded/${item.src}.jpg_.webp`} alt="item.name"/>
                                <button onClick={() => {
                                    this.props.toggleStar(item.id)
                                }}>删除</button>
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
        good: state.good
    }
}

export default connect(mapStateToProps, { toggleStar })(Star)