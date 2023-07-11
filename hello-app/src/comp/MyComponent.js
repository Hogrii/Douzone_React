import React, { Component } from 'react';

class MyComponent extends Component {
  /*
  // 생성자로 props 받기
  constructor(props) {
    // Component 안에 props를 받을 수  있는 변수가 이미 있다
    // 따라서 super를 통해 값을 보내줘야 한다
    // 값을 Component에 보내줘야 실제 객체가 만들어진다
    super(props);
  }
   */

  render() {
    // 지역 선언
    const { name, age } = this.props;

    return (
      <>
        <div>나의 첫번째 컴포넌트 {this.props.name}</div>
        <div>나이 : {this.props.age}</div>
        <div>나의 첫번째 컴포넌트 {name}</div>
        <div>나이 : {age}</div>
      </>
    );
  }
}

// 외부에서 사용시키기 위해 반드시 export를 시켜줘야 한다
export default MyComponent;
// export { MyComponent }; // 이렇게 써도 된다(default 안쓸거면)
// export { MyComponent as ErrorPage }; -> 별명도 지어줄 수 있음
