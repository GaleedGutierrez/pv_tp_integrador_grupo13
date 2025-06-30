/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { cn } from '@/lib/utils';

function Card({ className, ...properties }) {
	return (
		<div
			data-slot="card"
			className={cn(
				'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
				className,
			)}
			{...properties}
		/>
	);
}

function CardHeader({ className, ...properties }) {
	return (
		<div
			data-slot="card-header"
			className={cn(
				'@container/card-header has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6 grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6',
				className,
			)}
			{...properties}
		/>
	);
}

function CardTitle({ className, ...properties }) {
	return (
		<div
			className={cn('font-semibold leading-none', className)}
			data-slot="card-title"
			{...properties}
		/>
	);
}

function CardDescription({ className, ...properties }) {
	return (
		<div
			className={cn('text-muted-foreground text-sm', className)}
			data-slot="card-description"
			{...properties}
		/>
	);
}

function CardAction({ className, ...properties }) {
	return (
		<div
			data-slot="card-action"
			className={cn(
				'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
				className,
			)}
			{...properties}
		/>
	);
}

function CardContent({ className, ...properties }) {
	return (
		<div
			className={cn('px-6', className)}
			data-slot="card-content"
			{...properties}
		/>
	);
}

function CardFooter({ className, ...properties }) {
	return (
		<div
			className={cn('[.border-t]:pt-6 flex items-center px-6', className)}
			data-slot="card-footer"
			{...properties}
		/>
	);
}

export {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
};
