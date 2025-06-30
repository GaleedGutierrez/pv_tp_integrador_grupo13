/* eslint-disable no-nested-ternary */

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable unicorn/prevent-abbreviations */

import { motion, useAnimation } from 'motion/react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

import { cn } from '@/lib/utils';

('use client');

const lineVariants = {
	normal: {
		rotate: 0,
		y: 0,
		opacity: 1,
	},
	animate: (custom) => ({
		rotate: custom === 1 ? 45 : custom === 3 ? -45 : 0,
		y: custom === 1 ? 6 : custom === 3 ? -6 : 0,
		opacity: custom === 2 ? 0 : 1,
		transition: {
			type: 'spring',
			stiffness: 260,
			damping: 20,
		},
	}),
};
const MenuIcon = forwardRef(
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
					<motion.line
						animate={controls}
						custom={1}
						initial="normal"
						variants={lineVariants}
						x1="4"
						x2="20"
						y1="6"
						y2="6"
					/>
					<motion.line
						animate={controls}
						custom={2}
						initial="normal"
						variants={lineVariants}
						x1="4"
						x2="20"
						y1="12"
						y2="12"
					/>
					<motion.line
						animate={controls}
						custom={3}
						initial="normal"
						variants={lineVariants}
						x1="4"
						x2="20"
						y1="18"
						y2="18"
					/>
				</svg>
			</div>
		);
	},
);

MenuIcon.displayName = 'MenuIcon';

export { MenuIcon };
