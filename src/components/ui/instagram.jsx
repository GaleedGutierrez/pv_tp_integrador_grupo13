/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable unicorn/prevent-abbreviations */
'use client';

import { motion, useAnimation } from 'motion/react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

import { cn } from '@/lib/utils';

('use client');

const rectVariants = {
	normal: {
		opacity: 1,
		pathLength: 1,
		pathOffset: 0,
		transition: {
			duration: 0.4,
			opacity: { duration: 0.1 },
		},
	},
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1],
		pathOffset: [1, 0],
		transition: {
			duration: 0.6,
			ease: 'linear',
			opacity: { duration: 0.1 },
		},
	},
};
const pathVariants = {
	normal: {
		opacity: 1,
		pathLength: 1,
		pathOffset: 0,
		transition: {
			duration: 0.4,
			opacity: { duration: 0.1 },
		},
	},
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1],
		pathOffset: [1, 0],
		transition: {
			duration: 0.6,
			ease: 'linear',
			opacity: { duration: 0.1 },
		},
	},
};
const lineVariants = {
	normal: {
		opacity: 1,
		pathLength: 1,
		pathOffset: 0,
		transition: {
			duration: 0.4,
			opacity: { duration: 0.1 },
		},
	},
	animate: {
		opacity: [0, 1],
		pathLength: [0, 1],
		pathOffset: [1, 0],
		transition: {
			duration: 0.6,
			ease: 'linear',
			opacity: { duration: 0.1 },
		},
	},
};
const InstagramIcon = forwardRef(
	(
		{ onMouseEnter, onMouseLeave, className, size = 28, ...properties },
		reference,
	) => {
		const rectControls = useAnimation();
		const pathControls = useAnimation();
		const lineControls = useAnimation();
		const isControlledReference = useRef(false);

		useImperativeHandle(reference, () => {
			isControlledReference.current = true;

			return {
				startAnimation: () => {
					rectControls.start('animate');
					pathControls.start('animate');
					lineControls.start('animate');
				},
				stopAnimation: () => {
					rectControls.start('normal');
					pathControls.start('normal');
					lineControls.start('normal');
				},
			};
		});

		const handleMouseEnter = useCallback(
			(e) => {
				if (isControlledReference.current) {
					onMouseEnter?.(e);
				} else {
					rectControls.start('animate');
					pathControls.start('animate');
					lineControls.start('animate');
				}
			},
			[lineControls, onMouseEnter, pathControls, rectControls],
		);
		const handleMouseLeave = useCallback(
			(e) => {
				if (isControlledReference.current) {
					onMouseLeave?.(e);
				} else {
					rectControls.start('normal');
					pathControls.start('normal');
					lineControls.start('normal');
				}
			},
			[rectControls, pathControls, lineControls, onMouseLeave],
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
					<motion.rect
						animate={rectControls}
						height="20"
						initial="normal"
						rx="5"
						ry="5"
						variants={rectVariants}
						width="20"
						x="2"
						y="2"
					/>
					<motion.path
						animate={pathControls}
						d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
						initial="normal"
						variants={pathVariants}
					/>
					<motion.line
						animate={lineControls}
						initial="normal"
						variants={lineVariants}
						x1="17.5"
						x2="17.51"
						y1="6.5"
						y2="6.5"
					/>
				</svg>
			</div>
		);
	},
);

InstagramIcon.displayName = 'InstagramIcon';

export { InstagramIcon };
