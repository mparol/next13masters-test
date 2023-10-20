import type { ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

export const ProductListItemDescription = ({
	product: { categories, name, price, avgRating },
}: {
	product: ProductListItemFragment;
}) => {
	return (
		<div className="flex justify-between px-4">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				{categories[0] && (
					<p className="text-sm text-gray-500">
						<span className="sr-only">Kategoria:</span> {categories[0].name}
					</p>
				)}
			</div>
			<div className="text-right">
				<p className="text-sm font-medium text-gray-900">
					<span className="sr-only">Cena:</span>{" "}
					<span data-testid="product-price">{formatMoney(price / 100)}</span>
				</p>
				<p className="text-sm text-gray-500">
					Rating:&nbsp;<span data-testid="product-rating">{Math.round(avgRating)}</span>
				</p>
			</div>
		</div>
	);
};
