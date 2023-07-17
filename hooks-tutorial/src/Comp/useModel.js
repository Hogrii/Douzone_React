import { useReducer } from 'react';

const reducer = (state, action) => {
  return { ...state, [action.name]: action.value };
};

const useModel = (initState) => {
  // 이름에 use가 들어가야 Hooks을 사용할 수 있다
  const [state, dispatch] = useReducer(reducer, initState);

  // data 변경에 대한 이벤트 핸들러
  // 데이터 변경 함수
  // e.target.name, e.target.value
  const onChange = (e) => {
    dispatch(e.target);
  };
  const onUpdate = (e) => {
    dispatch(e.target);
  };

  //  return [state, onChange]; //색인 배열
  return {
    //연관 배열
    onChange,
    state,
    onUpdate,
  };
};

export default useModel;
