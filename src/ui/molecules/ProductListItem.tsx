import { type ProductItemType } from "@ui/types";
import { ProductCoverImage } from "@ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@ui/atoms/ProductListItemDescription";

type ProductListItemProps = {
	product: ProductItemType;
};

export const ProductListitem = ({ product }: ProductListItemProps) => {
	return (
		<li className="w-60 shrink-0">
			<article>
				{/* <ProductCoverImage src={product.coverImage.src} alt={product.coverImage.alt} /> */}
				<ProductCoverImage {...product.coverImage} />
				<ProductListItemDescription product={product} />
			</article>
		</li>
	);
};
