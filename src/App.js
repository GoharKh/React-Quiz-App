import { PureComponent } from 'react';

import img from './images/brain.png';
import Quiz from './components/Quiz';


class App extends PureComponent {
  render() {
    return (
      <div className="container">
        <div className="title">
          <img src={img} alt='/' width='80px'/>
          <h1>Let's Play</h1>
          <div className="underline"></div>
        </div>
        <Quiz />
      </div>
    );
  };
};

export default App;