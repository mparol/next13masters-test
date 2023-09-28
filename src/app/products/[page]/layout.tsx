import { Pagination } from "@/ui/molecules/Pagination";

export default function ProductsPageLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: { page: number };
}) {
	// 4206 products
	//TODO magic numbers
	const page = Number(params.page);
	const totalPages = Math.ceil(4206 / 12);
	const firstPages = Array.from({ length: 1 }, (_, i) => i + 1);
	const aroundPages = Array.from({ length: 3 }, (_, i) => page - 1 + i).filter(
		(page) => page > 0 && page <= totalPages,
	);
	const lastPages = Array.from({ length: 1 }, (_, i) => totalPages - i).reverse();
	return (
		<>
			{children}
			<div className="mx-auto mt-20 w-fit">
				<Pagination pages={[...new Set([...firstPages, ...aroundPages, ...lastPages])]} />
			</div>
		</>
	);
}
