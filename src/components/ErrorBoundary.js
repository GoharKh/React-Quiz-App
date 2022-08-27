import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: '',
    errorInfo: ''
  }

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
  render() {
    if(this.state.hasError) {
      return (
        <div> {this.state.error.toString()} </div>
      );
    }
    return this.props.children
  }
}
