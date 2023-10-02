import Link from "next/link";
import { ShoppingBag, UserCircle } from "lucide-react";
import { Suspense } from "react";
import { SearchField } from "./SearchField";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import type { CategoryItemFragment } from "@/gql/graphql";

export const NavBar = ({ categories }: { categories: CategoryItemFragment[] }) => {
	// pasuje tez typ CategoriesListQuery["categories"], ale skoro na fragment nie trzeba tworzyc osobnego pliku to lepszy fragment
	return (
		<header className="sticky top-0 z-20 border-b bg-gray-100 bg-opacity-90 backdrop-blur-md">
			<div className="flex h-16 items-center justify-between px-8">
				<Link href="/" className="text-2xl font-bold">
					Sklep Next13masters
				</Link>
				<nav className="h-full">
					<ul className="flex h-full items-center space-x-6">
						<li className="h-full min-w-[3rem]">
							<ActiveLink
								href="/"
								className="flex h-full items-center justify-center border-b-4 border-transparent hover:bg-gray-200 hover:bg-opacity-50"
								activeClassName="flex h-full justify-center items-center border-b-4 border-cyan-600 hover:bg-gray-200 hover:bg-opacity-50"
							>
								Home
							</ActiveLink>
						</li>
						<li className="h-full min-w-[3rem]">
							<ActiveLink
								href="/products"
								partial={true}
								className="flex h-full items-center justify-center border-b-4 border-transparent hover:bg-gray-200 hover:bg-opacity-50"
								activeClassName="flex h-full justify-center items-center border-b-4 border-cyan-600 hover:bg-gray-200 hover:bg-opacity-50"
							>
								All
							</ActiveLink>
						</li>
						{categories.map((category) => (
							<li key={category.slug} className="h-full min-w-[3rem]">
								<ActiveLink
									href={`/categories/${category.slug}`}
									partial={true}
									className="flex h-full items-center justify-center border-b-4 border-transparent hover:bg-gray-200 hover:bg-opacity-50"
									activeClassName="flex h-full justify-center items-center border-b-4 border-cyan-600 hover:bg-gray-200 hover:bg-opacity-50"
								>
									{category.name}
								</ActiveLink>
							</li>
						))}
					</ul>
				</nav>
				<Suspense fallback={<div className="w-72"></div>}>
					<SearchField />
				</Suspense>
				<ul className="flex space-x-6">
					<li>
						<Link href="/">
							<UserCircle />
						</Link>
					</li>
					<li>
						<Link href="/">
							<div className="flex space-x-2">
								<ShoppingBag />
								<p className="font-semibold">0</p>
							</div>
						</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};
