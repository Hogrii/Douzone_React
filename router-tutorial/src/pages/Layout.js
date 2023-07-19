import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    // 이전 페이지로
    navigate(-1); // javascript historyback과 같다
  };

  const goArticles = () => {
    // articles로
    navigate("/articles");
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main style={{ minHeight: "550px" }}>
        <Outlet />
      </main>
      <footer>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>copy right 더존 5기</h1>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
