import React, { Component } from 'react';

class MyStateComponent extends Component {
  render() {
    const { name, age } = this.props;
    return (
      <>
        <div>나의 첫번째 컴포넌트 {this.props.name}</div>
        <div>나이 : {this.props.age}</div>
        <div>나의 첫번째 컴포넌트 {name}</div>
        <div>나이 : {age}</div>
      </>
    );
  }
}

export default MyStateComponent;
