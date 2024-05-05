import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/utils/db";
import { cache } from "react";

export const authConfig: NextAuthOptions = {
  adaper: PrismaAdapter(prisma),

  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@email.com",
        },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials || !credentials.password || !credentials.email) {
            console.log("no credentials");
            return null;
          }
          // console.log(credentials);

          const dbUser = await prisma.user.findFirst({
            where: { email: credentials.email },
          });

          if (!dbUser) return null;

          // console.log("user", dbUser);
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            dbUser.hash_password,
          );

          if (dbUser && isPasswordCorrect) {
            const { password, createAt, id, ...dbUserWithouPassword } = dbUser;
            return dbUserWithouPassword;
          }
          // console.log("thes password is incorret");
          return null;
        } catch (err: any) {
          console.log(err.message);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};
