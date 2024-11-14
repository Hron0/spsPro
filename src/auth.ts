import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/backend/db/index"
import { getUserById } from "@/lib/data/user";
import authConfig from "./auth.config"

export const {
  handlers: { GET, POST }, auth, signIn, signOut
} = NextAuth({
  adapter: DrizzleAdapter(db),
  session: { strategy: "jwt" },
  trustHost: true,
  ...authConfig,
})