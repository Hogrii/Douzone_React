import React, { Component } from 'react';

class IterationSampleClass extends Component {
  state = {
    names: [
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
    ],
    inputText: '',
  };

  handlerRemove = (id) => {
    this.setState({ names: this.state.names.filter((item) => item.id !== id) });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    this.setState({
      names: this.state.names.concat({
        id: this.state.names.length + 1,
        text: this.state.inputText,
      }),
    });

    this.setState({ inputText: '' });
    return false;
  };

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let nameList = this.state.names.map((item) => (
      <li key={item.id} onDoubleClick={() => this.handlerRemove(item.id)}>
        {item.id} : {item.text}
        <button onClick={() => this.handlerRemove(item.id)}>x</button>
      </li>
    ));
    return (
      <div>
        <div>
          <form name="myForm" onSubmit={this.handlerSubmit}>
            <input
              type="text"
              name="inputText"
              value={this.state.inputText}
              onChange={this.handlerChange}
            ></input>
            <button type="submit">추가</button>
          </form>
        </div>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default IterationSampleClass;
