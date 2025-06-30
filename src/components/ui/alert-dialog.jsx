/* eslint-disable unicorn/filename-case */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

function AlertDialog({ ...properties }) {
	return (
		<AlertDialogPrimitive.Root
			data-slot="alert-dialog"
			{...properties}
		/>
	);
}

function AlertDialogTrigger({ ...properties }) {
	return (
		<AlertDialogPrimitive.Trigger
			data-slot="alert-dialog-trigger"
			{...properties}
		/>
	);
}

function AlertDialogPortal({ ...properties }) {
	return (
		<AlertDialogPrimitive.Portal
			data-slot="alert-dialog-portal"
			{...properties}
		/>
	);
}

function AlertDialogOverlay({ className, ...properties }) {
	return (
		<AlertDialogPrimitive.Overlay
			data-slot="alert-dialog-overlay"
			className={cn(
				'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
				className,
			)}
			{...properties}
		/>
	);
}

function AlertDialogContent({ className, ...properties }) {
	return (
		<AlertDialogPortal>
			<AlertDialogOverlay />
			<AlertDialogPrimitive.Content
				data-slot="alert-dialog-content"
				className={cn(
					'bg-background data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 fixed left-[50%] top-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
					className,
				)}
				{...properties}
			/>
		</AlertDialogPortal>
	);
}

function AlertDialogHeader({ className, ...properties }) {
	return (
		<div
			data-slot="alert-dialog-header"
			className={cn(
				'flex flex-col gap-2 text-center sm:text-left',
				className,
			)}
			{...properties}
		/>
	);
}

function AlertDialogFooter({ className, ...properties }) {
	return (
		<div
			data-slot="alert-dialog-footer"
			className={cn(
				'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
				className,
			)}
			{...properties}
		/>
	);
}

function AlertDialogTitle({ className, ...properties }) {
	return (
		<AlertDialogPrimitive.Title
			className={cn('text-lg font-semibold', className)}
			data-slot="alert-dialog-title"
			{...properties}
		/>
	);
}

function AlertDialogDescription({ className, ...properties }) {
	return (
		<AlertDialogPrimitive.Description
			className={cn('text-muted-foreground text-sm', className)}
			data-slot="alert-dialog-description"
			{...properties}
		/>
	);
}

function AlertDialogAction({ className, ...properties }) {
	return (
		<AlertDialogPrimitive.Action
			className={cn(buttonVariants(), className)}
			{...properties}
		/>
	);
}

function AlertDialogCancel({ className, ...properties }) {
	return (
		<AlertDialogPrimitive.Cancel
			className={cn(buttonVariants({ variant: 'outline' }), className)}
			{...properties}
		/>
	);
}

export {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	AlertDialogPortal,
	AlertDialogTitle,
	AlertDialogTrigger,
};
