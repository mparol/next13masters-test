import { ProductList } from "@/ui/organisms/ProductList";
import { type ProductItemType } from "@/ui/types";

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
	// {
	// 	id: "5",
	// 	name: "Kubek",
	// 	category: "Kubki",
	// 	price: 300,
	// 	coverImage: {
	// 		src: "kubek.webp",
	// 		alt: "kubek",
	// 	},
	// },
];

export default function Home() {
	return (
		<section className="mx-auto mt-10 w-fit">
			<ProductList products={products} />
		</section>
	);
}
