import { PureComponent } from 'react';

class Final extends PureComponent {
    render() {
        const {firstName, lastName} = this.props
        return <div className="results">
            <h3>Dear, {firstName} {lastName}</h3>
            <h2>Your Score is {this.props.score} / {this.props.questions.length}</h2>
            <button>play another</button>  
        </div>
    }
}

export default Final;