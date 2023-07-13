import { Component } from 'react';
import IterationSample from './comp/IterationSample';
import IterationSampleClass from './IterationSampleClass';
import './App.css';

class App10 extends Component {
  render() {
    return (
      <div className="react">
        <IterationSample />
        <IterationSampleClass />
      </div>
    );
  }
}

export default App10;
