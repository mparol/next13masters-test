import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsBySearchQuery } from "@/api/products";

export default async function SearchPage({ searchParams }: { searchParams: { query: string } }) {
	let products = await getProductsBySearchQuery(searchParams.query);
	if (!products) products = [];

	return (
		<>
			<h1 className="mb-5 text-3xl font-semibold">Found {products.length} results</h1>
			<ProductList products={products} />
		</>
	);
}
