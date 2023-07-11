import React from 'react';

export default function MyComponent2(props) {
  // props의 값은 변경 할 수 없음
  // props.name = "지노" -> 안됨!
  return (
    <div>
      <h1>나의 두번째 컴포넌트</h1>
      <h2>이름 : {props.name}</h2>
      <h2>나이 : {props.age}</h2>
      {/* props.children은 사전에 이미 약속한 내용이다 */}
      <h2>자식 : {props.children}</h2>
    </div>
  );
}

MyComponent2.defaultProps = {
  name: '기본이름',
};
// export default MyComponent2;
