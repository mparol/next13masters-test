import { getProductsCount } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

export default async function ProductsPageLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { page: number };
}) {
	return (
		<>
			{children}
			<div className="mx-auto mt-20 w-fit">
				<Pagination base="/products" page={params.page} totalCount={await getProductsCount()} />
			</div>
		</>
	);
}
