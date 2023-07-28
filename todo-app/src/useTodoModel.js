import { useEffect, useReducer, useRef } from 'react';
import { useCallback } from 'react';
import axios from 'axios';

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
const reducer = (todos, action) => {
  switch (action.type) {
    case 'listTodo':
      return action.todos;
    case 'insertTodo':
      return todos.concat(action.todo);
    case 'removeTodo':
      return todos.filter((todo) => todo.id !== action.id);
    case 'onToggle':
      return todos.map((todo) =>
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
      return todos;
  }
};

const useTodoModel = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  //   const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(todos.length + 1);

  useEffect(() => {
    todoList();
  }, []);

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

  const todoList = async () => {
    axios.get('api/v2/todoList').then((response) => {
      dispatch({
        type: 'listTodo',
        todos: response.data,
      });
    });
  };

  const insertTodo = useCallback((value) => {
    axios
      .post(
        'api/v2/insert',
        { checked: 'F', title: value },
        { headers: { 'Content-type': 'application/json' } }
      )
      .then((response) => {
        dispatch({
          type: 'insertTodo',
          todo: {
            id: response.data,
            checked: 'F',
            title: value,
          },
        });
      });
  }, []);
  // 랜더링을 할때마다 코드를 계속 만들어야한다 -> react의 특징

  const removeTodo = useCallback((id) => {
    axios
      .post(
        'api/v2/delete',
        { id: id },
        { headers: { 'Content-type': 'application/json' } }
      )
      .then((response) => {
        if (parseInt(response.data) === 1) {
          dispatch({
            type: 'removeTodo',
            id: id,
          });
        }
      });
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
    todos,
    insertTodo,
    removeTodo,
    onToggle,
  };
};

export default useTodoModel;
