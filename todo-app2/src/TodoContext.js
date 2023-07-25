import React, { createContext } from 'react';
import useTodoModel from './useTodoModel';

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

const TodoContext = createContext({
  state: { todos: [] },
  actions: {
    insertTodo: () => {},
    removeTodo: () => {},
    onToggle: () => {},
  },
});

const TodoProvider = ({ children }) => {
  const model = useTodoModel({
    todos: createBulkTodos(),
  });

  const value = {
    state: model.state,
    actions: model.actions,
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

const { Consumer: TodoConsumer } = TodoContext;

export { TodoProvider, TodoConsumer };

export default TodoContext;
