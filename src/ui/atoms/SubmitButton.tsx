/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

// to jest osobny komponent kliencki bo ponoc tak musi byc zeby dzialalo pending z useFormStatus. musi byc wewnatrz <form>

// @ts-expect-error chyba nie ma jeszcze tyou w @types/react-dom dla experimental_useFormStatus, ale ogolnie to dziala
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
