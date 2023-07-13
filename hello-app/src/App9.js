import { Component } from 'react';

import ScrollBoxCreateRef from './comp/ScrollBoxCreateRef';

class App9 extends Component {
  render() {
    return (
      <div className="react">
        <ScrollBoxCreateRef ref={(ref) => (this.scrollBoxCreateRef = ref)} />
        <div>
          <button onClick={(e) => this.scrollBoxCreateRef.scrollToBottom()}>
            맨 밑으로
          </button>
        </div>
      </div>
    );
  }
}

export default App9;
