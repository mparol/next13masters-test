import { executeGraphql } from "./graphqlApi";
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
} from "@/gql/graphql";

export async function getProductsList(take: number, offset: number) {
	const res = await executeGraphql(ProductsGetListDocument);
	return res.products;
}

export async function getProductsByCategorySlug(categorySlug: string) {
	const res = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
	});
	return res.categories[0]?.products;
}

export async function getProductById(id: string) {
	const res = await executeGraphql(ProductGetByIdDocument, { id });
	return res.product;
}
