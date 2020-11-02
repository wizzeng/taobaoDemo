import React, {Component} from 'react';
class Detail extends Component {
    constructor(props, context) {
      super(props, context)
      console.info(props)
      this.userList = props.location.state.data
    }
    render(props) {
      var userList = {}
      return (
        <div>
          <p style={{width:'100%',
        height:'20px',
        backgroundColor:'rgb(255, 78, 34)',
        float:'left'
        }} onClick={() => this.props.history.goBack()} > ← </p>
          {/* <p>详情页面</p> */}
          <img style={{float:'left',
         width:'100%'}} className={this.userList.name} 
          src={`https://gw.alicdn.com/bao/uploaded/${this.userList.src}.jpg_.webp`} />
          {/* <li>姓名:{this.userList.name}--年龄:{this.userList.age}--ID:{this.userList.id}</li> */}
          <p>商品{this.userList.id}</p>
          <p>{this.userList.id}￥</p>
        </div>
      )
    }
  }
   
  export default Detail;
