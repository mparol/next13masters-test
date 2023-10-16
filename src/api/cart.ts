import { cookies } from "next/headers";
import { executeGraphql } from "./graphqlApi";
import {
	CartGetByIdDocument,
	CartCreateDocument,
	ProductGetByIdDocument,
	CartAddItemDocument,
	CartChangeItemQuantityDocument,
} from "@/gql/graphql";

export async function getOrCreateCart() {
	const cart = await getCartFromCookie();
	if (cart) {
		return cart;
	}

	const { createOrder: newCart } = await executeGraphql({ query: CartCreateDocument });
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id);
	return newCart;
}

export async function getCartFromCookie() {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql({
			query: CartGetByIdDocument,
			variables: {
				id: cartId,
			},
			noMemo: true,
			cache: "no-cache",
		});
		return cart;
	}
}

export async function addProductToCart(cartId: string, productId: string) {
	const { product } = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id: productId,
		},
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	const { order } = await executeGraphql({
		query: CartGetByIdDocument,
		variables: {
			id: cartId,
		},
	});
	if (!order) {
		throw new Error(`Order with id ${cartId} not found`);
	}

	const existingItem = order.orderItems.find((item) => item.product?.id === productId);

	if (existingItem) {
		await executeGraphql({
			query: CartChangeItemQuantityDocument,
			variables: {
				quantity: existingItem.quantity + 1,
				total: existingItem.total + product.price,
				itemId: existingItem.id,
			},
		});
	} else {
		await executeGraphql({
			query: CartAddItemDocument,
			variables: {
				cartId,
				productId,
				total: product.price,
			},
		});
	}
}
