import { PureComponent } from 'react';

import Final from './Final';
import nextBtn from '../images/right.png' 
import prevBtn from '../images/left.png'

class Question extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      error: false,
      currentQuestion: 0,
      correct: null,
      score: 0,
      isFinished: false,
      checkedAnswers: []
    };
  };

  showResult = i => {
    const {selected, correct} = this.state;

    if (selected === i && selected !== correct) {
        return "wrong";
    } else if (i === correct) {
        return "right";
    }
  };

  checkAnswer = i => {
    const {questions} = this.props;
    const {currentQuestion, checkedAnswers} = this.state;

    this.setState({
      selected: i, 
      correct: questions[currentQuestion].correctAnswer, 
      error: false,
      checkedAnswers: [...checkedAnswers, i]
    });
  };

  nextQuestion = () => {
    const {questions} = this.props;
    const {selected, currentQuestion, score, correct, checkedAnswers} = this.state;

    if (selected === correct) {
      this.setState({score: score + 1})
    };
    if(checkedAnswers[currentQuestion + 1]) {
      this.setState({
        currentQuestion: currentQuestion + 1, 
        selected: checkedAnswers[currentQuestion]
      })} else if(selected ||  checkedAnswers[currentQuestion] ) {
      if(currentQuestion + 1 !== questions.length ) {
          this.setState({
              currentQuestion: currentQuestion + 1, 
              selected: null
          });
      } else {
          this.setState({isFinished: true})
      };
    } else {
        this.setState({error: 'Please select an option for next question'})
    };
  };

  previousQuestion = () => {
    const {selected, currentQuestion}  = this.state;

    if(currentQuestion !== 0) {
        this.showResult(selected);
        this.setState({
            currentQuestion: currentQuestion - 1,
            selected: true,
            error: ''
        });
    };
  };

  render() {
    const {questions} = this.props;
    const {score, currentQuestion, selected, error, isFinished, checkedAnswers} = this.state;
    
    if(isFinished) {
        return <Final score={score} questions={questions.length}/>
    };

    return (
      <>
        <h3>Question {currentQuestion + 1}  </h3>
        <h2>{questions[currentQuestion].question}</h2>
        <div className="answers">
          {error && <p>{error}</p>}
          {questions[currentQuestion].allAnswers.map((i, index) => (
            checkedAnswers.includes(i) 
            ? <button className={`option selected ${selected && this.showResult(i)}`} 
                    key={index}
                    disabled={selected}> 
              {i} 
            </button> : 
            <button className={`option ${selected && this.showResult(i)}`}
                    key={index}
                    onClick={() => this.checkAnswer(i)}
                    disabled={selected}> 
              {i} 
            </button> ))
          }
        </div>
        <button onClick={this.previousQuestion}
                className="btn"> 
          <img src={prevBtn} width='40px'/>
        </button>
        <button onClick={this.nextQuestion}
                className="btn">
          <img src={nextBtn} width='40px'/>
        </button>
      </>
    );
  };
};

export default Question;