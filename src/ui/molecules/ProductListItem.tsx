import Link from "next/link";
import { ProductCoverImage } from "@ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@ui/atoms/ProductListItemDescription";
import type { ProductListItemFragment } from "@/gql/graphql";

export const ProductListitem = ({ product }: { product: ProductListItemFragment }) => {
	return (
		<li className="w-60 shrink-0">
			<Link href={`/product/${product.id}`}>
				<article>
					{product.images[0] && (
						<ProductCoverImage src={product.images[0].url} alt={product.name} />
					)}
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
