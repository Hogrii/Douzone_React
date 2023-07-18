import './App.css';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import useTodoModel from './useTodoModel';

function App() {
  const { state, insertTodo, removeTodo, onToggle } = useTodoModel();
  return (
    <TodoTemplate>
      <TodoInsert insertTodo={insertTodo} />
      <TodoList todos={state} removeTodo={removeTodo} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
