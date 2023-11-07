"use client"
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";


export default function F_signup() {
	const [isSocial, setIsSocial] = useState(true);
	const formSchema = z.object({
		msg: z.string()
	})
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			msg: "",
		}
	})
	function onSubmit(values: z.infer<typeof formSchema>) {
		if (values.msg) {
			form.reset();
			console.log(values);
		}
	}

	return (
		<div>

			<Button onClick={() => signIn('google', { callbackUrl: "/dashboard" })}>구글로 로그인 </Button>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<div className="flex w-full">
						<FormField
							control={form.control}
							name="msg"
							render={({ field }) => (
								<div className="mr-2 w-full">
									<FormItem>
										<FormControl >
											<Input placeholder="메시지를 입력하시오" {...field} disabled={true} />
										</FormControl>
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
