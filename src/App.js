import {PureComponent} from "react";

import Quiz from "./components/Quiz";

class App extends PureComponent {
  render() {
    return (
      <main>        
        <div className="container">
          <div className="title">
            <h2>Let's Play</h2>
            <div className="underline"></div>
          </div>
              <Quiz />
        </div>
      </main>
    );
  }
}

export default App;