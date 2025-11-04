import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // calling the backend API for login
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_DOMAIN}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Invalid credentials");
        }

        // Must return a plain object for session 
        return {
          ...data.user//this is not good practice we need to explicitly pick keys and values
        };
      },
    }),
  ],
  pages: {
    signIn: "/login", // custom login page
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET, // add in .env.local

  callbacks: {
    // 1️⃣ — Attach user info to the token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
        token.accessToken = user.token; // store backend token
      }
      return token;
    },

    // 2️⃣ — Expose token data via session
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };