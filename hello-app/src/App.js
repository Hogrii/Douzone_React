import './App.css';

function App() {
  const name = '이진호';
  let age = 31;
  var phone = '010-1234-1234';

  let result;

  result = false && false; // 앞이 false이면 뒤를 비교하지 않고 바로 리턴
  result = false && true;
  result = true && false; // 앞이 true이면 뒤를 비교하고 뒤가 false라면 뒤를 리턴
  result = true && true; // 앞이 true이면 뒤를 비교하고 뒤가 true라면 앞을 리턴

  // JSX 구문
  // 리턴은 항상 한줄로만 작성해야 한다
  // 리턴은 항상 문자열로 인식된다 -> JSX 구문을 문자열로 자동으로 인식해준다
  return (
    <div>
      {/* 
          {} 내부는 javasript 구문 
          삼항 연산자를 이용해서 if문처럼 분기를 나눌 수 있음
        */}
      {name === '리액트' ? <h1>리액트입니다</h1> : <h1>리액트가 아닙니다</h1>}
      {name === '리액트' && <h1>리액트가 맞습니다</h1>}
      <h1>안녕하세요 ~~</h1>
      <h2>반갑습니다 ~~</h2>

      {/* 변수를 사용할 때는 중괄호를 열고 안에 변수명을 입력하면 된다 */}
      <h3>이름 : {name}</h3>
      <h3>나이 : {age}</h3>
      <h3>번호 : {phone}</h3>
    </div>

    // 올바른 예시
    /*
        <div>
          <h1>안녕하세요 ~~</h1>
          <h2>반갑습니다 ~~</h2>
        </div>

        <Fragment>
          <h1>안녕하세요 ~~</h1>
          <h2>반갑습니다 ~~</h2>
        </Fragment>

        <>
          <h1>안녕하세요 ~~</h1>
          <h2>반갑습니다 ~~</h2>
        </>
     */
    // 옳지못한 예시
    /*
        <h1>안녕하세요 ~~</h1>
        <h2>반갑습니다 ~~</h2>
     */
  );
}

export default App;
