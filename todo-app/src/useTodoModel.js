import { useReducer, useRef } from 'react';
import { useCallback } from 'react';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i < 5; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0,
      title: `리액트의 기초 알아보기 할 일 ${i}`,
    });
  }
  return array;
};
/* 
 // 여기는 지역변수(todos)
setTodos((todos) =>
    todos.concat({
    id: nextId.current++,
    checked: false,
    title: value,
    })
);
// myTodosAppend(react.todos) -> react가 가지고 있음
*/
// setTodos((todos) => todos.filter((todo) => todo.id !== id));
/*
setTodos((todos) =>
    todos.map((todo) =>
    todo.id === id ? { ...todo, checked: !todo.checked } : todo
    )
);
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'insertTodo':
      return state.concat(action.todo);
    case 'removeTodo':
      return state.filter((todo) => todo.id !== action.id);
    case 'onToggle':
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );

    // 이진탐색
    // let left = 0;
    // let right = todos.length - 1;
    // let targetIndex = -1;
    // while (left <= right) {
    //   let index = Math.floor((left + right) / 2);
    //   if (todos[index].id === action.id) {
    //     targetIndex = index;
    //     break;
    //   } else if (todos[index].id > action.id) {
    //     right = index - 1;
    //   } else left = index + 1;
    // }
    // todos[targetIndex].checked = !todos[targetIndex].checked;
    // return [...todos];

    default:
      return state;
  }
};

const useTodoModel = () => {
  const [state, dispatch] = useReducer(reducer, createBulkTodos());
  //   const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(state.length + 1);

  /*
    const insertTodo = useCallback(
      (value) => {
        setTodos(
          todos.concat({
            id: nextId.current++,
            checked: false,
            title: value,
          })
        );
      },
      [todos]
    );
     */

  const insertTodo = useCallback((value) => {
    dispatch({
      type: 'insertTodo',
      todo: {
        id: nextId.current++,
        checked: false,
        title: value,
      },
    });
  }, []);
  // 랜더링을 할때마다 코드를 계속 만들어야한다 -> react의 특징

  const removeTodo = useCallback((id) => {
    dispatch({ type: 'removeTodo', id: id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: 'onToggle', id: id });
  }, []);

  /*
    // 옛날 방법
    const onChangeChecked = useCallBack((id) => {
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === id) {
          todos[i].checked = !todos[i].chcked;
          setTodos([...todos]);
          break;
        }
      }
    }, todos);
     */
  return {
    state,
    insertTodo,
    removeTodo,
    onToggle,
  };
};

export default useTodoModel;
