import { type ClassValue, clsx } from "clsx"
import React from "react";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function useChatScroll<T>(dep: T): React.MutableRefObject<HTMLDivElement> {
	const ref = React.useRef<HTMLDivElement>();
	React.useEffect(() => {
		if (ref.current) {
			ref.current.scrollTop = ref.current.scrollHeight;
		}
	}, [dep]);
	return ref as React.MutableRefObject<HTMLDivElement>;
}


