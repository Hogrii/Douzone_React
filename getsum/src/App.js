import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [state, setState] = useState({
    status: -1,
    result: 0,
    message: '',
    uuid: '',
  });

  const onSum = async (e) => {
    // alert('계산 요청');
    const response = await axios.get('http://localhost:8090/api/createId');
    console.log(response.data);
    console.log(response.headers['sessionid']);
    if (response.data.status === 1) {
      setState({ ...state, uuid: response.data.uuid });
      console.log(response.data.uuid);
      const response2 = await axios.get(
        'http://localhost:8090/api/sum?uuid=' + response.data.uuid
      );
      setState(response2.data);
    }
  };

  const onSumCancel = async (e) => {
    // alert('계산 취소');
    const response = await axios.get(
      'http://localhost:8090/api/sumCancle?uuid=' + state.uuid
    );
    setState(response.data);
  };
  return (
    <div>
      <div>
        <h1>axios</h1>
        <p>{state.status === 1 ? state.result : ''}</p>
        <p>{state.message}</p>
        <button onClick={onSum}>계산 요청</button>
        <button onClick={onSumCancel}>계산 취소</button>
      </div>
    </div>
  );
}

export default App;
