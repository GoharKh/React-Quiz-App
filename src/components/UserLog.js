import { PureComponent, createRef } from 'react';

import Quiz from './Quiz'

class UserLog extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
      error: ''
    }
    this.firstName = createRef()
    this.lastName = createRef()
  }
  componentDidMount() {
    this.firstName.current.focus()
  }
  onKeyUp = (target, e) => {
    if(e.keyCode === 13) {
      if(target === 'firstName') {
        if(this.firstName.current.value.length > 2) {
          this.setState({error: ''})
          this.lastName.current.focus();
        } else {
            this.setState({error: 'Please fill the fields properly'})
          }
      } 
      else if(target === 'lastName') {
        this.setState({error: ''})
        if(this.lastName.current.value.length > 3) {
          this.handleSubmit()
        } else {
          this.setState({error: 'Please fill the fields properly'})
        }

      }
    }
  }
  handleSubmit = () => {

    if(this.firstName.current.value.length && this.lastName.current.value.length ) {
      this.setState({isLogged: true})
    } else {
      this.setState({error: 'Please fill the fields properly'})
    }
  }
  render() {
    const {error} = this.state
    if(this.state.isLogged) {
      return (
        <Quiz  firstName={this.firstName.current.value} lastName={this.lastName.current.value}/>
      )
    }
    return(
      <>
      <form>
        {error && <p>{error}</p>}
        <input 
          type='text' 
          placeholder='Type your name...'
          ref={this.firstName}
          onKeyUp={this.onKeyUp.bind(this, 'firstName')}
        /> 
        <input 
          type='text' 
          placeholder='Type your surname...'
          ref={this.lastName}
          onKeyUp={this.onKeyUp.bind(this, 'lastName')}
        />
      </form>
      <button 
        onClick={this.handleSubmit}
        className='btn-submit'  
      >Submit</button>
      </>
    )
  }
}

export default UserLog