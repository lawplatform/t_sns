"use client"
import Image from 'next/image'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link';
export default function Home() {
	const { data: session, status } = useSession();
	return (
		<div>
			<button onClick={() => signIn()}>Sign In</button>
			<button onClick={() => signOut()}>Sign Out</button>
			{session?.user ? (
				<>
					<img
						className="h-8 w-8 rounded-full"
						src={session.user.image || ""} />
					<p className="text-sky-600"> {session.user.email}</p>
				</>) : (
				<div> you shold login this stage!</div>
			)
			}
			<Link href="/dashboard">Dashboard</Link>
		</div>
	)
}
