"use client"
import supabase from "@/src/provider/supabase";
import { useState } from "react";
import Messages from "./messages";

export default function Chat_supa() {
	const [messages, setMessages] = useState<Message[]>([]);
	const smubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = e.currentTarget
		const { message } = Object.fromEntries(new FormData(form))
		if (typeof message === 'string' && message.trim().length !== 0) {

			form.rest();
			const { error } = await supabase.from('message').insert({
				content: message
			})
			if (error) {
				alert(error.message)
			}
		}
	}

	return (
		<div>
			<h1> This is chating list page and it show every data on chatting </h1>
			<Messages />

		</div>
	)
}
