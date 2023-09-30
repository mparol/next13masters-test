import { getProductsByCategoryCount } from "@/api/products";
import { Pagination } from "@/ui/molecules/Pagination";

export default async function CategoryPageLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { category: string; page: number };
}) {
	return (
		<>
			{children}
			<div className="mx-auto mt-20 w-fit">
				<Pagination
					base={"/categories/" + params.category}
					page={params.page}
					totalCount={await getProductsByCategoryCount(params.category)}
				/>
			</div>
		</>
	);
}
