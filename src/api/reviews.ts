import { executeGraphql } from "./graphqlApi";
import {
	ReviewsGetByProductIdDocument,
	ReviewCreateDocument,
	type ReviewCreateInput,
	ReviewPublishDocument,
	ProductPublishDocument,
	ProductUpdateRatingDocument,
	ProductGetReviewsCountDocument,
} from "@/gql/graphql";

export async function getReviews(productId: string) {
	const res = await executeGraphql({
		query: ReviewsGetByProductIdDocument,
		variables: { productId },
	});
	return res.reviews;
}

export async function addReview(review: ReviewCreateInput) {
	const productId = review.product?.connect?.id as string;
	const currReviewCount = (
		await executeGraphql({
			query: ProductGetReviewsCountDocument,
			variables: { prodId: productId },
		})
	).reviewsConnection.aggregate.count;
	const resCreate = await executeGraphql({ query: ReviewCreateDocument, variables: { review } });
	const id = resCreate.createReview?.id;
	const currRating = resCreate.createReview?.product?.currRating;
	if (!id || !currRating) {
		throw new Error("Review creation failed");
	}
	const resPublish = await executeGraphql({ query: ReviewPublishDocument, variables: { id } });
	const newRating = (currRating * currReviewCount + review.rating) / (currReviewCount + 1);
	await executeGraphql({
		query: ProductUpdateRatingDocument,
		variables: { prodId: productId, rating: newRating },
	});
	await executeGraphql({
		query: ProductPublishDocument,
		variables: { id: productId },
	});
	return resPublish.publishReview?.id;
}
