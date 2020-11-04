import React from 'react';
import { Button, TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleStar } from '../store/actions/goods.js';
import { login } from '../store/actions/user.js';

class Mytab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
            stared: false,
        };
        this.setStarStatus(this.props.location)
        this.listenRoute()
    }

    listenRoute() {
        this.props.history.listen(location => {
            if (/Detail/.test(location.pathname)) {
                this.setStarStatus(location)
            }
        })
    }

    setStarStatus(location) {
        if (location && location.state) {
            const { data } = location.state
            this.setState({
                stared: this.props.good.starList.includes(data.id)
            })
        }
    }

    // TARGET3: 收藏商品
    starGood = () => {
        // TARGET6: 登录验证
        if (!this.props.login) {
            const { pathname } = this.props.location
            this.props.history.push('/login', { pathname })
            return
        }
        const { good, location } = this.props
        const id = /\/Detail\/(.+)/.exec(location.pathname)[1]
        const goodData = good.goodList.find(item => item.id.toString() === id)
        this.props.toggleStar(goodData.id)
        this.setState({
            stared: !this.props.good.starList.includes(goodData.id)
        })
    }


    render() {
        //if(pathname.split('/').length > 2){
        const { pathname } = this.props.location;
        if (pathname == '/Searchbar' || pathname == '/buy' ||
            pathname == '/car' || pathname == '/service' || pathname == '/shop') {
            return null;
        }
        if (pathname == '/Detail/100' || pathname == '/Detail/101' ||
            pathname == '/Detail/103' || pathname == '/Detail/104' ||
            pathname == '/Detail/104' || pathname == '/Detail/105' ||
            pathname == '/Detail/106' || pathname == '/Detail/107' ||
            pathname == '/Detail/108' || pathname == '/Detail/109'
        ) {
            return (
                <div style={{
                    position: 'fixed',
                    width: '100%',
                    bottom: 0
                }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="red"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            title="店铺"
                            key="shop"
                            icon={
                                <i className='iconfont icon-dianpu'></i>
                            }
                            selectedIcon={
                                <i className='iconfont icon-dianpufill'></i>
                            }
                            selected={pathname === '/shop'}
                            onPress={() => {
                                this.props.history.push('/shop');
                            }}
                            data-seed="logId"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <i className='iconfont icon-kefu'></i>
                            }
                            selectedIcon={
                                <i className='iconfont icon-kefufille'></i>
                            }
                            title="客服"
                            key="service"
                            selected={pathname === '/service'}
                            onPress={() => {
                                this.props.history.push('/service')
                            }}
                            data-seed="logId1"
                        />
                        <TabBar.Item
                            icon={
                                <i className='iconfont icon-biaoxing'></i>
                            }
                            selectedIcon={
                                <i className='iconfont icon-biaoxingfill'></i>
                            }

                            title="收藏"
                            key="star"
                            selected={this.state.stared}
                            onPress={this.starGood}
                        >

                        </TabBar.Item>
                        <TabBar.Item
                            icon={<i className='iconfont icon-gouwuche'></i>}
                            // selectedIcon={ { uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' } }
                            title="加入购物车"
                            key="car"
                            selected={pathname === '/car'}
                            onPress={() => {
                                this.props.history.push('/car')
                            }}
                        >

                        </TabBar.Item>
                        <TabBar.Item
                            icon={<i className='iconfont icon-wodefill'></i>}
                            // selectedIcon={ { uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' } }
                            title="立即购买"
                            key="buy"
                            selected={pathname === '/buy'}
                            onPress={() => {
                                this.props.history.push('/buy')
                            }}
                        >

                        </TabBar.Item>
                    </TabBar>
                </div>
            )
        }


        return (
            <div style={{
                position: 'fixed',
                width: '100%',
                bottom: 0
            }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="red"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={
                            <i className='iconfont icon-shouye'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-shouyefill'></i>
                        }
                        selected={pathname === '/'}
                        onPress={() => {
                            this.props.history.push('/');
                        }}
                        data-seed="logId"
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-biaoxing'></i>
                        }
                        selectedIcon={
                            <i className='iconfont icon-biaoxingfill'></i>
                        }
                        title="收藏"
                        key="cart"
                        selected={pathname === '/star'}
                        onPress={() => {
                            this.props.history.push('/star')
                        }}
                        data-seed="logId1"
                    />
                    <TabBar.Item
                        icon={
                            <i className='iconfont icon-dingdan'></i>
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="订单列表"
                        key="Friend"
                        selected={pathname === '/Dingdan'}
                        onPress={() => {
                            this.props.history.push('/Dingdan')
                        }}
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={<i className='iconfont icon-wode'></i>}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg' }}
                        title="我的淘宝"
                        key="my"
                        selected={pathname === '/Mine'}
                        onPress={() => {
                            this.props.history.push('/Mine')
                        }}
                    >

                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { good: state.good, login: state.user.login }
}

export default connect(
    mapStateToProps,
    { toggleStar }
)(withRouter(Mytab));



