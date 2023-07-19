import React, { useRef, useCallback, useState } from 'react';
import { produce } from 'immer';

const orgState = [
  {
    id: 1,
    todo: 'aa',
    checked: true,
  },
  {
    id: 2,
    todo: 'bb',
    checked: false,
  },
];
console.log('orgState', orgState);

/*
// id가 2인 항목의 checked 값을 true로 변경
const newState = orgState.map((info) =>
  info.id !== 2 ? info : { ...info, checked: true }
);
console.log('newState', newState);

// 새로운 Info 추가
newState.push({
  id: 3,
  todo: 'cc',
  checked: false,
});

newState = [...newState];
console.log('newState', newState);

newState = newState.filter((info) => info.id !== 1);
console.log('newState', newState);
 */

// orgState -> draft,, callback함수임
const newState = produce(orgState, (draft) => {
  // id가 2인 항목의 checked값을 true로 변경
  const todo = draft.find((info) => info.id === 2);
  todo.checked = true; // 복제에 대한 부분을 신경쓰지 않고 작업을 할 수 있다

  // 새로운 Info 추가
  draft.push({
    id: 3,
    todo: 'cc',
    checked: false,
  });

  // id가 1인 항목 삭제
  draft.splice(
    draft.findIndex((info) => info.id == 1),
    1
  );
});
console.log('newState', newState);

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null,
  });

  // input 수정을 위한 함수
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      // setForm({ ...form, [name]: [value] });

      // produce 이용해서 바꾸기
      // 원본 값은 생략해도 됨 >> produce((draft) => {})
      // 원본값을 생략하면 useCallBack의 2번째 파라미터인 [form]을 []로 바꿔도 된다
      const newForm = produce(form, (draft) => {
        draft[name] = value; // draft 안에 있는 name을 key로 value를 바꾸라는 의미
      });
      setForm(newForm);
    },
    [form]
  );

  // form 등록을 위한 함수
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      // array 에 새 항목 등록
      setData({ ...data, array: data.array.concat(info) });

      // form 초기화
      setForm({
        name: '',
        username: '',
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목을 삭제하는 함수
  const onRemove = useCallback((id) => {
    setData({ ...data, array: data.array.filter((info) => info.id !== id) });
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="아이디"
          value={form.username}
          onChange={onChange}
        />
        <input
          name="name"
          placeholder="이름"
          value={form.name}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
