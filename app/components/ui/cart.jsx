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

const cartVariants = {
	normal: { scale: 1 },
	animate: {
		scale: 1.1,
		y: [0, -5, 0],
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
			y: { repeat: 1, delay: 0.1, duration: 0.4 },
		},
	},
};

/**
 * MenuIcon component with animated hamburger menu
 * @param {MenuIconProps & React.HTMLAttributes<HTMLDivElement>} props - Component props
 * @param {React.Ref<IconAnimation>} reference - Forward ref for imperative handle
 * @returns {React.ReactElement} The MenuIcon component
 * @type {React.ForwardRefExoticComponent<MenuIconProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<IconAnimation>>}
 */
const CartIcon = forwardRef(
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
			 * Handles mouse enter event
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
					transition={{ duration: 0.2 }}
					variants={cartVariants}
					viewBox="0 0 24 24"
					width={size}
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M6.29977 5H21L19 12H7.37671M20 16H8L6 3H3M9 20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20C7 19.4477 7.44772 19 8 19C8.55228 19 9 19.4477 9 20ZM20 20C20 20.5523 19.5523 21 19 21C18.4477 21 18 20.5523 18 20C18 19.4477 18.4477 19 19 19C19.5523 19 20 19.4477 20 20Z" />
				</motion.svg>
			</div>
		);
	},
);

CartIcon.displayName = 'CartIcon';

export { CartIcon };
