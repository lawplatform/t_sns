import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter";
import GoogleProvider from "next-auth/providers/google";
import jwt from "jsonwebtoken"

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/core/module.index#authconfig
const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID || "",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
		})],
	adapter: SupabaseAdapter({
		url: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
		secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY || "",
	}),
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
		async redirect({ url, baseUrl }) {
			console.log(url);
			console.log(baseUrl);


			if (url.startsWith("/")) return `${baseUrl}${url}`
			else if (new URL(url).origin === baseUrl) return url
			return url
		}

	}
}
)


export { handler as GET, handler as POST }
