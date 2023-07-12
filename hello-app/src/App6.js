import { Component } from 'react';
import './App.css';

import Say from './comp/Say';
import Number3 from './comp/Number3';
import Number3_Class from './comp/Number3_Class';

class App5 extends Component {
  render() {
    return (
      <div className="react">
        <Say />
        <Number3 />
        <Number3_Class />
      </div>
    );
  }
}

export default App5;
