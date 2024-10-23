import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],

  callbacks: {
    authorized({ auth, request }: { auth: any; request: any }) {
      return !!auth?.user;
    },

    async signIn({ user }: { user: any }) {
      try {
        const existingGuest = await getGuest(user.email!);
        if (!existingGuest)
          await createGuest({ email: user.email!, fullName: user.name! });
        return true;
      } catch (error) {
        console.error("Error in signIn: ", error);
        return false;
      }
    },

    async session({ session }: { session: any }) {
      const guest = await getGuest(session.user.email);
      session.user.id = guest.id;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
