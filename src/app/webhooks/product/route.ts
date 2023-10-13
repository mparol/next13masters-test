import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest): Promise<NextResponse> {
	const json = (await req.json()) as { data: { id: string } };
    // zeby to zrobic bardziej restrykcyjnie w TS mozna nadac json typ unknown
    // i dalej sprawdzenie ifem czy jest to obiekt i czy ma wlasciwosc data itd
    // powoduje ze TS przestaje narzekac, ale jest to bardziej verbose niz optional chaining

	if (json?.data?.id) {
		console.log(`Revalidating product: ${json.data.id} and all /products/[page]`);
		revalidatePath(`/product/${json.data.id}`);
		revalidatePath(`/products/[page]`, "page"); // typ "page" jest istotny bo inaczej nie rewaliduje (i jest komunikat w konsoli)
		return new NextResponse(null, { status: 200 });
	}
	return NextResponse.json({ message: "Invalid body" }, { status: 400 });
}
