import { Suspense } from "react";
import { getProductsCount } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";
import { Sorting } from "@/ui/molecules/Sorting";

export default async function ProductsPageLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { page: number };
}) {
	return (
		<>
			<Suspense>
				<Sorting />
			</Suspense>
			{children}
			<div className="mx-auto mt-20 w-fit">
				<Pagination base="/products" page={params.page} totalCount={await getProductsCount()} />
			</div>
		</>
	);
}
