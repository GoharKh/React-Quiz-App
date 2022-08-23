import React from "react";
class Final extends React.PureComponent {
    render() {
        return <div>
            <h1>Your Score is {this.props.score} / {this.props.questions}</h1>
        </div>
    }
}

export default Final