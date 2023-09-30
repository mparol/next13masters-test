import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getProductsByCategorySlug } from "@/api/products";

const perPage = 4;

export default async function CategoryProductPage({
	params,
}: {
	params: { category: string; page: number };
}) {
	const products = await getProductsByCategorySlug(
		params.category,
		perPage,
		perPage * (params.page - 1),
	);
	if (!products) notFound();

	return (
		// <>
		// 	<h1>
		// 		kategoria {params.category} strona {params.page}
		// 	</h1>
		// 	<pre className="whitespace-pre-wrap">{JSON.stringify(products, null, 2)}</pre>
		// </>
		<ProductList products={products} />
	);
}
