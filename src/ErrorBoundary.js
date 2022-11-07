import React, { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: true })
    }

    render() {
        if (this.setState.hasError) {
            return <h1>Opps That is not Good</h1>
        }
        return this.props.childern

    }

}
export default ErrorBoundary;