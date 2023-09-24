//import { Suspense } from "react";
//import { getProductById, getProductsList } from "@/api/products";
import { type Metadata } from "next";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
//import { SuggestedProductsList } from "@/ui/organisms/SuggestedProducts";
import { getProductById } from "@/api/products";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.name} - Sklep internetowy`,
		description: product.description,
	};
};

// export const generateStaticParams = async () => {
// 	const products = await getProductsList();
// 	return products.map((product) => ({ productId: product.id })).slice(0, 2);
// };

export default async function ProductPage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	return (
		<>
			<h1 className="pb-4 text-3xl font-bold text-slate-900">{product.name}</h1>
			<article className="max-w-xs">
				{/* <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} /> */}
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
				<p className="mt-4">{product.description}</p>
			</article>
			{/* <aside>
				<Suspense fallback={<div>Loading...</div>}>
					<SuggestedProductsList />
				</Suspense>
			</aside> */}
		</>
	);
}
