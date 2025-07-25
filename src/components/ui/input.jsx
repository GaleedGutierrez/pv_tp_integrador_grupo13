/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { cn } from '@/lib/utils';

function Input({ className, type, ...properties }) {
	return (
		<input
			data-slot="input"
			type={type}
			className={cn(
				'border-input shadow-xs selection:bg-primary selection:text-primary-foreground file:text-foreground placeholder:text-muted-foreground dark:bg-input/30 flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
				'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
				'aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40',
				className,
			)}
			{...properties}
		/>
	);
}

export { Input };
