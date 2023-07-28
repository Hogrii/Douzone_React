import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import useTodoModel from './useTodoModel';
import TodoTemplate from './TodoTemplate';

const TodoClient = () => {
  // const { state, insertTodo, removeTodo, onToggle } = useTodoModel();
  const model = useTodoModel();
  return (
    <TodoTemplate>
      <TodoInsert insertTodo={model.insertTodo} />
      <TodoList model={model} />
    </TodoTemplate>
  );
};

export default TodoClient;
