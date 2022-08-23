import { PureComponent } from "react";

import Question from './Question';
import questions from '../questions'

class Quiz extends PureComponent {
    render() {
        return (
            <div className="quiz">
                {questions.length ? (
                    <Question questions={questions} />
                ) : (
                    <div className="title">
                        <h1>No Questions</h1>
                    </div>
                    ) 
                }
            </div>
        );
    }
};

export default Quiz;