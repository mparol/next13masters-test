"use client";

import type { Route } from "next";
import { useSearchParams } from "next/navigation";
import { ActiveLink } from "@ui/atoms/ActiveLink";

// to zrobilem jako use client zeby pobrac searchParams, bo jako props nie moglem przekazac bo layout nie dostaje searchParams

export const Pagination = ({
	base,
	page,
	totalCount,
}: {
	base: string;
	page: number;
	totalCount: number;
}) => {
	const perPage = 4;
	const totalPages = Math.ceil(totalCount / perPage);
	const firstPages = Array.from({ length: 1 }, (_, i) => i + 1);
	const aroundPages = Array.from({ length: 3 }, (_, i) => page - 1 + i).filter(
		(page) => page > 0 && page <= totalPages,
	);
	const lastPages = Array.from({ length: 1 }, (_, i) => totalPages - i).reverse();
	const pages = [...new Set([...firstPages, ...aroundPages, ...lastPages])];

	const searchParams = useSearchParams();
	const searchString = searchParams.toString() ? `?${searchParams.toString()}` : "";
	return (
		<ul className="flex min-w-max " aria-label="pagination">
			{pages.map((page) => (
				<li key={page} className="h-full min-w-[3rem]">
					<ActiveLink
						href={`${base}/${page}${searchString}` as Route}
						className="flex h-full items-center justify-center rounded-xl py-1 text-gray-600 hover:bg-slate-200"
						activeClassName="flex h-full items-center justify-center rounded-xl bg-gray-100 py-1 text-gray-600 hover:bg-slate-200"
					>
						{page}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
