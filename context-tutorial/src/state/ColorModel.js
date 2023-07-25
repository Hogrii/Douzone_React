import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'color':
      return { ...state, color: action.color };
    case 'subject':
      return { ...state, subject: action.subject };
    default:
      return state;
    // return { ...state, [action.type]: [action.value] };
    // return [action.type && action.value] ? { ...state, [action.type] : actions.valiue} : state ;
    // return (action["type"] && action["value"]) ? { ...state, [action.type] : actions.valiue} : state ;
  }

  /*
  // return 변경하기
  0. 초급, 직관성이 좋음
  color : action.color
  subject : action.subject

  1.
  action.color, action.subject -> action.value

  2.
  color : ~ -> [action.type] : action.value
  subject : ~ -> [action.type] : action.value

  3. 중+고급, 변화량이 좋음
  return { ...state, [action.type] : action.value}
  */
};

const ColorModel = () => {
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

  return { state, setColor, setSubject };
};

export default ColorModel;
