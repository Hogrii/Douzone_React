import { Component } from 'react';
import './App.css';

import Say from './comp/Say';
import Number3 from './comp/Number3';
import Number3Class from './comp/Number3Class';

class App6 extends Component {
  render() {
    return (
      <div className="react">
        <Say />
        <Number3 />
        <Number3Class />
      </div>
    );
  }
}

export default App6;
