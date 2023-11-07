import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'
import NextAuthProvider from '@/src/provider/authsession'
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils'
import N_horizontal from '@/src/ui/navigation/n_horizontal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: "title",
	generator: "framework",
	applicationName: "app Name",
	referrer: "origin-when-cross-origin",
	keywords: [
		"Next.js",
		"React",
		"JavaScript",
		"Boilerplate",
		"Template",
		"shadcn-ui",
	],
	authors: [{ name: "author", url: "Site URL" }],
	colorScheme: "dark",
	creator: "author",
	publisher: "author",
	alternates: {},
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	metadataBase: new URL("http://www.temp.com"),
	openGraph: {
		title: "Name",
		description: "Next.js, TailwindCSS and shadcn-ui Starter Template",
		url: "URL",
		siteName: "Site Name",
		images: [
			{
				url: "https://kaminari.vercel.app/og.png",
				width: 800,
				height: 600,
			},
			{
				url: "https://kaminari.vercel.app/og-dark.png",
				width: 1800,
				height: 1600,
				alt: "Next.js, TailwindCSS and shadcn-ui Starter Template",
			},
		],
		locale: "en-US",
		type: "website",
	},
	robots: {
		index: true,
	},
};



export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className={cn('light  text-slate-900 antialiased', inter.className)}>
			<body className="min-h-screen bg-slate-50  antialiased">
				<NextAuthProvider>
					<N_horizontal />
					<div className='container mx-auto h-full max-w-7xl pt-12'>




						{children}
					</div>
					<Toaster />
				</NextAuthProvider>
			</body>
		</html>
	)
}
