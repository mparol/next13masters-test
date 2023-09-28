export const ProductImage = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div>
			<img alt={alt} src={src} className="h-full w-full object-center p-4" />
		</div>
	);
};
