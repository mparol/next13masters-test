//import { Suspense } from "react";
//import { getProductById, getProductsList } from "@/api/products";
import { type Metadata } from "next";
//import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";
import { ProductImage } from "@/ui/atoms/ProductImage";
import { formatMoney } from "@/utils";
import { SuggestedProducts } from "@/ui/organisms/SuggestedProducts";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product?.name} - Sklep internetowy`,
		description: product?.description,
	};
};

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products.map((product) => ({ productId: product.id })).slice(0, 2);
// };

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	if (!product) notFound();
	return (
		<article>
			<form className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div className="overflow-hidden rounded-md border bg-slate-50 hover:bg-slate-100">
					<ProductImage src={product.images[0].url} alt={product.name} />
				</div>
				<div className="px-6">
					<h1 className="flex-auto text-3xl font-bold tracking-tight text-slate-900">
						{product.name}
					</h1>
					<div className="mt-4 flex items-center">
						<div className="font-base small-caps text-lg text-slate-800">
							{formatMoney(product.price / 100)}
						</div>
					</div>
					<div className="mt-4 space-y-6">
						<p className="font-sans text-base text-slate-500">{product.description}</p>
					</div>
					<div className="mt-6 flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="h-5 w-5 flex-shrink-0 text-blue-500"
							aria-hidden="true"
						>
							<path d="M18 6 7 17l-5-5"></path>
							<path d="m22 10-7.5 7.5L13 16"></path>
						</svg>
						<p className="ml-1 text-sm font-semibold text-slate-500">In stock</p>
					</div>
					<div className="mt-8">
						<button
							type="submit"
							data-testid="add-to-cart-button"
							className="inline-flex h-14 w-full items-center justify-center rounded-md from-cyan-600 to-sky-800 px-6 text-base font-medium leading-6 text-white shadow transition duration-150 ease-in-out enabled:bg-gradient-to-r hover:enabled:brightness-125 disabled:cursor-wait disabled:bg-gray-300"
						>
							Add to cart
						</button>
					</div>
				</div>
			</form>
			<SuggestedProducts productId={product.id} />
		</article>

		// <>
		// 	<h1 className="pb-4 text-3xl font-bold text-slate-900">{product.name}</h1>
		// 	<article className="max-w-xs">
		// 		{/* <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} /> */}
		// 		<ProductCoverImage {...product.coverImage} />
		// 		<ProductListItemDescription product={product} />
		// 		<p className="mt-4">{product.description}</p>
		// 	</article>
		// 	{/* <aside>
		// 		<Suspense fallback={<div>Loading...</div>}>
		// 			<SuggestedProductsList />
		// 		</Suspense>
		// 	</aside> */}
		// </>
	);
}
