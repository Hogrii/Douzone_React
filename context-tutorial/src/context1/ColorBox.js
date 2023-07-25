import React from 'react';
import ColorContext from './ColorContext';

const ColorBox = () => {
  return (
    <>
      {/* context에서 정의된 값을 읽기 위해서는 Consumer tag를 사용하여 content영역에 callback 함수를 추가해서 처리한다 */}
      {/* ColorContext 내부의 값을 읽기 위해 .Consumer를 붙이는 것 */}
      <ColorContext.Consumer>
        {/* { } : 자바스크립트 영역 */}
        {
          // 림디 힘스. 콜백 함수 구현
          // value 안에 ColorContext의 color값이 들어있다
          (value) => (
            /* 리턴 안시키려고 <> 태그로 감싸줬다 */
            <>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: value.color,
                }}
              />
              <p>이름 : {value.name}</p>
            </>
          )
        }
      </ColorContext.Consumer>
    </>
  );
};

export default ColorBox;
