import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials?.email;
        const password = credentials?.password;

        if (!email || !password) {
          return null;
        }

        const normalizedEmail = String(email).trim().toLowerCase();

        if (!normalizedEmail.includes('@')) {
          return null;
        }

        return {
          id: 'demo-user',
          email: normalizedEmail,
          name: 'VoltBiz Demo User',
          role: 'customer',
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role?: string }).role ?? 'customer';
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        const user = session.user as typeof session.user & { role?: string };
        user.role = typeof token.role === 'string' ? token.role : 'customer';
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
