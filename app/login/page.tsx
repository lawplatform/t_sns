"use client"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function login() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	async function handleButtonClick() {
		setIsLoading(true);

		try {
			await signIn('google');

		} catch (error) {


		} finally {
			setIsLoading(false)
		}

	}
	return (
		<div className="jusitify-center mx-auto flex min-h-full items-center px-4 py-12 sm:px-6 lg:px-8">
			<div className="mx-auto flex w-full max-w-md flex-col items-center space-y-8">
				<div className="flex flex-col items-center gap-8">
					logo
					<h2 className="font-blod mt-6 text-center text-3xl "> sign in to your accounts </h2>
				</div>
				{isLoading ? (
					<Button disabled>
						<Loader2 className="mr-2 h-4 w-4 animate-spin" />
						Please wait
					</Button>
				) : (
					<Button onClick={handleButtonClick}>
						Click Me
					</Button>
				)}
			</div>
		</div>
	)
}
