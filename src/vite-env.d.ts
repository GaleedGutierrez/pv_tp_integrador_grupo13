/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
	import type { FunctionComponent, SVGProps } from 'react';

	const ReactComponent: FunctionComponent<
		SVGProps<SVGSVGElement> & { title?: string }
	>;

	export default ReactComponent;
}

declare module '*.svg?react' {
	import type { FunctionComponent, SVGProps } from 'react';

	const ReactComponent: FunctionComponent<
		SVGProps<SVGSVGElement> & {
			title?: string;
			className?: string;
		}
	>;

	export default ReactComponent;
}

declare module '*.svg?url' {
	const content: string;

	export default content;
}
