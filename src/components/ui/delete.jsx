// @ts-nocheck
/* eslint-disable check-file/folder-naming-convention */
/* eslint-disable unicorn/prevent-abbreviations */
import { motion, useAnimation } from 'motion/react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

import { cn } from '@/lib/utils';

('use client');

const lidVariants = {
	normal: { y: 0 },
	animate: { y: -1.1 },
};
const springTransition = {
	type: 'spring',
	stiffness: 500,
	damping: 30,
};
const DeleteIcon = forwardRef(
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
					<motion.g
						animate={controls}
						transition={springTransition}
						variants={lidVariants}
					>
						<path d="M3 6h18" />
						<path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
					</motion.g>
					<motion.path
						animate={controls}
						d="M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8"
						transition={springTransition}
						variants={{
							normal: {
								d: 'M19 8v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V8',
							},
							animate: {
								d: 'M19 9v12c0 1-1 2-2 2H7c-1 0-2-1-2-2V9',
							},
						}}
					/>
					<motion.line
						animate={controls}
						transition={springTransition}
						x1="10"
						x2="10"
						y1="11"
						y2="17"
						variants={{
							normal: { y1: 11, y2: 17 },
							animate: { y1: 11.5, y2: 17.5 },
						}}
					/>
					<motion.line
						animate={controls}
						transition={springTransition}
						x1="14"
						x2="14"
						y1="11"
						y2="17"
						variants={{
							normal: { y1: 11, y2: 17 },
							animate: { y1: 11.5, y2: 17.5 },
						}}
					/>
				</svg>
			</div>
		);
	},
);

DeleteIcon.displayName = 'DeleteIcon';

export { DeleteIcon };
