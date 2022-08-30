import React from 'react'
import Modal from './Modal'
const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1,
}
class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }
  render() {
    return <>
          <div style={BUTTON_WRAPPER_STYLES}>
            <button onClick={() => this.setState({isOpen: true})}>Open Modal</button>
            <Modal open={this.state.isOpen} onClose={() => this.setState({isOpen: false})}></Modal>
          </div>
       </>
  }
}
export default Popup;