import React, { Component } from 'react';
import { connect } from 'react-redux';

class Detail extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { goodList, match } = this.props
        this.good = goodList.find(item => item.id.toString() === match.params.id)
        if (!this.good) return null
        return (
            <div>
                <p style={{
                    width: '100%',
                    height: '20px',
                    backgroundColor: 'rgb(255, 78, 34)',
                    float: 'left'
                }} onClick={() => this.props.history.goBack()}> ← </p>
                {/* <p>详情页面</p> */}
                <img style={{
                    float: 'left',
                    width: '100%'
                }} className={this.good.name}
                     src={`https://gw.alicdn.com/bao/uploaded/${this.good.src}.jpg_.webp`}/>
                {/* <li>姓名:{this.good.name}--年龄:{this.good.age}--ID:{this.good.id}</li> */}
                <p>商品{this.good.id}</p>
                <p>{this.good.id}￥</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    goodList: state.good.goodList
})

export default connect(mapStateToProps, null)(Detail);
