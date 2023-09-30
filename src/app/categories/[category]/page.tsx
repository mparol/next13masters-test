import { redirect } from "next/navigation";

export default function CategoryPage({ params }: { params: { category: string } }) {
	redirect("/categories/" + params.category + "/1");
}
