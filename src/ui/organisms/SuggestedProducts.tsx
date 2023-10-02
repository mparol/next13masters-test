import { ProductList } from "@ui/organisms/ProductList";
import { getRelatedProductsList } from "@/api/products";

export const SuggestedProducts = async ({ productId }: { productId: string }) => {
	const products = await getRelatedProductsList(productId);
	if (!products) return <div>Error getting related products</div>;
	return (
		<div className="mt-12" data-testid="related-products">
			<h2 className="mb-5 text-xl font-medium">Also check out these related products:</h2>
			<ProductList products={products} />
		</div>
	);
};
