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
	const clearHref = new URL(href.toString(), "http://dummy.com").pathname;
	const isActive = partial ? pathname.startsWith(clearHref) : pathname === clearHref;

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
