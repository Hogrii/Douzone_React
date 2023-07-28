import React, { useCallback, useState } from 'react';
import './TodoMain.scss';
import { Link, useNavigate } from '../node_modules/react-router-dom/dist/index';
import { produce } from '../node_modules/immer/dist/immer';
import axios from 'axios';

const TodoMain = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: '',
    password: '',
    username: '',
    roles: '',
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
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
      console.log('onSubmit');
      console.log(user);
      const loginUser = {
        username: user.username,
        password: user.password,
      };
      console.log(loginUser);
      axios.post('/login', loginUser).then((response) => {
        console.log('main response');
        console.log(response);
        navigate('/');
      });
    },
    [user]
  );
  return (
    <div className="TodoMain">
      <div className="app-title">로그인</div>
      <form onSubmit={onSubmit}>
        <div className="login">
          <div className="userId">
            <label>아이디 : </label>
            <input
              type="text"
              name="username"
              placeholder="아이디를 입력해주세요"
              onChange={onChange}
            />
          </div>
          <div className="pwd">
            <label>비밀번호 : </label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력해주세요"
              onChange={onChange}
            />
          </div>
          <div className="btns">
            <button type="submit">로그인</button>
            <Link to="/TodoSignUp">
              <button type="button">회원가입</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoMain;
