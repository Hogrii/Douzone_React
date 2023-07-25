import React from 'react';
import { ColorConsumer } from './ColorContext';

const ColorBox = () => {
  return (
    <ColorConsumer>
      {/* {state}를 사용해도 된다! 대신 연관배열로 선언해줘야 한다 */}
      {(value) => (
        <>
          <div
            style={{
              width: '64px',
              height: '64px',
              background: value.state.color,
            }}
          />
          <div
            style={{
              width: '32px',
              height: '32px',
              background: value.state.subject,
            }}
          />
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
