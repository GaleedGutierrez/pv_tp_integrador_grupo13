/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/* eslint-disable unicorn/prevent-abbreviations */
'use client';

import { motion, useAnimation } from 'motion/react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

import { cn } from '@/lib/utils';

const bodyVariants = {
	normal: {
		opacity: 1,
		pathLength: 1,
		scale: 1,
		transition: {
			duration: 0.3,
		},
	},
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1],
		scale: [0.9, 1],
		transition: {
			duration: 0.4,
		},
	},
};
const tailVariants = {
	normal: {
		pathLength: 1,
		rotate: 0,
		transition: {
			duration: 0.3,
		},
	},
	draw: {
		pathLength: [0, 1],
		rotate: 0,
		transition: {
			duration: 0.5,
		},
	},
	wag: {
		pathLength: 1,
		rotate: [0, -15, 15, -10, 10, -5, 5],
		transition: {
			duration: 2.5,
			ease: 'easeInOut',
			repeat: Infinity,
		},
	},
};
const GithubIcon = forwardRef(
	(
		{ onMouseEnter, onMouseLeave, className, size = 28, ...properties },
		reference,
	) => {
		const bodyControls = useAnimation();
		const tailControls = useAnimation();
		const isControlledReference = useRef(false);

		useImperativeHandle(reference, () => {
			isControlledReference.current = true;

			return {
				startAnimation: async () => {
					bodyControls.start('animate');
					await tailControls.start('draw');
					tailControls.start('wag');
				},
				stopAnimation: () => {
					bodyControls.start('normal');
					tailControls.start('normal');
				},
			};
		});

		const handleMouseEnter = useCallback(
			async (e) => {
				if (isControlledReference.current) {
					onMouseEnter?.(e);
				} else {
					bodyControls.start('animate');
					await tailControls.start('draw');
					tailControls.start('wag');
				}
			},
			[bodyControls, onMouseEnter, tailControls],
		);
		const handleMouseLeave = useCallback(
			(e) => {
				if (isControlledReference.current) {
					onMouseLeave?.(e);
				} else {
					bodyControls.start('normal');
					tailControls.start('normal');
				}
			},
			[bodyControls, tailControls, onMouseLeave],
		);

		return (
			<div
				className={cn(className)}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				{...properties}
			>
				<svg
					fill="none"
					height={size}
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					width={size}
					xmlns="http://www.w3.org/2000/svg"
				>
					<motion.path
						animate={bodyControls}
						d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
						initial="normal"
						variants={bodyVariants}
					/>
					<motion.path
						animate={tailControls}
						d="M9 18c-4.51 2-5-2-7-2"
						initial="normal"
						variants={tailVariants}
					/>
				</svg>
			</div>
		);
	},
);

GithubIcon.displayName = 'GithubIcon';

export { GithubIcon };
