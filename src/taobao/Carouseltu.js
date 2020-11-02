import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react';

class Carouseltu extends Component{
  state = {
    data: ['1', '2', '3','4'],
    imgHeight: 180,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['i1/158/O1CN01LWnzwd1D2PD1NAcCh_!!158-0-lubanu',
         'i3/191/O1CN01VWfpT01DHWHQurTZ7_!!191-0-lubanu',
          'i4/81/O1CN01LbIJTv1CT8iDY67wG_!!81-0-lubanu',
        'i2/6000000007999/O1CN01p1MVOa28xalDbCnhY_!!6000000007999-0-octopus'],
      });
    }, 100);
  }
  render() {
    return (
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="#"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={`https://gw.alicdn.com/imgextra/${val}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
    );
  }
}


export default Carouseltu




