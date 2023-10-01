import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCategoriesList, getProductsByCategorySlug } from "@/api/products";

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

	const name = (await getCategoriesList()).find(({ slug }) => slug === params.category)?.name;

	return (
		// 	<pre className="whitespace-pre-wrap">{JSON.stringify(products, null, 2)}</pre>
		<>
			<h1 className="mb-5 text-3xl font-semibold">{name}</h1>
			<ProductList products={products} />
		</>
	);
}
