export const ProductCoverImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className="aspect-square">
			<img
				width={320}
				height={320}
				alt={alt}
				src={src}
				className="h-full w-full object-cover object-center p-4"
			/>
		</div>
	);
};
