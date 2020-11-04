import React, { Component } from 'react'
import { login } from '../store/actions/user.js';
import { connect } from 'react-redux';

const Login = (props) => {
    const login = () => {
        props.login('tom')
        props.history.replace(props.location.state.pathname)
    }
    return (
        <div>
            <button onClick={login}>登录</button>
        </div>
    )
}


export default connect(null, { login })(Login)
