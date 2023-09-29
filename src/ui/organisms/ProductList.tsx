import type { ProductListItemFragment } from "@/gql/graphql";
import { ProductListitem } from "@ui/molecules/ProductListItem";

export const ProductList = ({ products }: { products: ProductListItemFragment[] }) => {
	return (
		<ul className="grid min-w-max grid-cols-4 gap-12" data-testid="products-list">
			{products.map((product) => (
				<ProductListitem key={product.id} product={product} />
			))}
		</ul>
	);
};
