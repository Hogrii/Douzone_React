import React, { useState } from 'react';

const InputComponent = (props) => {
  const [inputText, setInputText] = useState('');

  const handlerChange = (e) => {
    setInputText(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log('입력된 값 = ' + inputText);
    props.handlerInsert(inputText);
    setInputText('');

    e.target.form.submit(); // onSubmit에 이벤트 핸들러(업데이트) 호출

    return false;
  };

  return (
    <div>
      <form name="myForm" onSubmit={handlerSubmit}>
        <input type="text" value={inputText} onChange={handlerChange}></input>
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default InputComponent;
