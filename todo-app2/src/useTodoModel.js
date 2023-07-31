import { useReducer, useRef } from 'react';
import { useCallback } from 'react';

const createBulkTodos = () => {
  const array = [];
  for (let i = 1; i < 25000; i++) {
    array.push({
      id: i,
      checked: i % 3 === 0,
      title: `리액트의 기초 알아보기 할 일 ${i}`,
    });
  }
  return array;
};

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

    default:
      return state;
  }
};

const useTodoModel = () => {
  const [state, dispatch] = useReducer(reducer, createBulkTodos());
  const nextId = useRef(state.length + 1);

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

  return {
    state,
    actions: {
      insertTodo,
      removeTodo,
      onToggle,
    },
  };
};

export default useTodoModel;
