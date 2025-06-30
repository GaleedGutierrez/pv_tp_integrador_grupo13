/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-expressions */
import * as LabelPrimitive from '@radix-ui/react-label';

import { cn } from '@/lib/utils';

('use client');

function Label({ className, ...properties }) {
	return (
		<LabelPrimitive.Root
			data-slot="label"
			className={cn(
				'flex select-none items-center gap-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50',
				className,
			)}
			{...properties}
		/>
	);
}

export { Label };
