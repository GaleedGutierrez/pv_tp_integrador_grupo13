/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
