import React from 'react';

const MyComponent3 = (props) => {
  return (
    <>
      <h1>나의 두번째 컴포넌트</h1>
      <h2>이름 : {props.name}</h2>
      <h2>나이 : {props.age}</h2>
    </>
  );
};

export default MyComponent3;
