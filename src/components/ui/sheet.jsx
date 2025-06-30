/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Sheet({ ...properties }) {
	return (
		<SheetPrimitive.Root
			data-slot="sheet"
			{...properties}
		/>
	);
}

function SheetTrigger({ ...properties }) {
	return (
		<SheetPrimitive.Trigger
			data-slot="sheet-trigger"
			{...properties}
		/>
	);
}

function SheetClose({ ...properties }) {
	return (
		<SheetPrimitive.Close
			data-slot="sheet-close"
			{...properties}
		/>
	);
}

function SheetPortal({ ...properties }) {
	return (
		<SheetPrimitive.Portal
			data-slot="sheet-portal"
			{...properties}
		/>
	);
}

function SheetOverlay({ className, ...properties }) {
	return (
		<SheetPrimitive.Overlay
			data-slot="sheet-overlay"
			className={cn(
				'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
				className,
			)}
			{...properties}
		/>
	);
}

function SheetContent({ className, children, side = 'right', ...properties }) {
	return (
		<SheetPortal>
			<SheetOverlay />
			<SheetPrimitive.Content
				data-slot="sheet-content"
				className={cn(
					'bg-background data-[state=closed]:animate-out data-[state=open]:animate-in fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
					side === 'right' &&
						'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
					side === 'left' &&
						'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
					side === 'top' &&
						'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
					side === 'bottom' &&
						'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
					className,
				)}
				{...properties}
			>
				{children}
				<SheetPrimitive.Close className="rounded-xs ring-offset-background focus:ring-ring focus:outline-hidden data-[state=open]:bg-secondary absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
					<XIcon className="size-4" />
					<span className="sr-only">Close</span>
				</SheetPrimitive.Close>
			</SheetPrimitive.Content>
		</SheetPortal>
	);
}

function SheetHeader({ className, ...properties }) {
	return (
		<div
			className={cn('flex flex-col gap-1.5 p-4', className)}
			data-slot="sheet-header"
			{...properties}
		/>
	);
}

function SheetFooter({ className, ...properties }) {
	return (
		<div
			className={cn('mt-auto flex flex-col gap-2 p-4', className)}
			data-slot="sheet-footer"
			{...properties}
		/>
	);
}

function SheetTitle({ className, ...properties }) {
	return (
		<SheetPrimitive.Title
			className={cn('text-foreground font-semibold', className)}
			data-slot="sheet-title"
			{...properties}
		/>
	);
}

function SheetDescription({ className, ...properties }) {
	return (
		<SheetPrimitive.Description
			className={cn('text-muted-foreground text-sm', className)}
			data-slot="sheet-description"
			{...properties}
		/>
	);
}

export {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
};
