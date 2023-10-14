import { ImageResponse } from "next/server";
import { getProductById } from "@/api/products";

export const runtime = "edge";
export const contentType = "image/png";
export const size = { width: 1200, height: 630 };
export const alt = "Open Graph Image";

export default async function OpenGraphImage({ params }: { params: { productId: string } }) {
	const product = await getProductById(params.productId);
	// <div className="justify-normal bg-opacity-50"
	return new ImageResponse(
		(
			<div
				tw="flex flex-col text-xl items-center justify-between w-full h-full p-14 space-y-4"
				style={{
					backgroundImage: `url(${product?.images[0].url})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center center",
					backgroundPositionX: "center",
					backgroundSize: "cover",
				}}
			>
				<div tw="flex flex-col text-2xl items-center">
					<div tw="bg-slate-50 bg-opacity-50">{product?.name}</div>
					<div tw="text-slate-500 bg-slate-50 bg-opacity-50">{product?.categories[0]?.name}</div>
				</div>
				<div tw="bg-slate-50 bg-opacity-50">{product?.description}</div>
			</div>
		),
	);
}
