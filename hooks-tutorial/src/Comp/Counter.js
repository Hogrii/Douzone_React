import React, { useState, useEffect, useReducer } from 'react';

function model(state, action) {
  // 처리 루틴
  // 처리 루틴 여러개가 될 수 있음
  // state는 관리하는 상태 변수
  // action은 명령,, 처리 루틴 여러개를 구분하는 키(key)
  switch (action.type) {
    case 'incValue': // 명령
      return { value: state.value + 1 }; // 동작
    case 'decValue':
      return { value: state.value - 1 };
    default:
      return state;
  }
}

const Counter = () => {
  // 상태변수 선언
  // 최초 랜더링 될때 단 한번만 동작한다,, 그 다음 랜더링 될때는 무시한다
  // const [value, setValue] = useState(0);

  // 위 userState 대신 사용
  const [state, dispatch] = useReducer(model, { value: 0 });
  // model : 처리 함수
  // {value : 0} : 초기값 -> state가 초기값을 받는 변수(state로 들어간다는 뜻)
  // dispatch : action을 수행할 함수를 의미

  // 아래에 선언된 것은 데이터 관리 함수
  const incValue = () => {
    // setValue(value + 1); // useState -> useReducer
    dispatch({ type: 'incValue' });
    // 비동기로 호출
    // {type: 'incValue'}가 model의 action으로 들어간다
  };

  const decValue = () => {
    // setValue(value - 1);
    dispatch({ type: 'decValue' });
  };

  const [form, setForm] = useState({
    name: '',
    nickname: '',
  });

  const handlerChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // return 구문이 끝나고 나서 호출된다
  useEffect(() => {
    console.log('랜더링~ 완료~');
    console.log(form);
    // setValue(value + 1);
    // useEffect() 안에서는 데이터를 변경하는 코딩을 하면 안된다
    // why? -> setValue에 의해 값이 변경되면서 랜더링 -> 값 변경이 반복된다
    // setValue(10);

    // useEffect의 뒷정리 함수
    // 랜더링이 완료되기 전에 return이 호출
    // 언마운트 또는 업데이트 직전에 수행하고자하는 작업이 있다면 반환해주자
    return () => {
      console.log('cleanup ...', form);
    };
  }, [form]);
  // ,를 찍고 []안에 form을 넣으면 form이 바뀔때만 호출하라는 의미이다
  // 만약 []안에 아무것도 안넣은채로 둔다면 최초로 호출될때만 호출하고 그 이후에는 호출하지 않는다

  /*
  useEffect(() => {
    // 비동기 통신으로 서버에 자료를 얻어 화면에 출력하기 위해 state의 값을 변경한다
    setValue(value: 10);
  }, []) // 최초로 실행될때 value값을 10으로 초기화하라는 의미
   */

  // 아래는 출력에 관한 함수
  return (
    <div>
      <p>
        이름 : <input name="name" value={form.name} onChange={handlerChange} />
        <br />
        별명 :
        <input name="nickname" value={form.nickname} onChange={handlerChange} />
        <br />
      </p>
      <p>
        {/* 아래 코드는 상태 코드 값을 출력(읽기) */}
        현재 카운트 값은 <b>{state.value}</b>입니다
      </p>
      {/* 아래 코드는 상태 코드 값을 변경 */}
      <button onClick={incValue}>1 증가</button>
      <button onClick={decValue}>1 감소</button>
    </div>
  );
};

/*
Counter(); 1 증가 클릭 -> value(0->1) Counter() 호출,, useState(0) 실행 안하고 무시
Counter();
 */

export default Counter;
