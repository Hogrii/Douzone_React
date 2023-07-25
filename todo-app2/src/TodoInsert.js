import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useContext, useRef, useState } from 'react';
import TodoContext from './TodoContext';

const TodoInsert = () => {
  const { actions } = useContext(TodoContext);

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
    actions.insertTodo(value);
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
    </form>
  );
};

export default TodoInsert;
