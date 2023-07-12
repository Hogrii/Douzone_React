import React, { useState } from 'react';

const Number3 = () => {
  //   const [a, setA] = useState(1);
  //   const [b, setB] = useState(2);
  //   const [c, setC] = useState(3);

  const [map, setMap] = useState({ a: 1, b: 2, c: 1 });

  return (
    <div>
      <h1>{map.a}</h1>
      <h1>{map.b}</h1>
      <h1>{map.c}</h1>
      <button
        onClick={() => {
          let newMap = { ...map, a: map.a + 1 };
          {
            /* ...map은 map이 갖고있는 구조를 그대로 복사한다는 의미이다 */
          }
          {
            /* 
            { a: 1, b: 2, c: 1 } -> ...map을 선언하면
            사본 { a: 1, b: 2, c: 1 }이 만들어지고 해당 사본의 a값을 변경하면
            { b: 2, c: 1, a: 2 } -> 로 변경된다
             */
          }
          setMap(newMap);
        }}
      >
        증가 1
      </button>
      <button
        onClick={() => {
          setMap({ ...map, b: map.b + 1 });
        }}
      >
        증가 2
      </button>
      <button
        onClick={() => {
          setMap({ ...map, c: map.c + 1 });
        }}
      >
        증가 3
      </button>
    </div>
  );
};

export default Number3;
