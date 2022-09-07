import { useState } from 'react';
import PropTypes from 'prop-types'

import Final from './Final';

import nextBtn from '../images/right.png' 
import prevBtn from '../images/left.png'
import Modal from './popup/Modal';

const Question = ({questions, firstName, lastName, logOut}) => {

  const [selected, setSelected] = useState(null)
  const [error, setError] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correct, setCorrect] = useState(null)
  const [score, setScore] = useState(0)
  const [isFinished, setIsFinished] = useState(false)
  const [checkedAnswers, setCheckedAnswers] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  const showResult = i => {
    if (selected === i && selected !== correct) {
        return "wrong";
    } else if (i === correct) {
        return "right";
    }
  };

  const setAnswer = i => {
    setSelected(i)
    setCorrect(questions[currentQuestion].correctAnswer)
    setError(false)
    setCheckedAnswers([...checkedAnswers, i])
  };

  const onReset = () => {
    setSelected(null)
    setCorrect(null)
    setError(false)
    setCheckedAnswers([])
    setCurrentQuestion(0)
    setScore(0)
    setIsFinished(false)
    setIsOpen(false)

    logOut()
  }
  
  const nextQuestion = () => {
    if (selected === correct) {
      setScore(score => score + 1)
    };
    // if the user already selected an answer, the selected answer will remain the same even when goes back and forward
    if(checkedAnswers[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion => currentQuestion + 1)
      setSelected(checkedAnswers[currentQuestion])
    } else if(selected ||  checkedAnswers[currentQuestion] ) {
        if(currentQuestion + 1 !== questions.length ) {
          setCurrentQuestion(currentQuestion => currentQuestion + 1)
          setSelected(null)
        } else {
            setIsFinished(true)
            setIsOpen(true)
        }
    } else {
      setError('Please select an option for next question')
    };
  };

  const previousQuestion = () => {
    if(selected) {
      this.showResult(selected);
      setCurrentQuestion(currentQuestion => currentQuestion - 1)
      setSelected(true)
      setError('')
    } else {
        setError('Please select an option')
    }
  };
    
    if(isFinished) {
        return (
          <>
          
            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <div className="results">
                <h2>🏆Congratulations!🏆</h2>
                <h3>🥳Dear, {firstName} {lastName}!🥳</h3>
                <h2>🤩Your Score is {score} / {questions.length}🤩</h2>
                {score > 3 ? <h3>🥇Great!!!🥇</h3> : <h3>Never give up!</h3>}
                {/* Maxtanqner kgrenq tekster */}
              </div>
            </Modal>
            <Final  firstName={firstName} lastName={lastName} onReset={onReset}/>
          </>
        )}
    if(!questions) {
      throw new Error('There are no questions right now! Please try again later.')
    }
    return (
      <div>
        <h3>Question №{currentQuestion + 1}</h3>
        <h2>{questions[currentQuestion].question}</h2>
        <div className="answers">
          {error && <p>{error}</p>}
          {questions[currentQuestion].allAnswers.map((i, index) => (
            checkedAnswers.includes(i) 
            ? <button
                className={`option selected ${selected && showResult(i)}`} 
                key={index}
                disabled={selected}
              > 
                {i} 
              </button> 
            : <button 
                className={`option ${selected && showResult(i)}`}
                key={index}
                onClick={() => setAnswer(i)}
                disabled={selected}
              > 
                {i} 
              </button> ))
          }
        </div>
        <button 
          onClick={previousQuestion}
          className="btn"
          disabled={!currentQuestion}
        > 
          <img src={prevBtn} alt='/' width='40px'/>
        </button>
        <button 
          onClick={nextQuestion}
          className="btn"
        >
          <img src={nextBtn} alt='/' width='40px'/>
        </button>
      </ div>
    );
};

export default Question;

Question.propTypes = {
  questions: PropTypes.array,
  firstName: PropTypes.string,
  lastName: PropTypes.string
}