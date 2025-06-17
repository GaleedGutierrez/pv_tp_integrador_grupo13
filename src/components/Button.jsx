/**
 * Simple Button component that accepts all standard button attributes
 * @param props - Button props including children
 * @returns The Button component
 */
export const Button = ({ children, isPrimary, isSecondary, ...properties }) => {
	const CLASS_NAME = properties.className ?? '';
	const BASE_STYLES =
		'py-4 w-full rounded-full font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

	if (isPrimary) {
		properties.className = `${CLASS_NAME} ${BASE_STYLES} text-white bg-gray-950 hover:bg-gray-800 active:bg-gray-700  focus:ring-gray-500 `;
	}

	if (isSecondary) {
		properties.className = `${CLASS_NAME} ${BASE_STYLES} border border-gray-300 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-500 `;
	}

	return <button {...properties}>{children}</button>;
};
