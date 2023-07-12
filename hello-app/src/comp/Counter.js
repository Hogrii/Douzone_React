import React, { Component } from 'react';
import MyComponent from './MyComponent';

class Counter extends Component {
  //호출된 후에 선언된 것인지 아닌지 확인할 수 없음
  //그래서 이렇게 쓰면 안됨
  // number = this.props.number;

  /*
  constructor(props) {
    super(props);
    // 데이터를 별도로 관리하기 위해 멤버변수를 만들었다
    // -> 이 변수의 소유권을 가진다
    // this.number = props.number;
    // 하지만 위의 방법도 디스플레이에 영향을 끼치지 못하기 때문에 state를 사용한다
    
  }
   */

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    // 비구조화 할당 문법
    const { number, fixedNumber } = this.state;
    console.log('랜더링~');
    return (
      <div>
        {/*<h1>{this.props.number}</h1>*/}
        <h1>{number}</h1>
        <h1>변경되지 않는 값 : {fixedNumber}</h1>
        <button
          onClick={() => {
            // console.log('버튼 클릭.. 증가 전 : ', this.number);
            console.log('버튼 클릭.. 증가 : ', { number });
            // this.props.number++; -> props는 변경할 수 없음!

            //this.number++;

            // this.setState({ number: number + 1 }); // 내부적으로 render() 함수를 비동기로 호출한다
            // this.setState({ number: number + 1 });
            // 비동기이기 때문에 리턴을 기다리지 않고 다음 라인이 바로 실행된다
            // 따라서 number + 1에서의 number의 값이 모두 같아 결과값이 +1만큼만 증가하게 된다
            // 데이터에 변화를 주려면 콜백함수를 이용해야 한다

            this.setState((prevState) => {
              // prevState는 이전 상태값을 받는 파라미터
              // 동기화 루틴으로 state 값을 변경한다
              return { number: prevState.number + 1 };
            });
            console.log('버튼 클릭.. 증가 후1 : ', this.state.number);

            this.setState((prevState) => {
              // 동기화 루틴으로 state 값을 변경한다
              return { number: prevState.number + 1 };
            });
            // 마지막에 비동기로 render() 함수를 호출한다
            console.log('버튼 클릭.. 증가 후2 : ', this.state.number);

            // console.log('버튼 클릭.. 증가 후 : ', this.number);
          }}
        >
          +1 증가
        </button>
        <MyComponent name="홍길동" age={this.state.number} />
        {/* Counter가 number prop을 변경하면 하위 컴포넌트인 MyComponent의 age값도 같이 변한다 */}
      </div>
    );
  }
}

export default Counter;
