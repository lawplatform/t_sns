"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UserSchema } from "@/src/schema/user";
import { zodResolver } from "@hookform/resolvers/zod";
import { createBrowserClient } from "@supabase/ssr";
import { signIn } from "next-auth/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

type SignUpProps = {
	submit: (data: z.infer<typeof UserSchema>) => void;
};

export default function F_signup({ submit }: SignUpProps) {

	const [isSocial, setIsSocial] = useState(true);
	const [id, setId] = useState("");
	const form = useForm<z.infer<typeof UserSchema>>({
		resolver: zodResolver(UserSchema),
		defaultValues: {
			email: "",
			name: ""
		}
	})
	function onSubmit(values: z.infer<typeof UserSchema>) {
		if (values.email) {
			form.reset();
			console.log(values);
			submit(values);
		}
	}

	function checkExist(id: string) {
		console.log("checked the value", id);

	}

	useEffect(() => {
		checkExist(id);
	}, [id])

	return (
		<div>

			<Button onClick={() => signIn('google', { callbackUrl: "/dashboard" })}>구글로 회원가입 </Button>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className="flex w-full">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<div className="mr-2 w-full">
									<FormItem>
										<FormControl >
											<Input placeholder="id를 입력하시오" {...field} disabled={false} value={id} onChange={(e) => setId(e.target.value)} />
										</FormControl>
										<FormMessage />
									</FormItem>
								</div>
							)}
						/>
						<FormField
							control={form.control}
							name="email"
							render={({ field }) => (
								<div className="mr-2 w-full">
									<FormItem>
										<FormControl >
											<Input placeholder="메시지를 입력하시오" {...field} disabled={false} />
										</FormControl>
										<FormMessage />
									</FormItem>
								</div>
							)}
						/>
						<Button type="submit">입력</Button>
					</div>
				</form>
			</Form >
		</div>
	)
}
