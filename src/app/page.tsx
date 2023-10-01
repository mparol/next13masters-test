import Link from "next/link";
import { getCollectionsList } from "@/api/products";

export default async function HomePage() {
	return (
		<>
			<h1 className="text-4xl font-bold">Witaj w sklepie internetowym</h1>
			<p className="mt-3 text-xl">Znajdziesz tutaj najlepsze produkty</p>
			<ul className="mt-12 flex h-full justify-between space-x-6">
				{(await getCollectionsList()).map((collection) => (
					<li key={collection.slug}>
						<Link href={`/collections/${collection.slug}`}>
							<div className="flex flex-col items-center justify-center rounded-md border border-slate-100 bg-slate-50 drop-shadow-md transition hover:scale-105 hover:bg-slate-100 hover:drop-shadow-xl">
								<img className="rounded-md" src={collection.image.url} alt={collection.name} />
								<p className="p-3 text-center text-lg font-medium">{collection.name}</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
