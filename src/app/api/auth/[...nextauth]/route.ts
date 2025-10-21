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
        const res = await fetch(`${process.env.DOMAIN}/login`, {
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
    // 1. Add token to JWT
    async jwt(data) {
      const { token, user }=data;
      
      if (user) {
        token.accessToken = user.token; // store backend JWT
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },

    // 2. Make token available in session
    async session(data) {
      const { session, token } = data

      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username;
      }
      session.accessToken = token.accessToken; // 👈 available in frontend
      return session;
    },
  },
});

export { handler as GET, handler as POST };