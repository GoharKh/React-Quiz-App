import React from "react";

import Final from "./Final";

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            error: false,
            currentQuestion: 0,
            options: [],
            correct: null,
            score: 0,
            isFinished: false
        }
    }
    
    componentDidMount() {
        const {questions} = this.props
        const {currentQuestion} = this.state
        
        this.setState({options: this.shuffle([questions[currentQuestion].correctAnswer, ...questions[currentQuestion].incorrectAnswer])})
    }

    shuffle = arr => [...arr].sort(() => Math.random() - 0.5)

    showResult = (i) => {
        const {selected, correct, score} = this.state

        if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "select";

    };

    checkAnswer = (i) => {
        const {questions} = this.props
        const {currentQuestion, correct, selected, score} = this.state

        this.setState({
            selected: i, 
            correct: questions[currentQuestion].correctAnswer, 
            error: false
        })
    };

    nextQuestion = () => {
        const {questions} = this.props
        const {selected, currentQuestion, score, correct} = this.state
        if (selected === correct) {
          this.setState({score: score + 1})
        };
        if(selected) {
            if(currentQuestion + 1 !== questions.length ) {
                this.setState({
                    currentQuestion: currentQuestion + 1, 
                    options: this.shuffle([questions[currentQuestion + 1].correctAnswer, ...questions[currentQuestion + 1].incorrectAnswer]),
                    selected: null,
                }) 
            } else {
              this.setState({isFinished: true})
            }
        }else this.setState({error: "Please select an option"})
    };

    previousQuestion = () => {
        const {questions} = this.props
        const {selected, currentQuestion} = this.state

        if(currentQuestion !== 0) {
            this.showResult(selected)
            this.setState({
                currentQuestion: currentQuestion - 1,
                options: this.shuffle([questions[currentQuestion - 1].correctAnswer, ...questions[currentQuestion - 1].incorrectAnswer])})
        }
    };

    reset = () => {
        this.setState({
            currentQuestion: 0,
            selected: null
        });
    };
    
    render() {
        const {questions} = this.props
        const {score, currentQuestion, selected, options, error, isFinished} = this.state
        
        if(isFinished) {
            return <Final score={score} questions={questions.length}/>
        }
        return (
            <div className="question">
            <h3>Question {currentQuestion + 1} :</h3>
      
            <div className="question">
            <h2>{questions[currentQuestion].question}</h2>
            <div className="answers">
              {error && <h5>{error}</h5>}
              {options.map((i, index) => (
                <button
                  className={`random-btn  ${selected && this.showResult(i)}`}
                  key={index}
                  onClick={() => this.checkAnswer(i)}
                  disabled={selected}>
                  {i}
                </button>))}
            </div>
                <div className="btns">
                    <div className="controls">
                        <button 
                            onClick={this.previousQuestion}
                            className="btn">
                        {'<'}
                        </button>
                        <button 
                            onClick={this.nextQuestion}
                            className="btn">
                        {'>'}
                        </button>
                    </div>
                    <button 
                        onClick={this.reset}
                        className="btn reset">
                    RESET
                    </button>
                </div>
            </div>
        </div>
        );
    }
};

export default Question;