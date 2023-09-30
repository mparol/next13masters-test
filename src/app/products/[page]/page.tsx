import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

const perPage = 4;

export async function generateStaticParams() {
	//TODO magic numbers
	const totalProducts = 14;
	const totalPages = Math.ceil(totalProducts / perPage);
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
	return pages.map((page) => ({ page: page.toString() }));
}

export default async function ProductsPage({ params }: { params: { page: number } }) {
	return <ProductList products={await getProductsList(perPage, perPage * (params.page - 1))} />;
}
