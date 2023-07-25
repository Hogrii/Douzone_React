import ColorBox from './ColorBox';
import ColorContext from './ColorContext';

function ColorApp() {
  return (
    <>
      {/* ColorContext에 값을 기록하기 위해 Provider를 사용하여 값을 설정한다  */}
      {/* 정적으로 데이터를 변화시킬 수 있다 */}
      <ColorContext.Provider value={{ color: 'red' }}>
        <ColorBox />
      </ColorContext.Provider>
    </>
  );
}

export default ColorApp;
