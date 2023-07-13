import { Component } from 'react';

import ScrollBox from './comp/ScrollBox';

class App8 extends Component {
  render() {
    return (
      <div className="react">
        <ScrollBox ref={(ref) => (this.scrollbox = ref)} />
        <div>
          <button onClick={(e) => this.scrollbox.scrollToBottom()}>
            맨 밑으로
          </button>
        </div>
      </div>
    );
  }
}

export default App8;
