import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [state, setState] = useState({
    status: -1,
    result: 0,
    message: '',
  });

  const onSum = async (e) => {
    // alert('계산 요청');
    const response = await axios.get('/ServerSum/sum.jsp').then();
    setState(response.data);
  };

  const onSumCancel = async (e) => {
    // alert('계산 취소');
    const response = await axios.get('/ServerSum/sumCancle.jsp').then();
    setState(response.data);
  };
  return (
    <div>
      <div>
        <h1>axios</h1>
        <p>{state.status === 1 ? state.result : ''}</p>
        <button onClick={onSum}>계산 요청</button>
        <button onClick={onSumCancel}>계산 취소</button>
      </div>
    </div>
  );
}

export default App;
