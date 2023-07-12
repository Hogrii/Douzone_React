import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => {
    setMessage('안녕하세요');
  };
  const onClickLeave = () => {
    setMessage('안녕히 가세요');
  };

  const [color, setColor] = useState('gold');
  const onClickColorRed = () => {
    setColor('red');
  };
  const onClickColorGreen = () => {
    setColor('green');
  };
  const onClickColorBlue = () => {
    setColor('blue');
  };

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      {/* 
        color라는 key값 안에 black이라는 값이 들어있기 때문에 적용이 되는 것
        따라서 {color}는 {color: black}이 되는 것이다..
        */}

      <button style={{ color: 'red' }} onClick={onClickColorRed}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={onClickColorGreen}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={onClickColorBlue}>
        파란색
      </button>
    </div>
  );
};

export default Say;
