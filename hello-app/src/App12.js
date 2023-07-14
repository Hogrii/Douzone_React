import React, { Component } from 'react';
import LifeCycleSample from './comp/LifeCycleSample';
import ErrorBoundary from './comp/ErrorBoundary';

// 랜덤 색상 생성
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 0xffffff).toString(16);
  // floor : 소수점 이하를 버리는 메소드
  // toString(16) : 16진수
}

class App12 extends Component {
  state = {
    color: '#000000',
    lifeCycleVisible: true,
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  handlerLifeCycleInvisible = () => {
    this.setState({ lifeCycleVisible: false });
  };

  handlerLifeCycleVisible = () => {
    this.setState({ lifeCycleVisible: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        {this.state.lifeCycleVisible && (
          <>
            <ErrorBoundary>
              <LifeCycleSample color={this.state.color} />
              <button onClick={this.handlerLifeCycleInvisible}>
                LifeCycleSample 숨김
              </button>
            </ErrorBoundary>
          </>
        )}
        <button onClick={this.handlerLifeCycleVisible}>
          LifeCycleSample 보임
        </button>
      </div>
    );
  }
}

export default App12;
