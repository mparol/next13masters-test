"use client";

// import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { Route } from "next";

export function ActiveLink<T extends string>({
	href,
	partial = false,
	className,
	activeClassName,
	children,
}: {
	href: Route<T> | URL;
	partial?: boolean;
	className: string;
	activeClassName: string;
	children: ReactNode;
}) {
	const pathname = usePathname();
	const isActive = partial ? pathname.startsWith(href.toString()) : pathname === href;

	return (
		<Link<T>
			href={href}
			className={isActive ? activeClassName : className}
			aria-current={isActive ? "page" : undefined}
		>
			{children}
		</Link>
	);
}
