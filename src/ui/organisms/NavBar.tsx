import Link from "next/link";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

export const NavBar = () => {
	return (
		<header className="sticky top-0 z-20 border-b bg-gray-100 bg-opacity-90 backdrop-blur-md">
			<nav className="flex h-16 items-center justify-between px-4">
				<Link href="/" className="text-2xl font-bold">
					Sklep Next13masters
				</Link>
				<ul className="flex h-full items-center space-x-6">
					<li className="h-full min-w-[3rem]">
						<ActiveLink
							href="/"
							className="flex h-full items-center justify-center border-b-4 border-transparent hover:bg-slate-200"
							activeClassName="flex h-full justify-center items-center border-b-4 border-slate-300 hover:bg-slate-200"
						>
							Home
						</ActiveLink>
					</li>
					<li className="h-full min-w-[3rem]">
						<ActiveLink
							href="/products"
							partial={true}
							className="flex h-full items-center justify-center border-b-4 border-transparent hover:bg-slate-200"
							activeClassName="flex h-full justify-center items-center border-b-4 border-slate-300 hover:bg-slate-200"
						>
							All
						</ActiveLink>
					</li>
				</ul>
				<ul className="flex space-x-6">
					<li>
						<Link href="/">Konto</Link>
					</li>
					<li>
						<Link href="/">Koszyk</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};
