import { NextResponse } from "next/server";
import { executeGraphql } from "@/api/graphqlApi";
import {
	ProductPublishDocument,
	ProductUpdateRatingDocument,
	ProductsGetAllRatingsDocument,
} from "@/gql/graphql";

export async function POST() {
	try {
		const { products } = await executeGraphql({ query: ProductsGetAllRatingsDocument });
		// console.log(JSON.stringify(products, null, 2));
		const prodRatings = products.map((p) => {
			const ratings = p.reviews.map((r) => r.rating);
			const avgRating =
				ratings.length > 0 ? ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length : 1;
			return {
				id: p.id,
				avgRating,
			};
		});
		// console.log(prodRatings);
		// execute query for evrey row in prodRatings
		for (const prodRating of prodRatings) {
			console.log(
				"Updating rating for product: ",
				prodRating.id,
				" to: ",
				prodRating.avgRating,
				"...",
			);
			await executeGraphql({
				query: ProductUpdateRatingDocument,
				variables: { prodId: prodRating.id, rating: prodRating.avgRating },
			});
			await executeGraphql({
				query: ProductPublishDocument,
				variables: { id: prodRating.id },
			});
			// sleep(100)
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
		return new NextResponse(null, { status: 200 });
	} catch (e) {
		console.error(e);
		return NextResponse.json({ error: true }, { status: 400 });
	}
}
