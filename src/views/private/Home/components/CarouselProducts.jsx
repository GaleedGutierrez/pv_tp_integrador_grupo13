/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useAppSelector } from '@hooks/useAppSelector';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { ProductCard } from '@/sections/products/components/ProductCard';
import { ProductCardSkeleton } from '@/sections/products/components/ProductCardSkeleton';

/** @returns If there are not products return undefined */
export const CarouselProducts = ({ products, title }) => {
	const { isLoading } = useAppSelector((state) => state.products);

	if (products.length === 0 && !isLoading) {
		return;
	}

	return (
		<div>
			<h2 className="text-center">{title}</h2>
			<div className="preview p-15 flex h-[450px] w-full justify-center data-[align=start]:items-start data-[align=end]:items-end data-[align=center]:items-center">
				<Carousel
					className="w-full"
					opts={{
						align: 'start',
					}}
				>
					<CarouselContent>
						{isLoading &&
							Array.from({ length: 4 }).map((_, index) => (
								<CarouselItem
									// eslint-disable-next-line react/no-array-index-key
									key={index}
									className="md:basis-1/2 lg:basis-1/4"
								>
									<ProductCardSkeleton />
								</CarouselItem>
							))}
						{!isLoading &&
							products.map((product) => (
								<CarouselItem
									key={product.id}
									className="md:basis-1/2 lg:basis-1/4"
								>
									<ProductCard product={product} />
								</CarouselItem>
							))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
};
