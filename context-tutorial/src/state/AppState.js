import ColorComponent from './ColorComponent';
import ColorModel from './ColorModel';

function AppState() {
  const { state, setColor, setSubject } = ColorModel();
  const actions = { setColor, setSubject };

  return (
    <div>
      {/* 데이터와 데이터 변경에 대한 부분을 따로 넘겨준다 */}
      <ColorComponent state={state} actions={actions} />
      {/* <ColorComponent state={state} setState={setState} /> */}
    </div>
  );
}

export default AppState;
