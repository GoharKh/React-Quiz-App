import { PureComponent } from 'react';

import Question from './Question';
import questions1 from '../data/questions1';
import questions2 from '../data/questions2';
import questions3 from '../data/questions3';

class Quiz extends PureComponent {
  constructor(props) {
    super(props)
  }


  render() {
    const questionsArr = [questions1, questions2, questions3];
    const index = Math.floor(Math.random() * questionsArr.length);
    const questions = questionsArr[index];
    
    return (
      <div className="quiz">
          {questions.length ? (
            <Question questions={questions} {...this.props}/> ) : (
            <div className="title">
              <h1>No Questions</h1>
            </div> ) 
          }
      </div>
    );
  };
};

export default Quiz;