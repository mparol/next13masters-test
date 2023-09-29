import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@/api/products";

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; page: string };
}) {
	const products = await getProductsByCategorySlug(params.category, params.page);
	if (!products) notFound();

	return (
		<>
			<h1>
				kategoria {params.category} strona {params.page}
			</h1>
			<pre className="whitespace-pre-wrap">{JSON.stringify(products, null, 2)}</pre>
			<ProductList products={products} />
		</>
	);
}
