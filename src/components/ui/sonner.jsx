/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

const Toaster = ({ ...properties }) => {
	const { theme = 'system' } = useTheme();

	return (
		<Sonner
			className="toaster group"
			theme={theme}
			style={{
				'--normal-bg': 'var(--popover)',
				'--normal-text': 'var(--popover-foreground)',
				'--normal-border': 'var(--border)',
			}}
			{...properties}
		/>
	);
};

export { Toaster };
