import { Component } from 'react';
import './App.css';

import Say from './comp/Say';
import Number3 from './comp/Number3';

class App5 extends Component {
  render() {
    return (
      <div className="react">
        <Say />
        <Number3 />
      </div>
    );
  }
}

export default App5;
