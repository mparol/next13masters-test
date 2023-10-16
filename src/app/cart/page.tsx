import { redirect } from "next/navigation";
import { ChangeQuantity } from "./ChangeQuantity";
import { getCartFromCookie } from "@/api/cart";
import { formatMoney } from "@/utils";

export default async function CartPage() {
	let cart = await getCartFromCookie();
	const startTime = Date.now();
	while (!cart && Date.now() - startTime < 10000) {
		// sleep and retry
		await new Promise((resolve) => setTimeout(resolve, 1000));
		cart = await getCartFromCookie();
	}
	if (!cart) redirect("/");

	return (
		<div className="mt-10">
			<h1 className="text-xl">Order #{cart.id} summary</h1>
			<table className="mt-10 table-fixed">
				<thead>
					<tr>
						<th className="p-4 text-left">Product</th>
						<th className="p-4 text-center">Quantity</th>
						<th className="p-4">Price</th>
						<th className="p-4">Total</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td className="p-4">
									<div className="flex items-center space-x-4">
										<img
											width={200}
											height={200}
											className="me-10 h-32 w-32 rounded-lg border object-cover object-center"
											src={item.product.images[0]?.url}
										/>
										{item.product.name}
									</div>
								</td>
								<td className="p-4 text-center">
									<ChangeQuantity
										itemId={item.id}
										quantity={item.quantity}
										price={item.product.price}
									/>
								</td>
								<td className="p-4">{formatMoney(item.product.price / 100)}</td>
								<td className="p-4">{formatMoney(item.total / 100)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
