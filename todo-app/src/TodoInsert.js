import { MdAdd, MdLogout } from 'react-icons/md';
import './TodoInsert.scss';
import { useRef, useState } from 'react';
import { Link } from '../node_modules/react-router-dom/dist/index';

const TodoInsert = ({ insertTodo }) => {
  const [value, setValue] = useState('');
  const inputBox = useRef();
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    inputBox.current.focus();
    if (value === '' && value.length === 0) {
      alert('할 일을 입력해주세요');
      return false;
    }
    // 할 일 추가
    insertTodo(value);
    setValue('');
    return false;
  };

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        ref={inputBox}
        value={value}
        onChange={onChange}
        placeholder="할일을 입력하세요"
      />
      <button type="submit">
        <MdAdd />
      </button>
      <Link to="/">
        <button type="button">
          <MdLogout />
        </button>
      </Link>
    </form>
  );
};

export default TodoInsert;
