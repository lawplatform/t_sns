"use client";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import supabase from "@/src/provider/supabase";
import Board_message from "@/src/ui/board/board_message";
import F_formItem_test from "@/src/ui/form/F_formItem_test";
import F_message from "@/src/ui/form/F_message";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendHorizontal, Smile } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function Home() {

	async function send(values: { msg: string; }): void {
		const { data, error } = await supabase
			.from('real')
			.insert([
				{ msg: values.msg, name: '김' },
			])
			.select()

	}
	return (
		<div>
			<h1>chat class</h1>
			<Board_message />
			<F_message send={send} />
		</div>
	);
}
