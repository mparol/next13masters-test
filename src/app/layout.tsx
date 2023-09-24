import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ActiveLink } from "@/ui/atoms/ActiveLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sklep Next13masters",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="flex h-16 items-center justify-between bg-gray-100 px-4">
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
				{/* "mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl" */}
				<section className="mx-auto w-fit p-12 sm:py-16">{children}</section>
				<footer className="text-center text-sm text-gray-500">
					<Link href="/regulamin">Regulamin</Link> |{" "}
					<Link href="/polityka-prywatnosci">Polityka prywatności</Link>
					<p className="mt-3">© {new Date().getFullYear()} </p>
				</footer>
			</body>
		</html>
	);
}
