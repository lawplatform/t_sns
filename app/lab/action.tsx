'use server';

import supabase from "@/src/provider/supabase";
import { UserSchema } from "@/src/schema/user";
import { redirect } from "next/navigation";
import { z } from "zod";

export async function serverActionTemp(data: z.infer<typeof UserSchema>) {
	'use server';
	console.log('--- fServerAction ---');
	console.log(data);

	//redirect('/')

}


export async function checkNameAlreadyExist(name: string) {
	const { data, error } = await supabase.from('users').select('name').eq('name', name);
	if (error) {
		console.error("supabase error");
		return false
	}
	console.log("already existed");
	console.log(data);
	return data.length > 0;
}
