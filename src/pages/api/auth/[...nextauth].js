import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user) {
        session.user.id = token.uid;
        const user = await prisma.user.findUnique({
          where:{
            id:session.user.id,
          }
        })
        session.user.name = user.name;
        session.user.firstName = user.firstName;
        session.user.lastName = user.lastName;
        session.user.phone = user.phone;
        session.user.country = user.country;
        session.user.city = user.city;
        session.user.bio = user.bio;
        session.user.postalCode = user.postalCode
      }
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) {
        token.uid = user.id;
      }
      return token;
    },
  },
  session: {
    strategy: 'jwt',
  },
});