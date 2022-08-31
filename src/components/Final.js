import { PureComponent } from 'react';

class Final extends PureComponent {
    render() {
        const {firstName, onReset} = this.props
        return <div className="results">
            <h2>🎉🎊Bingo, {firstName}!🎊🎉</h2>
            <h3>😎You have finished the test!😎</h3>
            {/* avelacnelu em styler */}
            <button className="button-hand btn-play-again" onClick={onReset}>
                Play again
                <div className='hands'></div>
                </button>  
        </div>
    }
}

export default Final;