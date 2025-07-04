/* eslint-disable unicorn/filename-case */

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable unicorn/prevent-abbreviations */

import { motion, useAnimation } from 'framer-motion';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

import { cn } from '@/lib/utils';

('use client');

const squareVariants = {
	normal: { transition: { duration: 0.4 } },
	animate: { transition: { duration: 0.6, ease: 'easeInOut' } },
};
const pathVariants = {
	normal: { d: 'm16 12-4-4-4 4', transform: 'translateY(0px)', opacity: 1 },
	animate: {
		d: 'm16 12-4-4-4 4',
		transform: ['translateY(0px)', 'translateY(-3px)', 'translateY(0px)'],
		transition: { duration: 0.4 },
	},
};
const secondPathVariants = {
	normal: { d: 'M12 16V8', opacity: 1 },
	animate: {
		d: ['M12 16V8', 'M12 16V13', 'M12 16V8'],
		transition: { duration: 0.4 },
	},
};
const SquareArrowUpIcon = forwardRef(
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
					<motion.rect
						animate={controls}
						height="18"
						initial="normal"
						rx="2"
						variants={squareVariants}
						width="18"
						x="3"
						y="3"
					/>
					<motion.path
						animate={controls}
						d="m16 12-4-4-4 4"
						initial="normal"
						variants={pathVariants}
					/>
					<motion.path
						animate={controls}
						d="M12 16V8"
						initial="normal"
						variants={secondPathVariants}
					/>
				</svg>
			</div>
		);
	},
);

SquareArrowUpIcon.displayName = 'SquareArrowUpIcon';

export { SquareArrowUpIcon };
