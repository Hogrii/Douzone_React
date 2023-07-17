import React, {
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';

const getAverage = (list) => {
  console.log('평균값 계산 -> ');
  if (list === null || list.length === 0) return 0;
  //   let sum = 0;
  //   for (let i = 0; i < list.length; i++) {
  //     sum += list[i];
  //   }

  // 위 4줄과 같은 코드
  const sum = list.reduce((a, b) => {
    return a + b;
  }, 0);
  // list의 각 값을 b에 담는다
  // 현재 누적값 a에 현재 배열값 b를 더한다 -> a의 초기값은 두번째 파라미터로 설정
  // list 전체를 돌면서 a에 list의 값을 모두 더한다
  // a를 리턴한다 -> sum에 list의 총 합이 들어가게 된다

  return sum / list.length;
};

const Average = () => {
  const [list, setList] = useState([10, 50, 30, 70, 100]);
  const [number, setNumber] = useState('');
  //   const [avg, setAvg] = useState(0); // 임시변수
  const inputElement = useRef(); // 태그에 ref = {inputElement}를 할당해준다

  //   useEffect(() => {
  //     setAvg = getAverage(list);
  //   }, []);
  // useEffect 안에서는 state 데이터가 변화되면 안된다.

  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onClick = useCallback(
    (e) => {
      setList(list.concat(parseInt(number)));
      // setAvg(getAverage(list)); // state 관리를 통해 onClick시 딱 한번만 호출
      setNumber('');
      inputElement.current.focus(); // input 박스에 포커스 부여하기
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

  const handlerSubmit = (e) => {
    // EnterKey 입력시 동작하게 만드려면 form, submit이 있어야한다
    // 추가로 img src가 있어도 된다
    e.preventDefault();
    return false;
  };

  console.log('화면 재구성');
  return (
    <div>
      <form name="myForm" onSubmit={handlerSubmit}>
        <input value={number} onChange={onChange} ref={inputElement} />
        <button type="submit" onClick={onClick}>
          등록
        </button>
      </form>
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
