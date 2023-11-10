import { getSeoulTimeformDate, getTime } from "@/lib/times";
import supabase from "@/src/provider/supabase";
import { useEffect, useState } from "react";
import { observable } from "@legendapp/state";
import { For, Show, useObservable, Reactive } from "@legendapp/state/react";
import { Database } from "@/types/supabase";
import { enableReactTracking } from "@legendapp/state/config/enableReactTracking";

enableReactTracking({
	auto: true,
});

type msg = Database['public']['Tables']['real']['Row'];
export default function Board_message() {
	const state$ = observable<{ msgs: msg[] }>({ msgs: [], });

	const stateN$ = observable<{ hi: string }>({ hi: "kim" });
	const me = "kim";

	const handleInserts = (payload: any) => {
		payload.new.name = "힘쎄";
		payload.new.created_at = getTime(payload.new.created_at);

		state$.msgs.push(payload.new);
		//console.log(state$.msgs.get());

	}
	useEffect(() => {
		const subscription = supabase
			.channel('real')
			.on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'real' }, handleInserts)
			.subscribe();
		return () => {
			subscription.unsubscribe();
		};
	}, []);

	const messages = useObservable(() => state$.msgs.get());
	console.log(messages);

	return (
		<div className="h-60">
			{state$.msgs}
		</div>
	)
}
