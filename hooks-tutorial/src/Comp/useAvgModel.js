import React, { useMemo, useState, useCallback, useRef } from 'react';

const getAverage = (list) => {
  console.log('평균값 계산 -> ');
  if (list === null || list.length === 0) return 0;

  const sum = list.reduce((a, b) => {
    return a + b;
  }, 0);

  return sum / list.length;
};

const useAvgModel = () => {
  const [list, setList] = useState([10, 50, 30, 70, 100]);
  const [number, setNumber] = useState('');
  //   const [avg, setAvg] = useState(0); // 임시변수, useEffect 사용하기
  const inputElement = useRef(); // 태그에 ref = {inputElement}를 할당해준다
  const clickCount = useRef(1);
  // clickCount = 111; 이런식으로 바꾸는걸 허용하지 않겠다
  // clickCount 객체만 상수,, 내부에 존재하는 current는 상수가 아님 -> 변경가능

  //   useEffect(() => {
  //     setAvg = getAverage(list);
  //   }, []);
  // useEffect 안에서는 state 데이터가 변화되면 안된다.

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      setList(list.concat(parseInt(number)));
      // setAvg(getAverage(list)); // state 관리를 통해 onClick시 딱 한번만 호출
      setNumber('');
      inputElement.current.focus(); // input 박스에 포커스 부여하기
      clickCount.current++;
      console.log('clickCount -> ' + clickCount.current);
    },
    [list, number]
  );
  // list와 number에 변화가 있을 때 첫번째 파라미터 함수(useCallBack)를 다시 구성하여 만들라는 의미
  // 함수에 대해 캐싱하는 것이 목적이다

  // const avg = useMemo(() => getAverage(list), [list]);
  // list에 대한 변화가 없으면 두번째 파라미터에 있는 [list]값을 가지고 있는다
  // list에 대한 변화가 발생하면 첫번째 파라미터에 있는 getAverage를 호출해 평균을 계산한다
  // useMemo는 외부에 있는 함수를 캐싱하는 것이 목적ㄴ

  const avg = useMemo(() => {
    console.log('useMemo() 함수에서 list가 변경될때만 호출됨!!');
    return getAverage(list);
  }, [list]);
  // useMemo의 호출 시점을 확인해보자! -> 콜백함수이기 때문에 {}를 사용할 수 있음

  console.log('화면 재구성');
  return {
    list,
    number,
    inputElement,
    clickCount,
    onChange,
    onClick,
    avg,
  };
};

export default useAvgModel;
