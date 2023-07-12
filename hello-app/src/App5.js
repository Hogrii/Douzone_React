import { Component } from 'react';
import './App.css';

import { Counter, Counter2 } from './comp';

class App5 extends Component {
  render() {
    return (
      <div className="react">
        {/*
          <Counter />
         */}
        <Counter2 />
      </div>
    );
  }
}

export default App5;
