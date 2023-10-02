"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export const SearchField = () => {
	const searchParams = useSearchParams().get("query") || "";
	const [inputValue, setInputValue] = useState(searchParams);
	const timerId = useRef(setTimeout(() => {}, 0));

	useEffect(() => {
		setInputValue(searchParams);
	}, [searchParams]);

	const router = useRouter();

	useEffect(() => {
		clearTimeout(timerId.current);
		if (inputValue != searchParams)
			timerId.current = setTimeout(() => {
				router.push(`/search?query=${inputValue}`);
			}, 500);
		return () => {
			clearTimeout(timerId.current);
		};
	}, [inputValue, searchParams, router]);

	return (
		<div className="flex w-72 items-center space-x-2">
			<Search className="stroke-gray-600" />
			<input
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						clearTimeout(timerId.current);
						router.push(`/search?query=${inputValue}`);
					}
				}}
				className="w-full rounded-md border-0 bg-slate-50 px-4 py-2 text-sm text-slate-800 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-blue-400"
				placeholder="Search"
				type="search"
				name="search"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</div>
	);
};
