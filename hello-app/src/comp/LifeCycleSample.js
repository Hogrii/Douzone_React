import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log('constructor() ...');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps() ...');
    // 조건 설정
    // 이전 상태값과 새로 변경될 속성값이 다르면 새로 변경될 속성으로 변경
    if (nextProps.color !== prevState.color) {
      // r <-> b
      console.log('변경 전 : ' + nextProps.color);
      let red = nextProps.color.substring(1, 3);
      let green = nextProps.color.substring(3, 5);
      let blue = nextProps.color.substring(5);
      let newColor = '#' + blue + green + red;
      console.log('변경 후 : ' + newColor);
      return { color: newColor };
    }
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount() ...');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 잠시 후 상황에 따라 render9) 함수를 호출 할 수 있게 조건을 추가할 것
    // return true : render 호출
    console.log('shouldComponentUpdate() ...');
    return true;
  }

  componentWillUnmount() {
    // DOM에서 컴포넌트가 제거되기 직전 호출
    // DOM에서 컴포넌트가 제거되기 직전 마무리 작업이 필요하면 여기서 구현하면 된다
    console.log('componentWillUnmount() ...');
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // render()  함수에서 만들어진 결과물을 브라우저에 실제 반영하기 직전에 호출
    console.log('getSnapshotBeforeUpdate() ...');
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  componentDidUpdate(preProps, prevState, snapshot) {
    console.log('componentDidUpdate() ...');
    if (snapshot) {
      console.log('업데이트 전 : ' + snapshot);
    }
  }

  handlerIncClick = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    console.log('render');

    const style = {
      color: this.props.color,
    };

    // r <-> b
    // let red = this.props.color.substring(1, 3);
    // let green = this.props.color.substring(3, 5);
    // let blue = this.props.color.substring(5);
    // let newColor = '#' + blue + green + red;

    return (
      <div>
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handlerIncClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
