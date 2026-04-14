import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const { handlers } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				username: { label: "Email", type: "email", placeholder: "you@example.com" },
				password: { label: "Password", type: "password", placeholder: "password" }
			},
			async authorize() {
				// Stub — credentials auth not yet implemented
				return null;
			}
		}),
		Google
	],
	pages: {
		signIn: '/login',
	}
});

export const { GET, POST } = handlers;
