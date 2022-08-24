import { PureComponent } from 'react';

class Final extends PureComponent {
    render() {
        return <div className="results">
            <h1>Your Score is {this.props.score} / {this.props.questions}</h1>
        </div>
    }
}

export default Final;