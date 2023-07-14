import React, { useState, useEffect } from 'react';

const Counter = () => {
  // 최초 랜더링 될때 단 한번만 동작한다,, 그 다음 랜더링 될때는 무시한다
  const [value, setValue] = useState(0);
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
  }, [form]);
  // ,를 찍고 []안에 form을 넣으면 form이 바뀔때만 호출하라는 의미이다
  // 만약 []안에 아무것도 안넣은채로 둔다면 최초로 호출될때만 호출하고 그 이후에는 호출하지 않는다

  /*
  useEffect(() => {
    // 비동기 통신으로 서버에 자료를 얻어 화면에 출력하기 위해 state의 값을 변경한다
    setValue(value: 10);
  }, []) // 최초로 실행될때 value값을 10으로 초기화하라는 의미
   */

  return (
    <div>
      <p>
        이름 : <input name="name" value={form.name} onChange={handlerChange} />
        <br />
        별명 :
        <input name="nickname" value={form.nickname} onChange={handlerChange} />
        <br />
      </p>
      <p>현재 카운트 값은 {value}</p>
      <button onClick={() => setValue(value + 1)}>1 증가</button>
      <button onClick={() => setValue(value - 1)}>1 감소</button>
    </div>
  );
};

/*
Counter(); 1 증가 클릭 -> value(0->1) Counter() 호출,, useState(0) 실행 안하고 무시
Counter();
 */

export default Counter;
