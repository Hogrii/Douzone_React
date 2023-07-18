import React, { useState } from 'react';
import InputComponent from './comp/InputComponent';
import ListComponent from './comp/ListComponent';

function model(state, action) {}

const App11 = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  //새롭게 생성되는 ID를 관리하기 위한 상태 변수
  const [nextId, setNextId] = useState(names.length);

  const handlerRemove = (id) => {
    setNames(names.filter((item) => item.id !== id));
  };

  const handlerInsert = (inputText) => {
    setNames(names.concat({ id: nextId + 1, text: inputText }));
    setNextId(nextId + 1);
  };

  return (
    <div>
      <InputComponent handlerInsert={handlerInsert} />
      <ListComponent handlerRemove={handlerRemove} names={names} />
    </div>
  );
};

export default App11;
