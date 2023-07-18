import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      checked: false,
      title: '리액트의 기초 알아보기',
    },
    {
      id: 2,
      chcked: true,
      title: '컴포넌트 스타일링 해보기',
    },
  ]);

  const nextId = useRef(todos.length + 1);
  const insertTodo = (value) => {
    setTodos(
      todos.concat({
        id: nextId.current++,
        checked: false,
        title: value,
      })
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  /*
  // 옛날 방법
  const onChangeChecked = (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].checked = !todos[i].chcked;
        setTodos([...todos]);
        break;
      }
    }
  };
   */

  return (
    <TodoTemplate>
      <TodoInsert insertTodo={insertTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
