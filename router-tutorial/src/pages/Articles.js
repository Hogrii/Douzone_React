import React from "react";
import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          listStyleType: "none",
        }}
      >
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
      {/* 
            Outlet 컴포넌트 위치에 중첩된 라우터가 랜더링되어 나타난다 
            중첩된 라우터 -> 현재 컴포넌트 내 존재하는 하위 컴포넌트들을 의미
        */}
      <Outlet />
      <a href="/">홈</a>
    </div>
  );
};

export default Articles;
