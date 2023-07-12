import React, { useState } from 'react';
import MyComponent from './MyComponent';

const Counter2 = () => {
  // 비구조화 할당 문법
  const [number, setNumber] = useState(0);
  const [fixedNumber, setFixedNumber] = useState(0);
  const [title, setTitle] = useState('안녕');

  console.log('Counter2 랜더링~');
  return (
    <div>
      {/*<h1>{this.props.number}</h1>*/}
      <h1>{number}</h1>
      <h1>변경되지 않는 값 : {fixedNumber}</h1>
      <button
        onClick={() => {
          console.log('버튼 클릭 값증가 전 : ', number);
          setNumber(number + 1);
        }}
      >
        +1 증가
      </button>
      <MyComponent name="홍길동" age={number} />
      {/* Counter가 number prop을 변경하면 하위 컴포넌트인 MyComponent의 age값도 같이 변한다 */}
    </div>
  );
};

export default Counter2;
