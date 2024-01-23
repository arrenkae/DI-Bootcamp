import React from 'react';

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            error: ''
        }
    }

    componentDidCatch = (error, errorInfo) => {
        console.log('error caught!');
        this.setState({
            hasError: true,
            error: error
        })
    }

    render() {
        if(this.state.error) {
            return (
                <h1>An error has occured.</h1>
            )
        }
        return this.props.children;
    }
}

export default ErrorBoundary;