import React, { useState } from 'react';

const IterationSample = () => {
  // const names = ['눈사람', '얼음', '눈', '바람'];
  // const nameList = names.map(
  //   (
  //     name, // value
  //     idx // index
  //   ) => (
  //     <li key={idx}>
  //       {idx} : {name}
  //     </li>
  //   )
  // );

  const [inputText, setInputText] = useState('');

  // State를 통해 데이터를 관리하면 추가와 삭제가 쉽다
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '얼음' },
    { id: 3, text: '눈' },
    { id: 4, text: '바람' },
  ]);

  const handlerRemove = (id) => {
    console.log(id);
    setNames(names.filter((item) => item.id !== id));
  };

  const nameList = names.map((item) => (
    <li key={item.id} onDoubleClick={() => handlerRemove(item.id)}>
      {item.id} : {item.text}
      <button onClick={() => handlerRemove(item.id)}>x</button>
    </li>
  ));

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('입력된 값 : ' + inputText);
    setNames(names.concat({ id: names.length + 1, text: inputText }));
    setInputText('');
    return false;
  };

  const handlerChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <div>
        <form name="myForm" onSubmit={handlerSubmit}>
          <input type="text" value={inputText} onChange={handlerChange}></input>
          <button type="submit">추가</button>
        </form>
      </div>
      <ul>{nameList}</ul>
    </div>
  );
};

export default IterationSample;
