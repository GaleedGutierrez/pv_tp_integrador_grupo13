/* eslint-disable unicorn/filename-case */

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

function DropdownMenu({ ...properties }) {
	return (
		<DropdownMenuPrimitive.Root
			data-slot="dropdown-menu"
			{...properties}
		/>
	);
}

function DropdownMenuPortal({ ...properties }) {
	return (
		<DropdownMenuPrimitive.Portal
			data-slot="dropdown-menu-portal"
			{...properties}
		/>
	);
}

function DropdownMenuTrigger({ ...properties }) {
	return (
		<DropdownMenuPrimitive.Trigger
			data-slot="dropdown-menu-trigger"
			{...properties}
		/>
	);
}

function DropdownMenuContent({ className, sideOffset = 4, ...properties }) {
	return (
		<DropdownMenuPrimitive.Portal>
			<DropdownMenuPrimitive.Content
				data-slot="dropdown-menu-content"
				sideOffset={sideOffset}
				className={cn(
					'max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) bg-popover text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 z-50 min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border p-1 shadow-md',
					className,
				)}
				{...properties}
			/>
		</DropdownMenuPrimitive.Portal>
	);
}

function DropdownMenuGroup({ ...properties }) {
	return (
		<DropdownMenuPrimitive.Group
			data-slot="dropdown-menu-group"
			{...properties}
		/>
	);
}

function DropdownMenuItem({
	className,
	inset,
	variant = 'default',
	...properties
}) {
	return (
		<DropdownMenuPrimitive.Item
			data-inset={inset}
			data-slot="dropdown-menu-item"
			data-variant={variant}
			className={cn(
				"outline-hidden focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 [&_svg:not([class*='text-'])]:text-muted-foreground data-[variant=destructive]:*:[svg]:!text-destructive relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm data-[disabled]:pointer-events-none data-[inset]:pl-8 data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...properties}
		/>
	);
}

function DropdownMenuCheckboxItem({
	className,
	children,
	checked,
	...properties
}) {
	return (
		<DropdownMenuPrimitive.CheckboxItem
			checked={checked}
			data-slot="dropdown-menu-checkbox-item"
			className={cn(
				"outline-hidden focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...properties}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<DropdownMenuPrimitive.ItemIndicator>
					<CheckIcon className="size-4" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.CheckboxItem>
	);
}

function DropdownMenuRadioGroup({ ...properties }) {
	return (
		<DropdownMenuPrimitive.RadioGroup
			data-slot="dropdown-menu-radio-group"
			{...properties}
		/>
	);
}

function DropdownMenuRadioItem({ className, children, ...properties }) {
	return (
		<DropdownMenuPrimitive.RadioItem
			data-slot="dropdown-menu-radio-item"
			className={cn(
				"outline-hidden focus:bg-accent focus:text-accent-foreground relative flex cursor-default select-none items-center gap-2 rounded-sm py-1.5 pl-8 pr-2 text-sm data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
				className,
			)}
			{...properties}
		>
			<span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
				<DropdownMenuPrimitive.ItemIndicator>
					<CircleIcon className="size-2 fill-current" />
				</DropdownMenuPrimitive.ItemIndicator>
			</span>
			{children}
		</DropdownMenuPrimitive.RadioItem>
	);
}

function DropdownMenuLabel({ className, inset, ...properties }) {
	return (
		<DropdownMenuPrimitive.Label
			data-inset={inset}
			data-slot="dropdown-menu-label"
			className={cn(
				'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
				className,
			)}
			{...properties}
		/>
	);
}

function DropdownMenuSeparator({ className, ...properties }) {
	return (
		<DropdownMenuPrimitive.Separator
			className={cn('bg-border -mx-1 my-1 h-px', className)}
			data-slot="dropdown-menu-separator"
			{...properties}
		/>
	);
}

function DropdownMenuShortcut({ className, ...properties }) {
	return (
		<span
			data-slot="dropdown-menu-shortcut"
			className={cn(
				'text-muted-foreground ml-auto text-xs tracking-widest',
				className,
			)}
			{...properties}
		/>
	);
}

function DropdownMenuSub({ ...properties }) {
	return (
		<DropdownMenuPrimitive.Sub
			data-slot="dropdown-menu-sub"
			{...properties}
		/>
	);
}

function DropdownMenuSubTrigger({ className, inset, children, ...properties }) {
	return (
		<DropdownMenuPrimitive.SubTrigger
			data-inset={inset}
			data-slot="dropdown-menu-sub-trigger"
			className={cn(
				'outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm data-[inset]:pl-8',
				className,
			)}
			{...properties}
		>
			{children}
			<ChevronRightIcon className="ml-auto size-4" />
		</DropdownMenuPrimitive.SubTrigger>
	);
}

function DropdownMenuSubContent({ className, ...properties }) {
	return (
		<DropdownMenuPrimitive.SubContent
			data-slot="dropdown-menu-sub-content"
			className={cn(
				'origin-(--radix-dropdown-menu-content-transform-origin) bg-popover text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
				className,
			)}
			{...properties}
		/>
	);
}

export {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
};
