/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable unicorn/prevent-abbreviations */

import { motion, useAnimation } from 'motion/react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

import { cn } from '@/lib/utils';

('use client');

const pathVariant = {
	normal: { pathLength: 1, opacity: 1, pathOffset: 0 },
	animate: {
		pathLength: [0, 1],
		opacity: [0, 1],
		pathOffset: [1, 0],
	},
};
const circleVariant = {
	normal: {
		pathLength: 1,
		pathOffset: 0,
		scale: 1,
	},
	animate: {
		pathLength: [0, 1],
		pathOffset: [1, 0],
		scale: [0.5, 1],
	},
};
const UserIcon = forwardRef(
	(
		{ onMouseEnter, onMouseLeave, className, size = 28, ...properties },
		reference,
	) => {
		const controls = useAnimation();
		const isControlledReference = useRef(false);

		useImperativeHandle(reference, () => {
			isControlledReference.current = true;

			return {
				startAnimation: () => controls.start('animate'),
				stopAnimation: () => controls.start('normal'),
			};
		});

		const handleMouseEnter = useCallback(
			(e) => {
				if (isControlledReference.current) {
					onMouseEnter?.(e);
				} else {
					controls.start('animate');
				}
			},
			[controls, onMouseEnter],
		);
		const handleMouseLeave = useCallback(
			(e) => {
				if (isControlledReference.current) {
					onMouseLeave?.(e);
				} else {
					controls.start('normal');
				}
			},
			[controls, onMouseLeave],
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
					<motion.circle
						animate={controls}
						cx="12"
						cy="8"
						r="5"
						variants={circleVariant}
					/>

					<motion.path
						animate={controls}
						d="M20 21a8 8 0 0 0-16 0"
						variants={pathVariant}
						transition={{
							delay: 0.2,
							duration: 0.4,
						}}
					/>
				</svg>
			</div>
		);
	},
);

UserIcon.displayName = 'UserIcon';

export { UserIcon };
