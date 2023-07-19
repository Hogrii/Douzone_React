import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // <Link to="/about?detail=true&mode=1"></Link>
  // detail => true, mode => 1 입력
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = (e) => {
    // setSearchParams({ mode });
    // about?detai=true&mode=1에서 detail=true를 없애고 mode=1만 남겨놓는다
    // 관리자도구창 Network에 아무 변화가 없는걸 보면 server로부터 가져오는게 없는 것을 알 수 있다
    setSearchParams({ mode, detail: detail === "true" ? false : true });
    // about?detai=true&mode=1에서 detail이 true면 false로, false면 true로 값을 바꾼다
  };

  const onIncMode = (e) => {
    setSearchParams({
      detail,
      mode: !isNaN(mode) && mode ? parseInt(mode) + 1 : 1,
    });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리엑트 라우터를 사용해 보는 프로젝트입니다</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncMode}>mode + 1 증가</button>
      <br />
      <a href="/">홈</a>
    </div>
  );
};

export default About;
