import { Button } from "@/components/ui/button";
import Chat_msg_me from "./chat_msg_me";
import Chat_msg_you from "./chat_msg_you";
import { useEffect, useState } from "react";
import { supabase } from "@/src/provider/supabase";
type Message = {
	id: string
	created_at: string
	content: string
	profile_id: string
	profile: {
		username: string
	}
}
export default function Chat_message_list() {
	const [messages, setMessages] = useState<Message>([])
	const getData = async () => {

		console.log("there is no message");

	}
	useEffect(() => {
	}, [])

	return (
		<div>

			<Chat_msg_me />
			<Chat_msg_you />
		</div>
	)
}
