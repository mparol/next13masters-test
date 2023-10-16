"use server";

import { revalidatePath } from "next/cache";
import { executeGraphql } from "@/api/graphqlApi";
import { CartChangeItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number, total: number) => {
	try {
		await executeGraphql({
			query: CartChangeItemQuantityDocument,
			variables: {
				quantity,
				total,
				itemId,
			},
		});
		revalidatePath("/cart");
	} catch (e) {
		console.log(e);
	}
	//TODO jak obslugiwac bledy? czy robic revalidate mimo bledu?
};
