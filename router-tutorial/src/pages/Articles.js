import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };
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
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 3
          </NavLink>
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
