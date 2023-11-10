"use client"

import { useState } from "react"

type Message = {
	id: string
	created_at: string
	content: string
	profile_id: string
	profile: {
		username: string
	}

}

export default function Messaegs() {
	const [messages, setMessages] = useState<Messaege>([])
	const getData = async () => {
		const { data } = await supabase
			.from<Message>('message')
			.select('*,profile:profiles(userame)')

	}
	return (
		<div> this is chat message</div>
	)
}
