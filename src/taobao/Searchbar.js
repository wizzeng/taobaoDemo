import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React from 'react'

const Searchbar = (props) =>{
    return (<div>
      {/* <WingBlank><div className="sub-title">Normal</div></WingBlank>
      <SearchBar placeholder="Search" maxLength={8} />
      <WhiteSpace />
      <WingBlank><div className="sub-title">AutoFocus when enter page</div></WingBlank>
      <SearchBar placeholder="自动获取光标" ref={ref => this.autoFocusInst = ref} />
      <WhiteSpace />
      <WingBlank><div className="sub-title">Focus by operation</div></WingBlank>
      <SearchBar
        placeholder="手动获取获取光标"
        ref={ref => this.manualFocusInst = ref}
      />
      <WhiteSpace />
      <WingBlank>
        <Button
          onClick={this.handleClick}
        >click to focus</Button>
      </WingBlank>
      <WhiteSpace />
      <WingBlank><div className="sub-title">Show cancel button</div></WingBlank> */}
          <SearchBar
        onSubmit={value => console.log(value, 'onSubmit')}
        onClear={value => console.log(value, 'onClear')}
        onFocus={() => console.log('onFocus')}
        onBlur={() => console.log('onBlur')}
        onCancel={() =>props.history.goBack()}
        showCancelButton
      />
    </div>);
  }
  export default Searchbar
