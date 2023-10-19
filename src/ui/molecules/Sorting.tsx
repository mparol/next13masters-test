"use client";

import type { Route } from "next";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useLayoutEffect, useState } from "react";

export const Sorting = () => {
	const router = useRouter();
	const path = usePathname();
	const searchParams = useSearchParams();

	const sortParam = searchParams.get("sort") || "";
	// stan byl chyba troche na wyrost. w niczym nie powinno przeszkadzac ustawianie value w kazdym renderze
	// const [sort, setSort] = useState(sortParam);
	// useLayoutEffect zamiast useLayout powoduje ze to sie wykona przed renderem i nie ma migania z "Sort by" na wybrana opcje nawet po refreshu
	// useLayoutEffect(() => {
	// 	setSort(sortParam);
	// }, [sortParam]);

	// mozna kombinowac z samym stanem trzymanym w layoucie, ale layout nie moze i tak przekazac tego do strony
	// ewentualnie jest cos takiego jak context, ale to by trzeba poczytac

	return (
		<select
			className="mb-4 ml-auto block w-48 cursor-pointer rounded-md border border-gray-300 px-2 py-1 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
			onChange={(e) => {
				const selVal = e.target.value;
				// setSort(selVal);
				const newParams = selVal && `?sort=${selVal}`;
				router.replace(`${path}${newParams}` as Route);
			}}
			value={sortParam}
		>
			<option value="">Sort by</option>
			<option value="avgRating_DESC" data-testid="sort-by-rating">
				Rating (High to Low)
			</option>
			<option value="avgRating_ASC" data-testid="sort-by-rating">
				Rating (Low to High)
			</option>
			<option value="price_ASC" data-testid="sort-by-price">
				Price (Low to High)
			</option>
			<option value="price_DESC" data-testid="sort-by-price">
				Price (High to Low)
			</option>
		</select>
	);
};
