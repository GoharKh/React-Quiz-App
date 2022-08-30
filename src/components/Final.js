import { PureComponent } from 'react';

class Final extends PureComponent {
    render() {
        const {firstName, lastName, onReset} = this.props
        return <div className="results">
            <h3>Dear, {firstName} {lastName}</h3>
            <button onClick={onReset}>play another</button>  
        </div>
    }
}

export default Final;