import React, { useState, useReducer } from 'react';

const initData = {
  name: '',
  nickname: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_name':
      return { ...state, name: action.value };
    case 'change_nickname':
      return { ...state, nickname: action.value };
    default:
      return state;
  }
};

const Info = () => {
  const [state, dispatch] = useReducer(reducer, initData);

  // dispatch({ type: change_name, value: '홍길동' });
  // dispatch({ type: change_nickname, value: '의적' });

  const onChangeName = (e) => {
    dispatch({ type: 'change_name', value: e.target.value });
  };

  const onChangeNickname = (e) => {
    dispatch({ type: 'change_nickname', value: e.target.value });
  };

  /*
  // reducer를 이용해 변경해보자!!
  const [form, setForm] = useState({
    name: '',
    nickname: '',
  });
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
   */
  return (
    <div>
      <div>
        <input name="name" value={state.name} onChange={onChangeName} />
        <input
          name="nickname"
          value={state.nickname}
          onChange={onChangeNickname}
        />
      </div>
      <div>
        <b>이름 : </b>
        {state.name}
      </div>
      <div>
        <b>닉네임 : </b>
        {state.nickname}
      </div>
    </div>
  );
};

export default Info;
