export default function Page({ params }: { params: { id: string } }) {
	const id = params.id;
	const { data: messages } = await supabase.from('messages').select('*').eq('chat', id).order("created_at", { ascending: true });



	return (<div>My Post: {id}</div>)
}
