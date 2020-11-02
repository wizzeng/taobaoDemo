import React from 'react'

const Mine= (props) => {
    return (
        <div>
            我的
            <button onClick={() => props.history.goBack()} >返回</button>
        </div>
    )
}

export default Mine