import './App.css';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';
import TodoTemplate from './TodoTemplate';
import useTodoModel from './useTodoModel';

//todos={state} removeTodo={removeTodo} onToggle={onToggle}
function App() {
  // const { state, insertTodo, removeTodo, onToggle } = useTodoModel();
  const model = useTodoModel();
  return (
    <TodoTemplate>
      <TodoInsert insertTodo={model.insertTodo} />
      <TodoList model={model} />
    </TodoTemplate>
  );
}

export default App;
