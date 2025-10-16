import { Component, type ErrorInfo, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-screen text-gray-700">
            <h1 className="mb-2 text-2xl font-bold">Something went wrong.</h1>
            <p className="mb-4 text-sm text-gray-500">
              {this.state.error?.message}
            </p>
            <button
              onClick={this.handleReset}
              className="px-4 py-2 text-white bg-gray-800 rounded hover:bg-gray-700"
            >
              Reload
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}