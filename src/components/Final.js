const Final = ({firstName, onReset}) =>  <div className="results">
        <h2>ππBingo, {firstName}!ππ</h2>
        <h3>πYou have finished the test!π</h3>
        {/* avelacnelu em styler */}
        <button className="button-hand btn-play-again" onClick={onReset}>
            Play again
            <div className='hands'></div>
            </button>  
    </div>


export default Final;