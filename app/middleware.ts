import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useSession } from "next-auth/react";

export async function middleware(req: NextRequest) {
	const res = NextResponse.next()
	const pathname = req.nextUrl.pathname;
	const supabase = createMiddlewareSupabaseClient({ req, res })

	const { data: session } = useSession();

	if (!session && pathname.startsWith("/dashboard")) {
		const url = new URL(req.url);
		url.pathname = "/login";
		return NextResponse.redirect(url);

	}


	await supabase.auth.getSession()
	return res
}


