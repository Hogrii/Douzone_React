import React, { useState, useReducer } from 'react';
import useModel from './useModel';

/*
const initData = {
  name: '',
  nickname: '',
};
 */

// const reducer = (state, action) => {
/*
  let key = action.type; // name, nickname
  switch (action.type) {
    case 'change_name':
      return { ...state, [key]: action.value };
    // return { ...state, name: action.value };
    case 'change_nickname':
      return { ...state, [key]: action.value };
    // return { ...state, nickname: action.value };
    default:
      return state;
  }

  action.name => name, nickname
  action.type => text
  action.value => 값
   */
//   return { ...state, [action.name]: action.value };
// { name: "", nickname: ""}
// };

/*
function useModel(initState) {
  const [state, dispatch] = useReducer(reducer, initState);

  // data 변경에 대한 이벤트 핸들러
  // 데이터 변경 함수
  // e.target.name, e.target.value
  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
}
 */

const Info = () => {
  //   const [state, dispatch] = useReducer(reducer, initData);
  //   const [state, dispatch] = useModel({ name: '', nickname: '' });

  // 커스텀 Hooks 만들기
  // ** 색인 배열로 사용
  // 함수 호출이 빈번하고 자주, 반복적으로 호출되는 경우
  // const [state, onChange] = useModel{(name: '', nickname: '')} // 정상
  // const [onChange, state] = useMdoel({name: '', nickname: ''}) // 오류

  // ** 연관 배열로 사용
  // 장점 : 유연성
  const { state, onChange } = useModel({ name: '', nickname: '' }); // 정상
  // const {onChange, state} = useModel({name: '', nickname: ''}) // 정상
  const model = useModel({ name: '', nickname: '' });

  // dispatch({ type: change_name, value: '홍길동' });
  // dispatch({ type: change_nickname, value: '의적' });

  //   const onChangeName = (e) => {
  //     dispatch({ type: 'change_name', value: e.target.value });
  //   };

  //   const onChangeNickname = (e) => {
  //     dispatch({ type: 'change_nickname', value: e.target.value });
  //   };

  /* 
  const onChange = (e) => {
    //e.target.name = nickname
    //dispatch({ type: 'name', value: e.target.value });
    //dispatch({ type: e.target.name, value: e.target.value });
    dispatch(e.target);
  };
   */

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
        <input type="text" name="name" value={state.name} onChange={onChange} />
        <input
          type="text"
          name="nickname"
          value={model.state.nickname}
          onChange={model.onChange}
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
