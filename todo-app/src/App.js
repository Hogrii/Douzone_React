import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';

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

function App() {
  const [todos, setTodos] = useState(createBulkTodos);
  const nextId = useRef(todos.length + 1);

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
    // 여기는 지역변수(todos)
    setTodos((todos) =>
      todos.concat({
        id: nextId.current++,
        checked: false,
        title: value,
      })
    );
    // myTodosAppend(react.todos) -> react가 가지고 있음
  }, []);
  // 랜더링을 할때마다 코드를 계속 만들어야한다 -> react의 특징

  const removeTodo = useCallback((id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
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

  return (
    <TodoTemplate>
      <TodoInsert insertTodo={insertTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
