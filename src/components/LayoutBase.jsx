import { Header } from './Header';

/**
 * LayoutBase component.
 * This component serves as a base layout for the application, including a header and a main content area.
 * @param {Object} props - The component props.
 * @param {import('react').ReactNode} props.children - The child components to render within the layout.
 * @returns {import('react').JSX.Element} The rendered layout component with a header and main content.
 */
export const LayoutBase = ({ children }) => (
	<div>
		<Header />
		{children}
	</div>
);
