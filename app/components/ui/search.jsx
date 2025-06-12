/* eslint-disable unicorn/prevent-abbreviations */
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

/**
 * MenuIcon component with animated hamburger menu
 * @param {MenuIconProps & React.HTMLAttributes<HTMLDivElement>} props - Component props
 * @param {React.Ref<IconAnimation>} reference - Forward ref for imperative handle
 * @returns {React.ReactElement} The MenuIcon component
 * @type {React.ForwardRefExoticComponent<MenuIconProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<IconAnimation>>}
 */
const SearchIcon = forwardRef(
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
			 * Handles mouse leave event
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
				<motion.svg
					animate={controls}
					fill="none"
					height={size}
					stroke="currentColor"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					width={size}
					xmlns="http://www.w3.org/2000/svg"
					transition={{
						duration: 1,
						bounce: 0.3,
					}}
					variants={{
						normal: { x: 0, y: 0 },
						animate: {
							x: [0, 0, -3, 0],
							y: [0, -4, 0, 0],
						},
					}}
				>
					<circle
						cx="11"
						cy="11"
						r="8"
					/>
					<path d="m21 21-4.3-4.3" />
				</motion.svg>
			</div>
		);
	},
);

SearchIcon.displayName = 'SearchIcon';

export { SearchIcon };
