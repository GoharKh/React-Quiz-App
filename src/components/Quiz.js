import Question from './Question';
import questions1 from '../data/questions1';
import questions2 from '../data/questions2';
import questions3 from '../data/questions3';
import ErrorBoundary from './ErrorBoundary';

const Quiz  = (props) =>  {
    const questionsArr = [questions1, questions2, questions3];
    const index = Math.floor(Math.random() * questionsArr.length);
    const questions = questionsArr[index];

    return (
      <div className='quiz'>
        <ErrorBoundary>
          <Question questions={questions} {...props}/>
        </ErrorBoundary>
      </div>
    )
};

export default Quiz