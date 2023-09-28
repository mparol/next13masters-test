import { getProductsList } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export async function generateStaticParams() {
	//TODO magic numbers
	const totalPages = Math.ceil(4206 / 12);
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
	return pages.map((page) => ({ page: page.toString() }));
}

export default async function ProductsPage({ params }: { params: { page: number } }) {
	const perPage = 12;
	return <ProductList products={await getProductsList(perPage, perPage * (params.page - 1))} />;
}
