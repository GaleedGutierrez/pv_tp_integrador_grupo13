import { ProductCard } from './ProductCard.jsx';

export const ProductsList = ({ products, className }) => (
	<>
		{products.map((product) => (
			<article
				key={product.id}
				className={className}
			>
				<ProductCard product={product} />
			</article>
		))}
	</>
);
