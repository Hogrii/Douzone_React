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
  const [list, setList] = useState([0, 50, 25, 75, 100]);
  const [number, setNumber] = useState('');
  const inputElement = useRef();
  const clickCount = useRef(1);

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      e.preventDefault();
      setList(list.concat(parseInt(number)));
      setNumber('');
      inputElement.current.focus();
      clickCount.current++;
      console.log('clickCount -> ' + clickCount.current);
    },
    [list, number]
  );

  const avg = useMemo(() => {
    console.log('useMemo() 함수에서 list가 변경될때만 호출됨!!');
    return getAverage(list);
  }, [list]);

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
