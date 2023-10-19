import { getProductsCount, getProductsList } from "@/api/products";
import type { ProductOrderByInput } from "@/gql/graphql";
import { ProductList } from "@/ui/organisms/ProductList";

const perPage = 4;

export async function generateStaticParams() {
	const totalProducts = await getProductsCount();
	const totalPages = Math.ceil(totalProducts / perPage);
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
	return pages.map((page) => ({ page: page.toString() }));
}

export default async function ProductsPage({
	params,
	searchParams,
}: {
	params: { page: number };
	searchParams: { sort: string };
}) {
	const prodOrder: ProductOrderByInput = searchParams.sort as ProductOrderByInput;
	return (
		<ProductList
			products={await getProductsList(perPage, perPage * (params.page - 1), prodOrder)}
		/>
	);
}
