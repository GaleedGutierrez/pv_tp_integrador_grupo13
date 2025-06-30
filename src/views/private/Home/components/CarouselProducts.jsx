/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import { useAppSelector } from '@hooks/useAppSelector';
import { ProductCardSkeleton } from '@sections/products/components/ProductCardSkeleton';
import { ProductsList } from '@sections/products/components/ProductsList';
import { getRandomIntInclusive } from '@utils/getRandomIntInclusive';
import { useCallback, useEffect, useRef, useState } from 'react';

/** @returns If there are not products return undefined */
export const CarouselProducts = ({ products, title, classNameContainer }) => {
	const { loading: IS_LOADING } = useAppSelector((state) => state.products);
	const [shouldCenterCarousel, setShouldCenterCarousel] = useState(false);
	const OVERFLOW_CONTAINER_ID = useRef(
		`${title.replaceAll(' ', '_')}_${getRandomIntInclusive(0, 1000)}_OVERFLOW`,
	);
	const CAROUSEL_CONTAINER_ID = useRef(
		`${title.replaceAll(' ', '_')}_${getRandomIntInclusive(0, 1000)}_CAROUSEL`,
	);
	const checkShouldCenter = useCallback(() => {
		if (window.innerWidth < 900) {
			setShouldCenterCarousel(false);

			return;
		}

		const CAROUSEL_CONTAINER = document.querySelector(
			`#${CAROUSEL_CONTAINER_ID.current}`,
		);
		const OVERFLOW_CONTAINER = document.querySelector(
			`#${OVERFLOW_CONTAINER_ID.current}`,
		);

		if (!CAROUSEL_CONTAINER || !OVERFLOW_CONTAINER) {
			return;
		}

		const CAROUSEL_CONTAINER_WIDTH = CAROUSEL_CONTAINER.scrollWidth;
		const OVERFLOW_CONTAINER_WIDTH = OVERFLOW_CONTAINER.clientWidth;
		const SHOULD_CENTER =
			CAROUSEL_CONTAINER_WIDTH <= OVERFLOW_CONTAINER_WIDTH;

		setShouldCenterCarousel(SHOULD_CENTER);
	}, []);

	useEffect(() => {
		const CAROUSEL_CONTAINER = document.querySelector(
			`#${CAROUSEL_CONTAINER_ID.current}`,
		);
		const OVERFLOW_CONTAINER = document.querySelector(
			`#${OVERFLOW_CONTAINER_ID.current}`,
		);

		if (!CAROUSEL_CONTAINER || !OVERFLOW_CONTAINER) {
			return;
		}

		const resizeObserver = new ResizeObserver(() => {
			requestAnimationFrame(checkShouldCenter);
		});
		const mutationObserver = new MutationObserver(() => {
			setTimeout(checkShouldCenter, 100);
		});
		const mediaQuery = globalThis.matchMedia('(min-width: 900px)');
		const handleMediaChange = () => {
			setTimeout(checkShouldCenter, 100);
		};

		setTimeout(checkShouldCenter, 200);
		resizeObserver.observe(OVERFLOW_CONTAINER);
		mutationObserver.observe(CAROUSEL_CONTAINER, {
			childList: true,
			subtree: true,
		});
		mediaQuery.addEventListener('change', handleMediaChange);

		return () => {
			resizeObserver.disconnect();
			mutationObserver.disconnect();
			mediaQuery.removeEventListener('change', handleMediaChange);
		};
	}, [checkShouldCenter]);

	if (products.length === 0 && !IS_LOADING) {
		return;
	}

	return (
		<div className={classNameContainer}>
			<h2 className="text-center">{title}</h2>
			<div
				className="overflow-x-scroll"
				id={OVERFLOW_CONTAINER_ID.current}
			>
				<div
					className={`carousel carousel-center mt-8 gap-5 p-4 lg:mt-14 lg:gap-6 ${shouldCenterCarousel ? 'w-full justify-center' : ''}`}
					id={CAROUSEL_CONTAINER_ID.current}
				>
					{IS_LOADING &&
						Array.from({ length: 10 }).map((_, index) => (
							// eslint-disable-next-line react/no-array-index-key
							<ProductCardSkeleton key={index} />
						))}
					{!IS_LOADING && (
						<ProductsList
							className="carousel-item max-w-50"
							products={products}
						/>
					)}
				</div>
			</div>
		</div>
	);
};
