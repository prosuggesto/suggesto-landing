import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error, errorInfo });
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', color: 'red', backgroundColor: 'white', zIndex: 9999, position: 'relative', textAlign: 'left' }}>
                    <h1>Something went wrong.</h1>
                    <details open style={{ whiteSpace: 'pre-wrap', border: '1px solid red', padding: '10px', marginTop: '10px' }}>
                        <summary>Click for error details</summary>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        <br />
                        Component Stack:
                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
