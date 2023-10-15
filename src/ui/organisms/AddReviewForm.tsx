import { revalidatePath } from "next/cache";
import { SubmitButton } from "../atoms/SubmitButton";
import type { ReviewCreateInput } from "@/gql/graphql";
import { addReview } from "@/api/reviews";

// const formDataToObject = (formData: FormData): Record<string, string> => {
//     const obj: Record<string, string> = {};
//     formData.forEach((value, key) => {
//         obj[key] = value as string;
//     });
//     return obj;
// };

export const AddReviewForm = ({ productId }: { productId: string }) => {
	// gdyby akcja byla poza komponentem to nie ma domkniecia, ale mozna zrobic bind i productId sie przekaze:
	// const addReviewActionWithId = addReviewAction.bind(null, productId);
	// wtedy: async function addReviewAction(productId: string, formData: FormData) {

	async function addReviewAction(formData: FormData) {
		"use server";

		const formObject = Object.fromEntries(formData);
		const review: ReviewCreateInput = {
			headline: formObject.headline as string,
			content: formObject.content as string,
			rating: parseInt(formObject.rating as string),
			name: formObject.name as string,
			email: formObject.email as string,
			product: { connect: { id: productId } },
		};

		console.log("addReviewAction: ", productId, formObject, review);

		try {
			const res = await addReview(review);
			revalidatePath(`/product/${productId}`);
			console.log("Success: " + res);
		} catch (e) {
			console.log(e);
		}
		//TODO zeby wyczyscic formularz chyba trzeba caly przerobic na "use client" i uzyc cos jak:
		// action={async formData => {await myAction(formData); ref.current.reset();}}
	}

	return (
		<div className="mt-10">
			<h3 className="text-lg font-medium text-gray-900">Share your thoughts</h3>
			<p className="mt-1 text-sm text-gray-600">
				If you&apos;ve used this product, share your thoughts with other customers
			</p>
			<form
				action={addReviewAction}
				className="mt-2 flex flex-col gap-y-2"
				data-testid="add-review-form"
				key={Math.random()} // hack zeby wyczyscic formularz z https://codevoweb.com/learn-nextjs-server-actions-and-mutations-with-examples/
				// w sumie to dziala nawet dobrze, czysci tylko po prawidlowym dodaniu i revalidatePath
			>
				<label>
					<span className="text-xs text-gray-700">Review title</span>
					<input
						required={true}
						className="mt-1 block h-9 w-full rounded-md border border-gray-300 px-2 text-sm font-light shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
						name="headline"
					/>
				</label>
				<label>
					<span className="text-xs text-gray-700">Review content</span>
					<textarea
						required={true}
						className="mt-1 block h-20 max-h-48 min-h-[2.5rem] w-full rounded-md border border-gray-300 px-2 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
						name="content"
					></textarea>
				</label>
				<label>
					<span className="text-xs text-gray-700">Rating</span>
					<select
						className="mt-1 block h-9 w-12 rounded-md border border-gray-300 px-2 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
						name="rating"
						required={true}
					>
						<option></option>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
						<option value={5}>5</option>
					</select>
				</label>
				<label>
					<span className="text-xs text-gray-700">Name</span>
					<input
						required={true}
						className="mt-1 block h-9 w-full rounded-md border border-gray-300 px-2 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
						name="name"
					/>
				</label>
				<label>
					<span className="text-xs text-gray-700">Email</span>
					<input
						required={true}
						className="mt-1 block h-9 w-full rounded-md border border-gray-300 px-2 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
						type="email"
						name="email"
					/>
				</label>
				<SubmitButton className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-gray-900 px-8 py-2 text-sm font-medium text-gray-50 hover:bg-gray-700 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50 disabled:bg-slate-400">
					Submit review
				</SubmitButton>
			</form>
		</div>
	);
};
