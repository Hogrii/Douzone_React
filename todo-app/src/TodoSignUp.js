import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import './TodoSignUp.scss';
import { produce } from '../node_modules/immer/dist/immer';
import axios from 'axios';
import { useNavigate } from '../node_modules/react-router-dom/dist/index';

const TodoSignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    password: '',
    username: '',
    roles: '',
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      // console.log(e.target);
      const newUser = produce(user, (draft) => {
        draft[name] = value;
      });
      setUser(newUser);
    },
    [user]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      console.log(user);
      axios.post('/api/v1/join', user).then((response) => {
        console.log(response);
        navigate('/');
      });
    },
    [user]
  );

  return (
    <div className="TodoSignUp">
      <div className="app-title">회원가입</div>
      <form onSubmit={onSubmit}>
        <div className="signUp">
          <div className="userId">
            <label>아이디 : </label>
            <input
              type="text"
              name="id"
              placeholder="아이디를 입력해주세요"
              onChange={onChange}
            />
          </div>
          <div className="pwd">
            <label>비밀번호 : </label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={onChange}
            />
          </div>
          <div className="userName">
            <label>이름 : </label>
            <input
              type="text"
              name="username"
              placeholder="이름을 입력해주세요"
              onChange={onChange}
            />
          </div>
          <div className="btns">
            <button type="submit">회원가입</button>
            <Link to="/">
              <button type="button">취소</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoSignUp;
