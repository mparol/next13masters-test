import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCollectionsList, getProductsByCollectionSlug } from "@/api/products";

export const generateMetadata = async ({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> => {
	return {
		title: await getCollectionName(params.collection),
	};
};

export default async function CollectionProductPage({
	params,
}: {
	params: { collection: string };
}) {
	const products = await getProductsByCollectionSlug(params.collection);
	if (!products) notFound();

	return (
		// 	<pre className="whitespace-pre-wrap">{JSON.stringify(products, null, 2)}</pre>
		<>
			<h1 className="mb-5 text-3xl font-semibold">{await getCollectionName(params.collection)}</h1>
			<ProductList products={products} />
		</>
	);
}

async function getCollectionName(collection: string) {
	return (await getCollectionsList()).find(({ slug }) => slug === collection)?.name;
}
