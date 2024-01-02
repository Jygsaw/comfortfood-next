import NextAuth, { getServerSession } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import PostgresAdapter from "@auth/pg-adapter";
import { pool } from "app/_lib/db";

import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next";
import type { NextAuthOptions } from "next-auth";

const config = {
    adapter: PostgresAdapter(pool),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
    ],
    callbacks: {
        async session({ session, user }: any) {
            session.user.userId = user.user_id;
            return session;
        },
    },
} satisfies NextAuthOptions;

export const auth = NextAuth(config);

// TODO: migrate to auth implementation after NextAuth.js becomes Auth.js
//       see: https://authjs.dev/guides/upgrade-to-v5?authentication-method=server-component
export function getAuth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
    return getServerSession(...args, config);
}

export default auth;
