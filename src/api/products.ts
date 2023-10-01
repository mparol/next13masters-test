import { executeGraphql } from "./graphqlApi";
import {
	CategoriesListDocument,
	CollectionsListDocument,
	ProductGetByIdDocument,
	ProductsGetByCategoryCountDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetByCollectionSlugDocument,
	ProductsGetCountDocument,
	ProductsGetListDocument,
	ProductsGetRelatedListDocument,
} from "@/gql/graphql";

export async function getProductsCount() {
	const res = await executeGraphql(ProductsGetCountDocument);
	return res.productsConnection.aggregate.count;
}

export async function getProductsList(take: number, skip: number) {
	const res = await executeGraphql(ProductsGetListDocument, { take, skip });
	return res.products;
}

export async function getRelatedProductsList(id: string) {
	const res = await executeGraphql(ProductsGetRelatedListDocument, { id });
	return res.product?.categories[0]?.products;
}

export async function getProductsByCategoryCount(categorySlug: string) {
	const res = await executeGraphql(ProductsGetByCategoryCountDocument, {
		slug: categorySlug,
	});
	return res.productsConnection.aggregate.count;
}

export async function getProductsByCategorySlug(categorySlug: string, take: number, skip: number) {
	const res = await executeGraphql(ProductsGetByCategorySlugDocument, {
		slug: categorySlug,
		take,
		skip,
	});
	return res.categories[0]?.products;
}

export async function getProductsByCollectionSlug(collectionSlug: string) {
	const res = await executeGraphql(ProductsGetByCollectionSlugDocument, {
		slug: collectionSlug,
	});
	return res.collections[0]?.products;
}

export async function getProductById(id: string) {
	const res = await executeGraphql(ProductGetByIdDocument, { id });
	return res.product;
}

export async function getCategoriesList() {
	const res = await executeGraphql(CategoriesListDocument);
	return res.categories;
}

export async function getCollectionsList() {
	const res = await executeGraphql(CollectionsListDocument);
	return res.collections;
}
