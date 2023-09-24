import { type ProductItemType } from "@/ui/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: { rate: number; count: number };
	image: string;
	longDescription: string;
};

export async function getProductsList(): Promise<ProductItemType[]> {
	const res = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductItemType);
	return products;
}

export async function getProductById(id: ProductItemType["id"]) {
	const res = await fetch(`https://naszsklep-api.vercel.app/api/products/${id}`);
	const productResponse = (await res.json()) as ProductResponseItem;
	const product = productResponseItemToProductItemType(productResponse);
	return product;
}

function productResponseItemToProductItemType(product: ProductResponseItem): ProductItemType {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
		description: product.description,
	};
}

/*
const products: ProductItemType[] = [
	{
		id: "1",
		name: "Kubek",
		category: "Kubki",
		price: 300,
		coverImage: {
			src: "kubek.webp",
			alt: "kubek",
		},
	},
	{
		id: "2",
		name: "Kubek",
		category: "Kubki",
		price: 12345.99,
		coverImage: {
			src: "kubek.webp",
			alt: "kubek",
		},
	},
	{
		id: "3",
		name: "Kubek",
		category: "Kubki",
		price: 3000.1,
		coverImage: {
			src: "kubek.webp",
			alt: "kubek",
		},
	},
	{
		id: "4",
		name: "Kubek",
		category: "Kubki",
		price: 300,
		coverImage: {
			src: "kubek.webp",
			alt: "kubek",
		},
	},
	{
		id: "5",
		name: "Kubek",
		category: "Kubki",
		price: 300,
		coverImage: {
			src: "kubek.webp",
			alt: "kubek",
		},
	},
];
*/
