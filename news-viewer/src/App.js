import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

// 사용할 JSON 데이터
// jsonplaceholder.typicode.com/todos

function App() {
  const [data, setData] = useState('안녕하세요');

  /*
  const add = (a, b) => {
    return a + b;
  };
   */

  const onClick = async () => {
    // const sum = add(10, 20);
    // 서버에서 자료를 얻어서 설정하면 된다
    // await을 사용하면 해당 작업이 모두 수행될때까지 대기한다
    // await과 async는 짝을 이룬다.. await을 사용하면 항상 async를 붙여주어야 한다
    /*
    // async-await 방식
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );
    const jsonData = await response.json(); // 비동기로 response를 받아와야 한다
    setData(JSON.stringify(jsonData));
     */

    // axios 방식
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      setData(JSON.stringify(response.data));
    } catch (e) {
      console.log(e);
    }

    /*
    // fetch 방식
    fetch('https://jsonplaceholder.typicode.com/todos/1') // then은 당장 실행하는 것이 아니고 해당 작업이 완료된 이후에 호출하는 후처리 함수이다
      // 상태코드 결과
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          return response.json(); // fetch를 사용했기 때문에 .json()을 사용해야 한다
        } else {
          throw new Error('Something went wrong on api server!');
        }
      })
      // 실제 응답 데이터
      .then((response) => {
        console.log('응답자료 문자열 : ' + JSON.stringify(response));
        setData(JSON.stringify(response));
      })
      .catch((error) => {
        console.error(error);
      });
      */
  };

  return (
    <div className="App">
      data: {data} <br />
      <button onClick={onClick}>불러오기</button>
    </div>
  );
}

export default App;
