import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductList } from "@/ui/organisms/ProductList";
import { getCategoriesList, getProductsByCategorySlug } from "@/api/products";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	return {
		title: await getCategoryName(params.category),
	};
};

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
		// 	<pre className="whitespace-pre-wrap">{JSON.stringify(products, null, 2)}</pre>
		<>
			<h1 className="mb-5 text-3xl font-semibold">{getCategoryName(params.category)}</h1>
			<ProductList products={products} />
		</>
	);
}

async function getCategoryName(category: string) {
	return (await getCategoriesList()).find(({ slug }) => slug === category)?.name;
}
