"use client";

import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "./actions";

export function ChangeQuantity({
	itemId,
	quantity,
	price,
}: {
	itemId: string;
	quantity: number;
	price: number;
}) {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(
		quantity,
		(_state, newQuantity: number) => newQuantity,
	);

	return (
		<form>
			<button
				className="mr-4 h-8 w-8 border bg-slate-50"
				type="submit"
				formAction={async () => {
					const newQuantity = optimisticQuantity - 1;
					setOptimisticQuantity(newQuantity);
					await changeItemQuantity(itemId, newQuantity, newQuantity * price);
				}}
				disabled={optimisticQuantity <= 1}
				data-testid="decrement"
			>
				-
			</button>
			<span data-testid="quantity">{optimisticQuantity}</span>
			<button
				className="ml-4 h-8 w-8 border bg-slate-50"
				type="submit"
				formAction={async () => {
					const newQuantity = optimisticQuantity + 1;
					setOptimisticQuantity(newQuantity);
					await changeItemQuantity(itemId, newQuantity, newQuantity * price);
				}}
				data-testid="increment"
			>
				+
			</button>
		</form>
	);
}
