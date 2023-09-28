import { ActiveLink } from "@ui/atoms/ActiveLink";

export const Pagination = ({ pages }: { pages: number[] }) => {
	return (
		<ul className="flex min-w-max " aria-label="pagination">
			{pages.map((page) => (
				<li key={page} className="h-full min-w-[3rem]">
					<ActiveLink
						href={`/products/${page}`}
						className="flex h-full items-center justify-center border-b-4 border-transparent hover:bg-slate-200"
						activeClassName="flex h-full justify-center items-center border-b-4 border-slate-300 hover:bg-slate-200"
					>
						{page}
					</ActiveLink>
				</li>
			))}
		</ul>
	);
};
