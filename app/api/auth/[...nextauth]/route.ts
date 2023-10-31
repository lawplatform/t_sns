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
	providers: [
		NaverProvider({
			clientId: process.env.NAVER_CLIENT_ID || "",
			clientSecret: process.env.NAVER_CLIENT_SECRET || "",
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
			async authorize(credentials, req) {
				const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }
				if (user) {
					return user;
				} else {
					return null;
				}
			}

		}),
		CredentialsProvider({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: 'Credentials',
			// `credentials` is used to generate a form on the sign in page.
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				// Add logic here to look up the user from the credentials supplied
				const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' }

				if (user) {


				} else {
					return null
				}
			},
		}),
	],

	callbacks: {
		async session({ session, user }) {
			const signingSecret = process.env.NEXT_PUBLIC_SUPABASE_JWT
			if (signingSecret) {
				const payload = {
					aud: "authenticated",
					exp: Math.floor(new Date(session.expires).getTime() / 1000),
					sub: user.id,
					email: user.email,
					role: "authenticated",
				}
				session.supabaseAccessToken = jwt.sign(payload, signingSecret)
			}
			return session
		},
		async signIn({ user, account, profile, email, credentials }) {
			try {
				return true; //add db check logic
			} catch (error) {
				console.log(error);

			}
		}


	},



})

export { handler as GET, handler as POST }
