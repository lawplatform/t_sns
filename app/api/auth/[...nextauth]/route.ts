import NextAuth from "next-auth"
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { SupabaseAdapter } from "@auth/supabase-adapter";
import { useToast } from "@/components/ui/use-toast"


import jwt from "jsonwebtoken";
const handler = NextAuth({
	adapter: SupabaseAdapter({
		url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
		secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "",
	}),
	pages: {
		signIn: '/signIn',
	},

	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		}),
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }
				if (credentials) {
					return user//or return null
				}
				else {
					return null;
				}
			}
		}),
	],

	callbacks: {
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			if (url.startsWith("/")) return `${baseUrl}${url}`
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url
			return baseUrl
		}
	}


})

export { handler as GET, handler as POST }
