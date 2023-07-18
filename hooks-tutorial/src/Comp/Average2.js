import React from 'react';
import useAvgModel from './useAvgModel';

const Average2 = () => {
  const model = useAvgModel({
    list: '',
    number: '',
    inputElement: '',
    clickCount: '',
    onChange: '',
    onClick: '',
    avg: '',
  });

  return (
    <div>
      {/* 컴포넌트로 바꿔보기 */}
      <form onSubmit={model.onClick}>
        <input
          value={model.number}
          onChange={model.onChange}
          ref={model.inputElement}
        />
        <button type="submit" onClick={model.onClick}>
          등록
        </button>
      </form>
      <ul>
        {model.list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값 : </b>
        {model.avg}
      </div>
    </div>
  );
};

export default Average2;
