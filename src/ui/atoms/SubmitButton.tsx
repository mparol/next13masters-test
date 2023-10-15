"use client";

// to jest osobny komponent kliencki bo ponoc tak musi byc zeby dzialalo pending z useFormStatus. musi byc wewnatrz <form>

import { experimental_useFormStatus as useFormStatus } from "react-dom";
import type { ComponentProps, PropsWithChildren } from "react";

export function SubmitButton({ ...props }: PropsWithChildren<ComponentProps<"button">>) {
	const { pending } = useFormStatus();
	return (
		<button type="submit" {...props} disabled={pending}>
			{props.children}
		</button>
	);
}
