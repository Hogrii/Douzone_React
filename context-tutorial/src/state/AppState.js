import ColorComponent from './ColorComponent';
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'color':
      return { ...state, color: action.color };
    case 'subject':
      return { ...state, subject: action.subject };
    default:
      return state;
  }
};

function AppState() {
  const [state, dispatch] = useReducer(reducer, {
    color: 'black',
    subject: 'red',
  });

  const setColor = (color) => {
    dispatch({ type: 'color', color: color });
  };

  const setSubject = (subject) => {
    dispatch({ type: 'subject', subject: subject });
  };

  const actions = { setColor, setSubject };

  //위코드를 아래와 같이 수정하는 것이 좋다
  // const actions = {
  //   setColor : color => {
  //     setState({...state, color});
  //   },
  //   setSubject : subject => {
  //     setState({...state, subject});
  //   }
  // };

  return (
    <div>
      {/* 데이터와 데이터 변경에 대한 부분을 따로 넘겨준다 */}
      <ColorComponent state={state} actions={actions} />
      {/* <ColorComponent state={state} setState={setState} /> */}
    </div>
  );
}

export default AppState;
