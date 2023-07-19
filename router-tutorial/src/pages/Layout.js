import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
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
