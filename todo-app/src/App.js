import { Route, Routes } from 'react-router-dom';
import './App.css';
import TodoMain from './TodoMain';
import TodoSignUp from './TodoSignUp';
import TodoClient from './TodoClient';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TodoMain />} />
      <Route path="/TodoSignUp" element={<TodoSignUp />} />
      <Route path="/TodoClient" element={<TodoClient />} />
    </Routes>
  );
}

export default App;
