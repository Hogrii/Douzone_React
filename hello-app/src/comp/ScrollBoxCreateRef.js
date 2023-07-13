import React, { Component } from 'react';

class ScrollBoxCreateRef extends Component {
  outerBox = React.createRef();

  scrollToBottom = () => {
    this.outerBox.current.scrollTop =
      this.outerBox.current.scrollHeight - this.outerBox.current.clientHeight;
  };

  render() {
    const style = {
      border: '1px solid black',
      height: '300px',
      width: '300px',
      overflow: 'auto',
      position: 'relative',
      background: 'red',
    };

    const innerStyle = {
      width: '100%',
      height: '1000px',
      background: 'green',
    };

    return (
      <>
        <div style={style} ref={this.outerBox}>
          <div style={innerStyle}></div>
        </div>
        <button onClick={(e) => this.scrollToBottom()}>임시 맨 밑으로</button>
      </>
    );
  }
}

export default ScrollBoxCreateRef;
