import './App.css';

/*
    falsy
    false, null, undefined, 0, ''
 */
function App2() {
  const name = undefined;
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontWeight: 'bold',
    fontSize: '48px',
  };

  return (
    /*
        <div style={style}>
        {name} <h1>undefined 입니다</h1>
        </div>
     */

    /*
        변수를 선언하고 입력하는 것이 아니라면 중괄호를 2번 열어야 한다
        <div style={{
            backgroundColor: "black",
            color: "aqua",
            fontWeight: "bold",
            fontSize: "48px",
        }}>
            {name} <h1>undefined 입니다</h1>
        </div>
     */

    // React에서는 class -> className으로 사용해야 한다
    <div className="react">
      {name} <h1>undefined 입니다</h1>
      {/* React에서는 반드시 태그를 닫아줘야 한다 -> input태그도 예외가 아님 */}
      아이디 : <input name="uid"></input>
      이름 : <input name="uname" />
      {
        // 라인 주석 -> 같은 라인에 중괄호를 닫으면 안된다(중괄호마저 주석 처리를 하기 때문)
        /* 블럭 주석 */
      }
    </div>
  );
}

export default App2;
