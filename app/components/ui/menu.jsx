/* eslint-disable unicorn/prevent-abbreviations */
/* eslint-disable no-nested-ternary */
import { cn } from '@app/lib/utils';
import { motion, useAnimation } from 'motion/react';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';

('use client');

/**
 * @typedef {Object} MenuIconProps
 * @property {string} [className] - CSS class name
 * @property {number} [size] - Size of the icon
 * @property {React.CSSProperties} [style] - Inline styles
 * @property {React.MouseEventHandler<HTMLDivElement>} [onMouseEnter] - Mouse enter handler
 * @property {React.MouseEventHandler<HTMLDivElement>} [onMouseLeave] - Mouse leave handler
 */

/**
 * @typedef {Object} IconAnimation
 * @property {() => void} startAnimation - Start the animation
 * @property {() => void} stopAnimation - Stop the animation
 */

const lineVariants = {
	normal: {
		rotate: 0,
		y: 0,
		opacity: 1,
	},
	// @ts-ignore
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

/**
 * MenuIcon component with animated hamburger menu
 * @param {MenuIconProps & React.HTMLAttributes<HTMLDivElement>} props - Component props
 * @param {React.Ref<IconAnimation>} reference - Forward ref for imperative handle
 * @returns {React.ReactElement} The MenuIcon component
 * @type {React.ForwardRefExoticComponent<MenuIconProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<IconAnimation>>}
 */
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
			/**
			 * Handles mouse enter event
			 * @param {React.MouseEvent<HTMLDivElement>} e - Mouse event
			 */
			(e) => {
				if (!isControlledReference.current) {
					controls.start('animate');
				} else {
					onMouseEnter?.(e);
				}
			},
			[controls, onMouseEnter],
		);

		const handleMouseLeave = useCallback(
			/**
			 * Handles mouse leave event
			 * @param {React.MouseEvent<HTMLDivElement>} e - Mouse event
			 */
			(e) => {
				if (!isControlledReference.current) {
					controls.start('normal');
				} else {
					onMouseLeave?.(e);
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
					className="h-full w-full"
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
