import React from "react";
class Answers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            // class: "yellow"
        }
    }
    checkAnswer = (answer) =>{
        if(answer.isTrue) {
            console.log(true)
            if(this.state.count >= this.props.questions.length) {
                this.setState({count: this.props.questions.length})

            }
            this.setState({count: this.state.count + 1})     
            // this.setState({class: "true"})

        } else {
            // this.setState({class: "false"})
            console.log(false)
        }
        
    }
    color = () => {
        if(this.state.class=== "true") return "true"
        else if(this.state.class=== "false") return "false"
    }
    render() {
        return (
            <article className="button-container answers">
                {this.props.answer.map(answerOption => <button 
                        key={Math.random().toString()} 
                        onClick={() => {
                            this.checkAnswer(answerOption)
                            this.props.nextQuestion()

                        }}
                        className='random-btn'
                        >{answerOption.answer}</button>)}     
                <div>{this.state.count} / {this.props.questions.length}</div>      
            </article>
        )
    }
}

export default Answers