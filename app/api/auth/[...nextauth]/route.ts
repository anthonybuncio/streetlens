import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Email",
			credentials: {
				username: { label: "Email", type: "email", placeholder: "you@example.com" },
				password: { label: "Password", type: "password", placeholder: "password" }
			},
			async authorize() {
				// Stub — credentials auth not yet implemented
				return null;
			}
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET
		})
	],
	pages: {
		signIn: '/login',
	}
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
