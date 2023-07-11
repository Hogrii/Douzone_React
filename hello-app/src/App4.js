import { Component } from 'react';
import './App.css';

import MyComponent from './comp/MyComponent';
import MyComponent2 from './comp/MyComponent2';
import MyComponent3 from './comp/MyComponent3';

// 여러 개의 파일을 import할 경우 묶어서 할 수 있다
// import { MyComponent, MyComponent2, MyComponent3 } from './comp';

class App4 extends Component {
  name = '멤버변수 진호';
  render() {
    return (
      <div className="react">
        이름 : {this.name}
        <MyComponent name={this.name} age="10" />
        <MyComponent2 name={'100'} age="20" />
        <hr></hr>
        자식등장
        <MyComponent name={'20'} age="20" />
        <MyComponent2 age="20" favoriteNumber={701}>
          [[[[[[
          <MyComponent age="15" />
          내용]]]]]]
        </MyComponent2>
        {/* 함수명(매개변수 -> 기본값) */}
        <MyComponent3 name={this.name} age="30" />
      </div>
    );
  }
}

export default App4;
