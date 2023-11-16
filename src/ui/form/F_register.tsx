"use client";
import {
	checkEmailAlreadyExist,
	checkNameAlreadyExist,
	checkisCustomEmail,
} from "@/app/lab/action";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import supabase from "@/src/provider/supabase";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, User2, Lock } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	name: z
		.string()
		.min(1, {
			message: "닉네임은 필수 입니다",
		})
		.refine(
			async (value) => {
				const exists = await checkNameAlreadyExist(value);
				return !exists; // Return true if the name doesn't exist
			},
			{
				message: "이미 존재하는 닉네임입니다",
			}
		),
	email: z
		.string()
		.email({
			message: "잘못된 이메일 형식입니다",
		})
		.refine(
			async (value) => {
				const exists = await checkEmailAlreadyExist(value);
				return !exists; // Return true if the name doesn't exist
			},
			{ message: "이미 가입한 메일 주소 입니다" }
		)
		.refine(
			async (value) => {
				const mailexist = await checkisCustomEmail(value);
				return !mailexist;
			},
			{ message: "sns 가입을 이용해주세요" }
		),
	password: z
		.string()
		.min(6, {
			message: "패스워드는 6글자 이상입니다",
		})
		.refine(
			(password) => {
				// Check if the password contains at least one special character
				return /[!@#$%^&*]/.test(password);
			},
			{
				message: "패스워드에는 특수한 문자가 들어가야 합니다 ",
			}
		),
});

export default function F_register() {
	const [showPassword, setShowPassword] = useState(false);
	const { watch, trigger } = useForm();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
		},
	});

	function areAllFieldsFilled() {
		const values = form.getValues();
		return Object.values(values).every((value) => !!value);
	}

	async function onSubmit(values: z.infer<typeof formSchema>) {
		fetch("/api/user/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log("Server response:", data);
				// Handle the response data here
			})
			.catch((error) => {
				console.error("Error:", error);
				// Handle errors here
			});
		form.reset();
	}

	const searchParams = useSearchParams();
	const search = searchParams.get("email");

	useEffect(() => {
		form.setValue("email", search!);
	}, []);

	return (
		<div className="bg-grey-lightest bg-red-100 font-sans antialiased">
			<Button
				onClick={() => signIn("google", { callbackUrl: "/", redirect: false })}
			>
				next Auth logint
			</Button>
			<Form {...form}>
				<form
					className="bg-grey-lightest w-full pt-4"
					onSubmit={form.handleSubmit(onSubmit)}
				>
					<div className="container mx-auto py-8">
						<div className="mx-auto w-5/6 rounded bg-white shadow lg:w-1/2">
							<div className="border-grey-lighter border-b px-8 py-4 text-xl text-black">
								회원가입
							</div>
							<div className="px-8 py-4">
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<div className="flex flex-row ">
												<User2 className="w-5" />
												<FormLabel className="text-grey-darker mx-2  mb-2 block pt-1 text-sm font-bold">
													닉네임
												</FormLabel>
											</div>
											<FormControl>
												<Input placeholder="닉네임" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<div className="mt-4 flex flex-row">
												<Mail className="w-5" />
												<FormLabel className="text-grey-darker mx-2  mb-2 block pt-1 text-sm font-bold">
													이메일
												</FormLabel>
											</div>
											<FormControl>
												<Input placeholder="이메일" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<div className="mt-4 flex flex-row items-start">
												<Lock className="w-5" />
												<FormLabel className="text-grey-darker mx-2 block pt-1 text-sm font-bold">
													비밀번호
												</FormLabel>
											</div>
											<FormControl>
												<Input placeholder="비밀번호" {...field} />
											</FormControl>

											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="mt-8 flex items-center justify-between">
									<Button
										type="submit"
										className="w-full"
										disabled={!areAllFieldsFilled()}
									>
										가입하기
									</Button>
								</div>
							</div>
						</div>
						<p className="my-4 text-center">
							<a
								href="#"
								className="text-grey-dark hover:text-grey-darker text-sm no-underline"
							>
								I already have an account
							</a>
						</p>
					</div>
				</form>
			</Form>
			<footer className="bg-grey-lighter w-full py-8">
				<div className="container mx-auto px-8 text-center">
					<p className="text-grey-dark mb-2 text-sm">
						This is a product of <span className="font-bold">Your Company</span>
					</p>
				</div>
			</footer>
		</div>
	);
}
