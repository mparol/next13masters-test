import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { NavBar } from "@/ui/organisms/NavBar";
import { getCategoriesList } from "@/api/products";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sklep Next13masters",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<NavBar categories={await getCategoriesList()} />
				{/* "mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl" */}
				<section className="mx-auto max-w-7xl p-12 sm:py-16">{children}</section>
				<footer className="text-center text-sm text-gray-500">
					<Link href="/regulamin">Regulamin</Link> |{" "}
					<Link href="/polityka-prywatnosci">Polityka prywatności</Link>
					<p className="mt-3">© {new Date().getFullYear()} </p>
				</footer>
			</body>
		</html>
	);
}
