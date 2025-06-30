/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function Dialog({ ...properties }) {
	return (
		<DialogPrimitive.Root
			data-slot="dialog"
			{...properties}
		/>
	);
}

function DialogTrigger({ ...properties }) {
	return (
		<DialogPrimitive.Trigger
			data-slot="dialog-trigger"
			{...properties}
		/>
	);
}

function DialogPortal({ ...properties }) {
	return (
		<DialogPrimitive.Portal
			data-slot="dialog-portal"
			{...properties}
		/>
	);
}

function DialogClose({ ...properties }) {
	return (
		<DialogPrimitive.Close
			data-slot="dialog-close"
			{...properties}
		/>
	);
}

function DialogOverlay({ className, ...properties }) {
	return (
		<DialogPrimitive.Overlay
			data-slot="dialog-overlay"
			className={cn(
				'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
				className,
			)}
			{...properties}
		/>
	);
}

function DialogContent({
	className,
	children,
	showCloseButton = true,
	...properties
}) {
	return (
		<DialogPortal data-slot="dialog-portal">
			<DialogOverlay />
			<DialogPrimitive.Content
				data-slot="dialog-content"
				className={cn(
					'bg-background data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
					className,
				)}
				{...properties}
			>
				{children}
				{showCloseButton && (
					<DialogPrimitive.Close
						className="rounded-xs ring-offset-background focus:ring-ring focus:outline-hidden data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0"
						data-slot="dialog-close"
					>
						<XIcon />
						<span className="sr-only">Close</span>
					</DialogPrimitive.Close>
				)}
			</DialogPrimitive.Content>
		</DialogPortal>
	);
}

function DialogHeader({ className, ...properties }) {
	return (
		<div
			data-slot="dialog-header"
			className={cn(
				'flex flex-col gap-2 text-center sm:text-left',
				className,
			)}
			{...properties}
		/>
	);
}

function DialogFooter({ className, ...properties }) {
	return (
		<div
			data-slot="dialog-footer"
			className={cn(
				'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
				className,
			)}
			{...properties}
		/>
	);
}

function DialogTitle({ className, ...properties }) {
	return (
		<DialogPrimitive.Title
			className={cn('text-lg font-semibold leading-none', className)}
			data-slot="dialog-title"
			{...properties}
		/>
	);
}

function DialogDescription({ className, ...properties }) {
	return (
		<DialogPrimitive.Description
			className={cn('text-muted-foreground text-sm', className)}
			data-slot="dialog-description"
			{...properties}
		/>
	);
}

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTitle,
	DialogTrigger,
};
