import { Component } from 'react';
import './App.css';

import Counter from './Counter';

class App5 extends Component {
  render() {
    return (
      <div className="react">
        <Counter number={1} />
      </div>
    );
  }
}

export default App5;
