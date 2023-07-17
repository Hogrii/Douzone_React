import React, { useMemo, useState, useEffect } from 'react';

const getAverage = (list) => {
  console.log('평균값 계산 -> ');
  if (list === null || list.length === 0) return 0;
  //   let sum = 0;
  //   for (let i = 0; i < list.length; i++) {
  //     sum += list[i];
  //   }

  // 위 4줄과 같은 코드
  const sum = list.reduce((a, b) => a + b);

  return sum / list.length;
};

const Average = () => {
  const [list, setList] = useState([10, 50, 30, 70, 100]);
  const [number, setNumber] = useState('');
  //   const [avg, setAvg] = useState(0); // 임시변수

  //   useEffect(() => {
  //     setAvg = getAverage(list);
  //   }, []);
  // useEffect 안에서는 state 데이터가 변화되면 안된다.

  const onChange = (e) => {
    setNumber(e.target.value);
  };

  const onClick = (e) => {
    setList(list.concat(parseInt(number)));
    // setAvg(getAverage(list)); // state 관리를 통해 onClick시 딱 한번만 호출
    setNumber('');
  };

  // const avg = useMemo(() => getAverage(list), [list]);
  // list에 대한 변화가 없으면 두번째 파라미터에 있는 [list]값을 가지고 있는다
  // list에 대한 변화가 발생하면 첫번째 파라미터에 있는 getAverage를 호출해 평균을 계산한다

  const avg = useMemo(() => {
    console.log('useMemo() 함수에서 list가 변경될때만 호출됨!!');
    return getAverage(list);
  }, [list]);
  // useMemo의 호출 시점을 확인해보자! -> 콜백함수이기 때문에 {}를 사용할 수 있음

  console.log('화면 재구성');
  return (
    <div>
      <input value={number} onChange={onChange} />
      <button onClick={onClick}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {/* {getAverage(list)} */}
        {avg}
      </div>
    </div>
  );
};

export default Average;
