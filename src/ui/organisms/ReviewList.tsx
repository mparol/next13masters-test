import { getReviews } from "@/api/reviews";

export const ReviewList = async ({ productId }: { productId: string }) => {
	const reviews = await getReviews(productId);
	if (!reviews) return <div>Error getting reviews</div>;
	return (
		<div className="flex flex-col">
			{reviews.map((review) => (
				<div key={review.id}>
					<h4 className="mt-10 text-sm font-bold text-gray-900">{review.name}</h4>
					<div className="text-sm">Rating: {review.rating}</div>
					<div className="border-b pb-10">
						<p className="mt-4 space-y-6 text-sm font-semibold text-gray-600">{review.headline}</p>
						<p className="mt-2 text-sm italic text-gray-600">{review.content}</p>
					</div>
				</div>
			))}
		</div>
	);
};
