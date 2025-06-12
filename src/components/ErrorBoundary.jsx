import { Component } from 'react';

/**
 * @typedef {Object} ErrorBoundaryState
 * @property {boolean} hasError - Indicates if an error has occurred
 */

/**
 * @typedef {Object} ErrorBoundaryProperties
 * @property {React.ReactNode} children - Child components to render
 * @property {React.ReactNode} [fallback] - Optional fallback UI to show when error occurs
 */

/**
 * ErrorBoundary component that catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI instead of the component tree that crashed.
 *
 * @class ErrorBoundary
 * @extends {Component<ErrorBoundaryProperties, ErrorBoundaryState>}
 */
class ErrorBoundary extends Component {
	/**
	 * Static method called when an error is thrown during rendering.
	 * Updates the state to trigger the error UI on the next render.
	 *
	 * @static
	 * @param {Error} error - The error that was thrown
	 * @returns {ErrorBoundaryState} New state object
	 */
	static getDerivedStateFromError(error) {
		console.info(`Derived  Error: ${error}`);

		return { hasError: true };
	}

	/**
	 * Creates an instance of ErrorBoundary.
	 * @param {ErrorBoundaryProperties} properties - The component props
	 */
	constructor(properties) {
		super(properties);

		/** @type {ErrorBoundaryState} */
		this.state = { hasError: false };
	}

	/**
	 * Lifecycle method called when an error has been thrown by a descendant component.
	 * Used for logging error information.
	 *
	 * @param {Error} error - The error that was thrown
	 * @param {React.ErrorInfo} errorInfo - Object containing information about which component threw the error
	 * @returns {void}
	 */
	componentDidCatch(error, errorInfo) {
		console.info(`Error: ${error}`);
		console.info(`Error info: ${JSON.stringify(errorInfo)}`);
	}

	/**
	 * Renders either the fallback UI or the children components.
	 *
	 * @returns {React.ReactNode} The component to render
	 */
	render() {
		const { hasError } = this.state;
		const { children, fallback } = this.props;

		if (hasError) {
			return (
				fallback ?? (
					<h1
						style={{
							textAlign: 'center',
							marginTop: '20px',
							fontSize: '3rem',
						}}
					>
						Ops! Hubo un error ;)
					</h1>
				)
			);
		}

		return children;
	}
}

export default ErrorBoundary;
