import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { authConfig } from "../../../../lib/auth";

const handler = NextAuth(authConfig);

// export { handler as GET, handler as POST };
export default handler;
