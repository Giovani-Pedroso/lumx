import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";

import prisma from "@/utils/db";
import { cache } from "react";

export const authConfig: NextAuthOptions = {
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
        if (!credentials || !credentials.password || !credentials.email) {
          console.log("no credentials");
          return null;
        }
        const dbUser = await prisma.user.findFirst({
          where: { email: credentials.email },
        });
        console.log("user", dbUser);

        if (dbUser && dbUser.password === credentials.password) {
          const { password, createAt, id, ...dbUserWithouPassword } = dbUser;
          return dbUserWithouPassword;
        }
        return null;
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
  ],
};
