/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { Component } from 'react';

/**
 * This componente captures errors in the child component tree
 * and shows an alternative UI when an error occurs.
 */
export class ErrorBoundary extends Component {
	/**
	 * Static method that updates the state when an error occurs
	 */
	static getDerivedStateFromError(error) {
		// We log the error for debugging
		console.error('[ErrorBoundary] Error detectado:', error);

		return { hasError: true };
	}

	constructor(properties) {
		super(properties);
		this.state = { hasError: false };
	}

	/**
	 * Method that runs when an error is caught
	 */
	componentDidCatch(error, errorInfo) {
		const { onError } = this.props;

		// You can also log the error to an error reporting service
		console.error('[ErrorBoundary] Error:', {
			error,
			componentStack: errorInfo.componentStack,
		});
		this.setState({ hasError: true });

		// If there is a custom error handler, we run it
		if (onError) {
			onError(error, errorInfo);
		}
	}

	/**
	 * Reset the error state and show the normal content again
	 */
	handleResetErrorBoundary() {
		this.setState({ hasError: false });
	}

	/**
	 * Default UI when an error occurs
	 */
	defaultErrorUi() {
		return (
			<div className="error-boundary-container">
				<h1>¡Ups! Algo salió mal</h1>
				<button
					className="error-boundary-button"
					onClick={this.handleResetErrorBoundary.bind(this)}
				>
					Volver a intentar
				</button>
			</div>
		);
	}

	render() {
		const { hasError } = this.state;
		const { children, fallback } = this.props;

		if (!hasError) {
			return children;
		}

		if (fallback) {
			return fallback;
		}

		return this.defaultErrorUi();
	}
}
