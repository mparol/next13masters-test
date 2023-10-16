import { executeGraphql } from "./graphqlApi";
import {
	ReviewsGetByProductIdDocument,
	ReviewCreateDocument,
	type ReviewCreateInput,
	ReviewPublishDocument,
} from "@/gql/graphql";

export async function getReviews(productId: string) {
	const res = await executeGraphql({
		query: ReviewsGetByProductIdDocument,
		variables: { productId },
	});
	return res.reviews;
}

export async function addReview(review: ReviewCreateInput) {
	const resCreate = await executeGraphql({ query: ReviewCreateDocument, variables: { review } });
	const id = resCreate.createReview?.id;
	if (!id) {
		throw new Error("Review creation failed");
	}
	const resPublish = await executeGraphql({ query: ReviewPublishDocument, variables: { id } });
	return resPublish.publishReview?.id;
}
