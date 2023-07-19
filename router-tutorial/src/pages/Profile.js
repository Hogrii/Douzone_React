import React from "react";
import { useParams } from "react-router-dom";

const userInfos = {
  velopert: {
    name: "김민준",
    desc: "리액트를 좋아하는 개발자 ...",
    age: 20,
  },
  gildong: {
    name: "홍길동",
    desc: "의적 개발자 ...",
    age: 66,
  },
};

const Profile = () => {
  const params = useParams();
  const userInfo = userInfos[params.userid];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {userInfo ? (
        <div>
          <h2>{userInfo.name}</h2>
          <h2>{userInfo.desc}</h2>
        </div>
      ) : (
        <p>존재하지 않는 프로필 입니다</p>
      )}
      <a href="/">홈</a>
    </div>
  );
};

export default Profile;
