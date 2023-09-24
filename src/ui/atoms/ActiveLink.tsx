"use client";

// import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { Route } from "next";

export function ActiveLink({
	href,
	className,
	activeClassName,
	children,
}: {
	href: Route | URL;
	className: string;
	activeClassName: string;
	children: ReactNode;
}) {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={isActive ? activeClassName : className}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
}
