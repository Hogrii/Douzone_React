import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
    userid: '',
  };

  /*
  handlerChangeMessage = (e) => {
    console.log(e.target.value);
    this.setState({ message: e.target.value });
  };
  handlerChangeUsername = (e) => {
    console.log(e.target.value);
    this.setState({ username: e.target.value });
  };
   */

  // 여러 handler 합치기
  handlerChange = (e) => {
    console.log(e.target.name);
    // this.setState({ e.target.name: e.target.value}) >> 변수를 사용했는데 인식이 안됨.. 그래서 색인 배열을 사용해야 한다
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerInit = () => {
    this.setState({
      message: '',
      username: '',
      userid: '',
    });
  };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        메시지 :{' '}
        <input
          type="text"
          name="message"
          placeholder="하고싶은 말을 입력해~"
          onChange={this.handlerChange}
          onKeyDown={(e) => {
            if (e.code === 'Enter') this.handlerInit(e);
          }}
          value={this.state.message}
        />
        <br />
        사용자명 :{' '}
        <input
          type="text"
          name="username"
          placeholder="사용자명을 입력해~"
          onChange={this.handlerChange}
          onKeyDown={(e) => {
            if (e.code === 'Enter') this.handlerInit(e);
          }}
          value={this.state.username}
        />
        <br />
        아이디 :{' '}
        <input
          type="text"
          name="userid"
          placeholder="아이디를 입력해~"
          onChange={this.handlerChange}
          onKeyDown={(e) => {
            if (e.code === 'Enter') this.handlerInit(e);
          }}
          value={this.state.userid}
        />
        <h2>메시지 : {this.state.message}</h2>
        <h2>사용자 : {this.state.username}</h2>
        <h2>아이디 : {this.state.userid}</h2>
        <button onClick={this.handlerInit}>초기화</button>
      </div>
    );
  }
}

export default EventPractice;
