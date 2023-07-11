import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return <div>나의 첫번째 컴포넌트</div>;
  }
}

// 외부에서 사용시키기 위해 반드시 export를 시켜줘야 한다
export default MyComponent;
// export { MyComponent }; // 이렇게 써도 된다(default 안쓸거면)
// export { MyComponent as ErrorPage }; -> 별명도 지어줄 수 있음
