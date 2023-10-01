import { notFound } from "next/navigation";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionsList, getProductsByCollectionSlug } from "@/api/products";

export default async function CollectionProductPage({
	params,
}: {
	params: { collection: string };
}) {
	const products = await getProductsByCollectionSlug(params.collection);
	if (!products) notFound();

	const name = (await getCollectionsList()).find(({ slug }) => slug === params.collection)?.name;

	return (
		// 	<pre className="whitespace-pre-wrap">{JSON.stringify(products, null, 2)}</pre>
		<>
			<h1 className="mb-5 text-3xl font-semibold">{name}</h1>
			<ProductList products={products} />
		</>
	);
}
