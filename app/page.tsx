"use client";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { notFound } from "next/navigation";
import EditorJS from "@editorjs/editorjs";
import H_ink_splash from "@/src/page/hero/h_ink_splash";
export default function Home() {
	const { data: session, status } = useSession();
	return (
		<div>
			<H_ink_splash></H_ink_splash>
			<button onClick={() => signIn()}>Sign In</button>
			<button onClick={() => signOut()}>Sign Out</button>
			{session?.user ? (
				<>
					<img
						className="h-8 w-8 rounded-full"
						src={session.user.image || ""}
					/>
					<p className="text-sky-600"> {session.user.email}</p>
					<p> token:{session.supabaseAccessToken}</p>
				</>
			) : (
				<div> you shold login this stage!</div>
			)}
			<Link href="/dashboard">Dashboard</Link>
		</div>
	);
}
