import NextAuth, { getServerSession, NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [],
};

export const handler = NextAuth(authOptions);
export const getServerAuthSession = () => getServerSession(authOptions);
