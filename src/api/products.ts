import { executeGraphql } from "./graphqlApi";
import {
	CategoriesListDocument,
	CollectionsListDocument,
	ProductGetByIdDocument,
	ProductsGetByCategoryCountDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetBySearchQueryDocument,
	ProductsGetCountDocument,
	ProductsGetListDocument,
	ProductsGetRelatedListDocument,
	ProductVariantsGetByIdDocument,
	type ProductOrderByInput,
} from "@/gql/graphql";

export async function getProductsCount() {
	const res = await executeGraphql({ query: ProductsGetCountDocument });
	return res.productsConnection.aggregate.count;
}

export async function getProductsList(take: number, skip: number, sort?: ProductOrderByInput) {
	const res = await executeGraphql({
		query: ProductsGetListDocument,
		variables: { take, skip, sort },
	});
	return res.products;
}

export async function getRelatedProductsList(id: string) {
	const res = await executeGraphql({ query: ProductsGetRelatedListDocument, variables: { id } });
	return res.product?.categories[0]?.products;
}

export async function getProductsByCategoryCount(categorySlug: string) {
	const res = await executeGraphql({
		query: ProductsGetByCategoryCountDocument,
		variables: {
			slug: categorySlug,
		},
	});
	return res.productsConnection.aggregate.count;
}

export async function getProductsByCategorySlug(categorySlug: string, take: number, skip: number) {
	const res = await executeGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			slug: categorySlug,
			take,
			skip,
		},
	});
	return res.categories[0]?.products;
}

export async function getProductsByCollectionSlug(collectionSlug: string) {
	const res = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug: collectionSlug,
		},
	});
	return res.collections[0]?.products;
}

export async function getProductsBySearchQuery(query: string) {
	const res = await executeGraphql({
		query: ProductsGetBySearchQueryDocument,
		variables: { query },
	});
	return res.products;
}

export async function getProductById(id: string) {
	const res = await executeGraphql({ query: ProductGetByIdDocument, variables: { id } });
	return res.product;
}

export async function getProductVariantsById(id: string) {
	const res = await executeGraphql({ query: ProductVariantsGetByIdDocument, variables: { id } });
	return res.product?.variants;
}

export async function getCategoriesList() {
	const res = await executeGraphql({ query: CategoriesListDocument });
	return res.categories;
}

export async function getCollectionsList() {
	const res = await executeGraphql({ query: CollectionsListDocument });
	return res.collections;
}
