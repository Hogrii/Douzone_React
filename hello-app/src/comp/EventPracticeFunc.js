import React, { useState } from 'react';

const EventPracticeFunc = () => {
  const [map, setMap] = useState({ message: '', username: '', userid: '' });

  // 여러 handler 합치기
  let handlerChange = (e) => {
    setMap({ ...map, [e.target.name]: e.target.value });
  };

  let handlerInit = () => {
    setMap({ ...map, message: '', username: '', userid: '' });
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      메시지 :{' '}
      <input
        type="text"
        name="message"
        placeholder="하고싶은 말을 입력해~"
        onChange={handlerChange}
        onKeyDown={(e) => {
          if (e.code === 'Enter') handlerInit(e);
        }}
        value={map.message}
      />
      <br />
      사용자명 :{' '}
      <input
        type="text"
        name="username"
        placeholder="사용자명을 입력해~"
        onChange={handlerChange}
        onKeyDown={(e) => {
          if (e.code === 'Enter') handlerInit(e);
        }}
        value={map.username}
      />
      <br />
      아이디 :{' '}
      <input
        type="text"
        name="userid"
        placeholder="아이디를 입력해~"
        onChange={handlerChange}
        onKeyDown={(e) => {
          if (e.code === 'Enter') handlerInit(e);
        }}
        value={map.userid}
      />
      <h2>메시지 : {map.message}</h2>
      <h2>사용자 : {map.username}</h2>
      <h2>아이디 : {map.userid}</h2>
      <button onClick={handlerInit}>초기화</button>
    </div>
  );
};

export default EventPracticeFunc;
