import React, {Component} from 'react';
import { NavLink ,Route,NavSearch} from 'react-router-dom';
class List extends Component{
    render(props) {
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
          }
        ]
        return(
            <div>
                 <ul>
                    {userList.map(v => {
                    return <li key={v.id} className={v.name} onClick={()=>this.routerTo(v)}>
                        <img src={`https://gw.alicdn.com/bao/uploaded/${v.src}.jpg_.webp`} 
                        />跳转到详情页面
                        </li>
                        })
                    }
                </ul>
            </div>
        )}
    routerTo(v) {
        this.props.history.push({pathname: `/Detail/${v.id}`, state: {data: v}})
      }
}
export default List