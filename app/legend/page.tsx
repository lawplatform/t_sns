"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Database } from "@/types/supabase";
import { observable } from "@legendapp/state";


type real = Database['public']['Tables']['real']['Row'];

export default function Home() {
	//const state$ = observable({ messages: [] });
	const state$ =
		observable<{ messages: real[] }>({ messages: [], });

	const add = () => {
		state$.messages.push({
			created_at: "",
			id: 0,
			msg: "hi",
			name: "yoon"
		})
		console.log(state$.get());

	}
	return (
		<div> Home
			<Input type="text" />
			<Button onClick={add} > click</Button>
		</div >
	)
}


