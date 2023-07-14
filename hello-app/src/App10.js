import { Component } from 'react';
import IterationSample from './comp/IterationSample';
import IterationSampleClass from './comp/IterationSampleClass';
import './App.css';

class App10 extends Component {
  render() {
    return (
      <div className="react">
        {/* <IterationSample /> */}
        <IterationSampleClass ref={(ref) => (this.iterationSampleQuiz = ref)} />
      </div>
    );
  }
}

export default App10;
