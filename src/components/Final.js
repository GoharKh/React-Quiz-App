import { PureComponent } from 'react';

class Final extends PureComponent {
    render() {
        const {firstName, lastName} = this.props
        return <div className="results">
            <h3>Dear, {firstName} {lastName}</h3>
            <button>play another</button>  
        </div>
    }
}

export default Final;