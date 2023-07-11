import React from 'react';
import PropTypes from 'prop-types';

export default function MyComponent2(props) {
  // props의 값은 변경 할 수 없음
  // props.name = "지노" -> 안됨!

  // 비구조화 할당 문법
  // const name = props.name;
  // const age = props.age;
  // const children = props.children;
  const { name, age } = props;
  // 위 두 라인을 하나로 합칠 수 있음, 단 props 변수만 사용해야하고 입력을 안하면 undefined가 들어갈수도
  // 지역변수
  // props는 컴포넌트 내에서 값이 변하지 말아야 하는데 let으로 선언하면 변할 수 있어서 const로 선언

  return (
    <div>
      <h1>나의 두번째 컴포넌트</h1>
      <h2>이름 : {props.name}</h2>
      <h2>나이 : {props.age}</h2>
      <h2>이름 : {name}</h2>
      <h2>나이 : {age}</h2>
      {/* props.children은 사전에 이미 약속한 내용이다 */}
      <h2>자식 : {props.children}</h2>
    </div>
  );
}

MyComponent2.defaultProps = {
  name: '기본이름',
};

// props의 타입으 확인해준다
MyComponent2.propTypes = {
  name: PropTypes.string,
  // isRequired는 해당 값이 들어올 수 있게 강제한다
  favoriteNumber: PropTypes.number.isRequired,
};

// export default MyComponent2;
