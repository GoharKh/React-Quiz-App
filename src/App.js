import { PureComponent } from "react";

import img from './images/brain.png';
import Quiz from "./components/Quiz";


class App extends PureComponent {
  render() {
    return (
      <main>        
        <div className="container">
          <div className="title">
            <img src={img} alt='/' width='50px'/>
            <h2>Let's Play</h2>
            <div className="underline"></div>
          </div>
          <Quiz />
        </div>
      </main>
    );
  };
};

export default App;