import { ProductList } from "@ui/organisms/ProductList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const SuggestedProductsList = async () => {
	await sleep(3000);
	const products = await getProductsList(4, 100);
	return <ProductList products={products} />;
};
