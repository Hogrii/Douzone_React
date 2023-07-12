import React, { Component } from 'react';

class Number3Class extends Component {
  state = {
    a: 1,
    b: 2,
    c: 1,
  };

  handlerClick = (e) => {
    this.setState({ [e.target.name]: parseInt(e.target.value) + 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.a}</h1>
        <h1>{this.state.b}</h1>
        <h1>{this.state.c}</h1>
        <button name="a" value={this.state.a} onClick={this.handlerClick}>
          증가 1
        </button>
        <button name="b" value={this.state.b} onClick={this.handlerClick}>
          증가 2
        </button>
        <button name="c" value={this.state.c} onClick={this.handlerClick}>
          증가 3
        </button>
      </div>
    );
  }
}

export default Number3Class;
