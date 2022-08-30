import React, { Component } from 'react';
import {createPortal} from 'react-dom';

class Modal extends Component {
    render() {
        const {open, children, onClose} = this.props
        if (open) return createPortal(
            <>
              <div className='overlay' />
              <div className='modal'>
                <button className='close-btn' onClick={onClose}>x</button>
                {children}
              </div>
            </>,
            document.getElementById('portal')
          )
    }
}

export default Modal