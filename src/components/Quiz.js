import { PureComponent } from 'react';

import Question from './Question';
import questions1 from '../data/questions1';
import questions2 from '../data/questions2';
import questions3 from '../data/questions3';
import ErrorBoundary from './ErrorBoundary';

class Quiz extends PureComponent {
  render() {
    const questionsArr = [questions1, questions2, questions3];
    const index = Math.floor(Math.random() * questionsArr.length);
    const questions = questionsArr[index];

    return (
      <div className="quiz">
          {/* {questions.length ? (
            <Question questions={questions} {...this.props}/> ) : (
            <div className="title">
              <h1>No Questions</h1>
            </div> ) 
          } */}
          <ErrorBoundary>
            <Question questions={questions} {...this.props}/>
          </ErrorBoundary>
      </div>
    );
  };
};

export default Quiz