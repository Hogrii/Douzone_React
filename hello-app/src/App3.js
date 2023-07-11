import { Component } from 'react';
import './App.css';
/*
import MyComponent from './comp/MyComponent';
import MyComponent2 from './comp/MyComponent2';
import MyComponent3 from './comp/MyComponent3';
*/
// 여러 개의 파일을 import할 경우 묶어서 할 수 있다
import { MyComponent, MyComponent2, MyComponent3 } from './comp';

// export { MyComponent }; // export를 이렇게 했다면
// import { MyComponent } from './comp/MyComponent';

class App3 extends Component {
  // name = ''; // 멤버 변수
  render() {
    const name = '진호'; // 지역 변수
    return (
      /*
        // 멤버 변수 접근
        <div className="react">
            이름 : {this.name}
            <MyComponent />
            <MyComponent2 />
            <MyComponent3 />
        </div>
      */

      // 지역 변수 접근

      <div className="react">
        이름 : {name}
        <MyComponent />
        <MyComponent2 />
        <MyComponent3 />
      </div>
    );
  }
}

/*
function App3() {
    const name = '홍길동';
    return <div className="react">{name}</div>;
}
 */

export default App3;
