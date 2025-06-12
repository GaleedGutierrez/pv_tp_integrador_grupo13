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

/**
 * MenuIcon component with animated hamburger menu
 * @param {MenuIconProps & React.HTMLAttributes<HTMLDivElement>} props - Component props
 * @param {React.Ref<IconAnimation>} reference - Forward ref for imperative handle
 * @returns {React.ReactElement} The MenuIcon component
 * @type {React.ForwardRefExoticComponent<MenuIconProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<IconAnimation>>}
 */
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
