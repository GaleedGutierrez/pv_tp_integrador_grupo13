import 'react-loading-skeleton/dist/skeleton.css';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

/**
 * Skeleton component that matches the ProductCard layout
 * Shows loading placeholders while product data is being fetched
 */
export const ProductCardSkeleton = () => (
	<SkeletonTheme
		baseColor="#f3f4f6"
		highlightColor="#e5e7eb"
	>
		<div className="relative">
			{/* Product Image Skeleton */}
			<div className="rounded-sm rounded-xl bg-gray-100 p-7">
				<Skeleton
					className="mx-auto"
					height={144}
					width={144}
				/>
			</div>

			{/* Product Title Skeleton */}
			<div>
				<Skeleton height={20} />
			</div>

			{/* Rating Skeleton */}
			<div className="flex items-center gap-1">
				{/* Stars skeleton - simplified */}
				<Skeleton
					className="rounded-none"
					height={16}
					width={88}
				/>
				{/* Rating text skeleton */}
				<Skeleton
					className="ml-1 text-sm"
					height={16}
					width={32}
				/>
			</div>

			{/* Price and Actions Skeleton */}
			<div className="flex items-center justify-between gap-1">
				{/* Price skeleton */}
				<Skeleton
					height={20}
					width={80}
				/>

				{/* Action buttons skeleton */}
				<div className="flex items-center gap-1">
					{/* View button */}
					<Skeleton
						className="rounded"
						height={20}
						width={20}
					/>
					{/* Delete button */}
					<Skeleton
						className="rounded"
						height={20}
						width={20}
					/>
				</div>
			</div>

			{/* Heart/Favorite button skeleton */}
			<div className="absolute inset-y-2 end-2">
				<Skeleton
					className="rounded"
					height={20}
					width={20}
				/>
			</div>
		</div>
	</SkeletonTheme>
);
